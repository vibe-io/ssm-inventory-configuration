import { Resource, ResourceProps } from 'aws-cdk-lib';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { IRole, ManagedPolicy } from 'aws-cdk-lib/aws-iam';
import { IConstruct } from 'constructs';
import { Ec2RequiredPolicyConfigRule } from 'ec2-required-policy-config-rule';
import { Ec2RequiredRoleConfigRule } from 'ec2-required-role-config-rule';
import { InventoryAssociation, InventoryCategories } from './inventory-association';
import { IInventoryTarget } from './inventory-targets';


/**
 * Configuration options addressing how resources that impact Systems Manager
 * auditability should be dealt with.
 */
export interface PermissionRemediationOptions {
  /**
   * By default remediation configuration for non-compliant resources are
   * created but are not run automatically.
   *
   * Set this to true to attempt to auto-correct any non-compliant resources
   * to bring them into compliance.
   *
   * @default false
   */
  readonly automatic?: boolean;

  /**
   * A default role to be associated with EC2 instances.
   *
   * EC2 instances that have no roles associated are considered to be
   * non-compliant as they cannot report their status to Systems Manager.
   *
   * When non-compliant EC2 instances are remediated this role will be
   * associated with them.
   *
   * A policy granting the minimum permissions needed to report instance data
   * to Systems Manager will be attached to this role.
   *
   * By default a new role with only the base level of permissions needed for
   * Systems Manager to function will be created.
   *
   * @default Create a new role with minimal permissions
   */
  readonly defaultRole?: IRole;

  /**
   * By default remediation configuration for non-compliant resources are
   * created but are not run automatically.
   *
   * If you don't want any remediation configurations or associated resources
   * created at all this can be set to false.
   *
   * @default true
   */
  readonly enabled?: boolean;
}

/**
 * Configuration options for enabling permission enforcement.
 *
 * With permission enforcement resources that have a configuration that doesn't
 * meet the minimum requirements to allow EC2 resources to communicate with
 * Systems Manager can be detected (non-compliant resources).
 *
 * These non-compliant resources come in two types:
 * * EC2 Instances that have no IAM role associated with them.
 * * IAM Roles for EC2 instances that lack the Systems Manager default policy.
 *
 * With permissions enforcement these non-compliant resources can be
 * identified.
 *
 * Optionally, remediation allows non-compliant resources to be brought into
 * compliant with the press of a button or automatically.
 */
export interface PermissionEnforcementOptions {
  /**
   * Settings related to how non-compliant resources (resources where the
   * configuration could prevent instances from reporting to Systems Manager)
   * should be dealt with.
   */
  readonly remediation?: PermissionRemediationOptions;
}

/**
 * Configuration options for enabling permission enforcement.
 *
 * With permission enforcement resources that have a configuration that doesn't
 * meet the minimum requirements to allow EC2 resources to communicate with
 * Systems Manager can be detected (non-compliant resources).
 *
 * These non-compliant resources come in two types:
 * * EC2 Instances that have no IAM role associated with them.
 * * IAM Roles for EC2 instances that lack the Systems Manager default policy.
 *
 * With permissions enforcement these non-compliant resources can be
 * identified.
 *
 * Optionally, remediation allows non-compliant resources to be brought into
 * compliant with the press of a button or automatically.
 */
export interface PermissionEnforcementProps extends PermissionEnforcementOptions {
  /**
   * Controls whether the resources needed for permission enforcement should be
   * created.
   *
   * @default false
   */
  readonly enabled?: boolean;
}

/**
 * Properties for configuring SSM Inventory.
 */
export interface InventoryConfigurationProps extends ResourceProps {
  /**
   * The types of data that should be collected from managed EC2 instances.
   *
   * @default All categories enabled
   */
  readonly categories?: InventoryCategories;

  /**
   * Controls whether or not resources related to permission enforcement should
   * be created and the specifics of that enforcement.
   *
   * @default false
   */
  readonly permissionEnforcement?: PermissionEnforcementProps;

  /**
   * The intervals at which inventory data should be collected from managed EC2
   * Instances.
   *
   * @default Every 30 minutes
   */
  readonly schedule?: Schedule;

  /**
   * Filters governing which EC2 instances should have their data collected for
   * SSM Inventory.
   *
   * @default All instances
   */
  readonly targets?: IInventoryTarget[];
}


/**
 * Configures SSM Inventory to collect data from managed EC2 instances.
 *
 * By default settings will match the settings one would get if they were to
 * use the quick setup for Inventory in the Systems Manager console.
 *
 * Can optionally also set up permission enforcement which detects EC2
 * instances and IAM roles with insufficient permissions to report instance
 * data to Systems Manager. These resources can be remediated to be brought
 * into compliance with the minimum requirements.
 */
export class InventoryConfiguration extends Resource {
  /**
   * Internal marker for whether permission management has been enabled.
   */
  private _permissionEnforcemenmt: boolean;

  /**
   * The Systems Manager association that controls the configuration for
   * Inventory.
   */
  protected readonly association: InventoryAssociation;


  /**
   * Creates a new instance of the InventoryConfiguration class.
   *
   * @param scope The node within a CDK app that will serve as the parent for
   * this construct.
   * @param id An name that identifies this construct in the tree. Must be
   * unique in the context of scope.
   * @param props Properties confrolling how this construct should be
   * configured.
   */
  public constructor(scope: IConstruct, id: string, props: InventoryConfigurationProps = {}) {
    super(scope, id, props);

    this._permissionEnforcemenmt = false;

    this.association = new InventoryAssociation(this, 'Resource', {
      categories: props.categories,
      schedule: props.schedule,
      targets: props.targets,
    });

    if (props.permissionEnforcement?.enabled ?? false) {
      this.enablePermissionEnforcement(props.permissionEnforcement);
    }
  }

  /**
   * Enabled permission enforcement.
   *
   * With permission enforcement resources that have a configuration that
   * doesn't meet the minimum requirements to allow EC2 resources to
   * communicate with Systems Manager can be detected (non-compliant
   * resources).
   *
   * These non-compliant resources come in two types:
   * * EC2 Instances that have no IAM role associated with them.
   * * IAM Roles for EC2 instances that lack the Systems Manager default policy.
   *
   * With permissions enforcement these non-compliant resources can be
   * identified.
   *
   * Optionally, remediation allows non-compliant resources to be brought into
   * compliant with the press of a button or automatically.
   *
   * @param options Options for configuring permission enforcement.
   */
  public enablePermissionEnforcement(options: PermissionEnforcementOptions = {}): void {
    if (this._permissionEnforcemenmt) {
      return;
    }

    const policy = ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedEC2InstanceDefaultPolicy');

    const enforceRoles = new Ec2RequiredRoleConfigRule(this, 'auto-configure-roles', {
      remediation: {
        automatic: options.remediation?.automatic,
        enabled: options.remediation?.enabled,
        role: options.remediation?.defaultRole,
      },
    });
    enforceRoles.defaultRole?.addManagedPolicy(policy);

    new Ec2RequiredPolicyConfigRule(this, 'auto-configure-policies', {
      managedPolicy: policy,
      remediation: {
        automatic: options.remediation?.automatic,
        enabled: options.remediation?.enabled,
      },
    });

    this._permissionEnforcemenmt = true;
  }

  /**
   * Adds a new Inventory Target.
   *
   * Inventory Targets are used to select which EC2 instances should have their
   * data collected by SSM Inventory.
   *
   * @param target The target to be added for Inventory.
   * @returns The InventoryConfiguration the target was added to.
   */
  public addTarget(target: IInventoryTarget): InventoryConfiguration {
    this.association.addTarget(target);
    return this;
  }
}