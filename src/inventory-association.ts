import { Duration, Lazy, Resource, ResourceProps } from 'aws-cdk-lib';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { CfnAssociation } from 'aws-cdk-lib/aws-ssm';
import { IConstruct } from 'constructs';
import { IInventoryTarget, InventoryTarget } from './inventory-targets';


/**
 * The types of data that should be collected from managed EC2 instances.
 */
export interface InventoryCategories {
  /**
   * Collect data for installed applications.
   *
   * @default true
   */
  readonly applications?: boolean;

  /**
   * Collect data for AWS Components like amazon-ssm-agent.
   *
   * @default true
   */
  readonly awsComponents?: boolean;

  /**
   * Collect data for custom inventory.
   *
   * @default true
   */
  readonly customInventory?: boolean;

  /**
   * Collect additional information about the instance, including the CPU
   * model, speed, and the number of cores, to name a few.
   *
   * @default true
   */
  readonly instanceDetailedInformation?: boolean;

  /**
   * Collect data for Network configurations.
   *
   * @default true
   */
  readonly networkConfig?: boolean;

  /**
   * Collect data for service configurations.
   *
   * Windows only.
   *
   * @default true
   */
  readonly services?: boolean;

  /**
   * Collect data for Microsoft Windows role configurations.
   *
   * Windows only.
   *
   * @default true
   */
  readonly windowsRoles?: boolean;

  /**
   * Collect data for all Windows Updates.
   *
   * Windows only.
   *
   * @default true
   */
  readonly windowsUpdates?: boolean;
}

/**
 * Properties for configuring the SSM Inventory Association.
 */
export interface InventoryAssociationProps extends ResourceProps {
  /**
   * By default, when Inventory is set up, it collects data immediately after
   * it is created and then according to the schedule you specify. Set this to
   * `true` if you don't want an association to run immediately after you
   * create it. This parameter is not supported for rate expressions.
   */
  readonly applyOnlyAtCronInterval?: boolean;

  /**
   * The types of data that should be collected from managed EC2 instances.
   */
  readonly categories?: InventoryCategories;

  /**
   * The schedule that controls how frequently inventory data collection should
   * run.
   *
   * Schedules based on cron expressions will run in Coordinated Universal Time
   * (UTC).
   */
  readonly schedule?: Schedule;

  /**
   * An array of targets that are used to select which EC2 instancesshould have
   * their data collected by SSM Inventory.
   */
  readonly targets?: IInventoryTarget[];
}

/**
 * Configures SSM Inventory to collect data from managed EC2 instances.
 *
 * By default settings will match the settings one would get if they were to
 * use the quick setup for Inventory in the Systems Manager console.
 */
export class InventoryAssociation extends Resource {
  /**
   * The Systems Manager Document that is used to configure SSM Inventory.
   */
  public static readonly ASSOCIATION_DOCUMENT: string = 'AWS-GatherSoftwareInventory';

  /**
   * The default rate at which SSM Inventory should sync data from managed
   * instances.
   */
  public static readonly DEFAULT_SCHEDULE: Schedule = Schedule.rate(Duration.minutes(30));

  /**
   * Internal collection of targets used to select which instances should have
   * their data collected by SSM Inventory.
   */
  private readonly _targets: IInventoryTarget[];

  /**
   * The schedule that controls how frequently inventory data collection should
   * run.
   *
   * Schedules based on cron expressions will run in Coordinated Universal Time
   * (UTC).
   */
  public readonly schedule: Schedule;


  /**
   * Creates a new instance of the InventoryAssociation class.
   *
   * @param scope The node within a CDK app that will serve as the parent for
   * this construct.
   * @param id An name that identifies this construct in the tree. Must be
   * unique in the context of scope.
   * @param props Properties confrolling how this construct should be
   * configured.
   */
  public constructor(scope: IConstruct, id: string, props: InventoryAssociationProps = {}) {
    super(scope, id, props);

    this._targets = [];

    this.schedule = props.schedule ?? InventoryAssociation.DEFAULT_SCHEDULE;

    new CfnAssociation(this, 'Resource', {
      applyOnlyAtCronInterval: props.applyOnlyAtCronInterval ?? false,
      name: InventoryAssociation.ASSOCIATION_DOCUMENT,
      parameters: {
        applications: [
          (props.categories?.applications ?? true) ? 'Enabled' : 'Disabled',
        ],
        awsComponents: [
          (props.categories?.awsComponents ?? true) ? 'Enabled' : 'Disabled',
        ],
        customInventory: [
          (props.categories?.customInventory ?? true) ? 'Enabled' : 'Disabled',
        ],
        instanceDetailedInformation: [
          (props.categories?.instanceDetailedInformation ?? true) ? 'Enabled' : 'Disabled',
        ],
        networkConfig: [
          (props.categories?.networkConfig ?? true) ? 'Enabled' : 'Disabled',
        ],
        services: [
          (props.categories?.services ?? true) ? 'Enabled' : 'Disabled',
        ],
        windowsRoles: [
          (props.categories?.windowsRoles ?? true) ? 'Enabled' : 'Disabled',
        ],
        windowsUpdates: [
          (props.categories?.windowsUpdates ?? true) ? 'Enabled' : 'Disabled',
        ],
      },
      targets: Lazy.any({
        produce: () => {
          return this.renderTargets();
        },
      }),
      scheduleExpression: this.schedule.expressionString,
    });

    props.targets?.forEach((x) => {
      this.addTarget(x);
    });
  }

  /**
   * Adds a new Inventory Target.
   *
   * Inventory Targets are used to select which EC2 instances should have their
   * data collected by SSM Inventory.
   *
   * @param target The target to be added for Inventory.
   * @returns The InventoryAssociation the target was added to.
   */
  public addTarget(target: IInventoryTarget): void {
    this._targets.push(target);
  }

  /**
   * Renders low level target configurations for the association and returns
   * them as an array.
   *
   * @returns A merged collection of all targets added to the association.
   */
  protected renderTargets(): CfnAssociation.TargetProperty[] {
    if (this._targets.length === 0) {
      return InventoryTarget.allInstances().bind(this);
    }

    return this._targets.map((x) => {
      return x.bind(this);
    }).flat();
  }
}