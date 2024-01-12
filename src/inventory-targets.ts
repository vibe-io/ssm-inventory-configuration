import { IInstance } from 'aws-cdk-lib/aws-ec2';
import { CfnAssociation } from 'aws-cdk-lib/aws-ssm';
import { IConstruct } from 'constructs';


/**
 * Represents a selection of EC2 instances that should have their data
 * collected by SSM Inventory.
 */
export interface IInventoryTarget {
  /**
   * Builds low level target configurations to be used in an SSM Association.
   *
   * This should be resolved towards the end of the app synth process to all
   * customization of selected instances.
   *
   * The `scope` variable is currently unused but is provided to allow custom
   * and future implementations to make context aware decisions.
   *
   * @param scope The node that is configuring the SSM Association controlling
   * SSM Inventory.
   */
  bind(scope: IConstruct): CfnAssociation.TargetProperty[];
}

/**
 * Generic base class representing a selection of EC2 instances that should
 * have SSM Inventory data collection enabled.
 */
export abstract class InventoryTarget implements IInventoryTarget {
  /**
   * Creates a target that can be used to select all instances in the region
   * where inventory is being configured.
   *
   * @returns A target that matches all instances in the region.
   */
  public static allInstances(): AllInstancesTarget {
    return new AllInstancesTarget();
  }

  /**
   * Creates a target that can be used to select specific instances in the
   * region where inventory is being configured.
   *
   * @returns A target that matches the specified set of instances.
   */
  public static instances(...instances: IInstance[]): InstancesTarget {
    return new InstancesTarget(...instances);
  }

  /**
   * Creates a target that can be used to select instances in the region
   * where inventory is being configured based on their tags. This can be
   * especially useful to select specific instances that are created
   * automatically (such as through auto scaling groups).
   *
   * @returns A target that matches the specified set of instances.
   */
  public static tags(tags: {[key: string]:string[]}): TagsTarget {
    return new TagsTarget(tags);
  }


  /**
   * Builds low level target configurations to be used in an SSM Association.
   *
   * This should be resolved towards the end of the app synth process to all
   * customization of selected instances.
   *
   * The `scope` variable is currently unused but is provided to allow custom
   * and future implementations to make context aware decisions.
   *
   * @param scope The node that is configuring the SSM Association controlling
   * SSM Inventory.
   */
  public abstract bind(scope: IConstruct): CfnAssociation.TargetProperty[];
}

/**
 * A target that can be used to select all instances in the region where
 * inventory is being configured.
 */
export class AllInstancesTarget extends InventoryTarget {
  /**
   * Builds low level target configurations to be used in an SSM Association.
   *
   * This should be resolved towards the end of the app synth process to all
   * customization of selected instances.
   *
   * The `scope` variable is currently unused but is provided to allow custom
   * and future implementations to make context aware decisions.
   *
   * @param _scope The node that is configuring the SSM Association controlling
   * SSM Inventory.
   */
  public bind(_scope: IConstruct): CfnAssociation.TargetProperty[] {
    return [{
      key: 'InstanceIds',
      values: [
        '*',
      ],
    }];
  }
}

/**
 * A target that can be used to select specific instances in the region where
 * inventory is being configured.
 */
export class InstancesTarget extends InventoryTarget {
  /**
   * Internal collection of tracked instances.
   */
  private _instances: IInstance[];


  /**
   * Creates a new instance of the InstancesTarget class.
   *
   * @param instances The instances that should be included in Inventory.
   */
  public constructor(...instances: IInstance[]) {
    super();

    this._instances = [];

    this.addInstances(...instances);
  }

  /**
   * Adds new instances that should have its data collected by SSM Inventory.
   *
   * @param instances The instances to add.
   * @returns The InstancesTarget where the instances were added.
   */
  public addInstances(...instances: IInstance[]): InstancesTarget {
    instances.forEach((x) => {
      this._instances.push(x);
    });

    return this;
  }

  /**
   * Builds low level target configurations to be used in an SSM Association.
   *
   * This should be resolved towards the end of the app synth process to all
   * customization of selected instances.
   *
   * The `scope` variable is currently unused but is provided to allow custom
   * and future implementations to make context aware decisions.
   *
   * @param _scope The node that is configuring the SSM Association controlling
   * SSM Inventory.
   */
  public bind(_scope: IConstruct): CfnAssociation.TargetProperty[] {
    if (this._instances.length === 0) {
      throw new Error([
        'Instances target must have at least one instance associated.',
      ].join(' '));
    }

    return [{
      key: 'InstanceIds',
      values: this._instances.map((x) => {
        return x.instanceId;
      }),
    }];
  }
}

/**
 * A target that can be used to select instances in the region where inventory
 * is being configured based on their tags. This can be especially useful to
 * select specific instances that are created automatically (such as through
 * auto scaling groups).
 */
export class TagsTarget extends InventoryTarget {
  /**
   * Internal collection of tracked tags.
   */
  private _tags: {[key: string]:string[]};


  /**
   * Creates a new instance of the TagsTarget class.
   *
   * @param tags The tags which should be used to select EC2 instances.
   */
  public constructor(tags: {[key: string]:string[]}) {
    super();

    this._tags = {};

    Object.keys(tags).forEach((x) => {
      this.addTag(x, ...tags[x]);
    });
  }

  /**
   * Adds a new tag to be used to select EC2 Instances for SSM Inventory.
   *
   * Tags that are already associated with the target will have their values
   * merged by the values for that tag that are already tracks with duplicate
   * values removed.
   *
   * @param key The tag key to add.
   * @param values The values to match for the specified tag key.
   * @returns The TagsTarget object that the tag was added to.
   */
  public addTag(key: string, ...values: string[]): TagsTarget {
    if (!(key in this._tags)) {
      this._tags[key] = [];
    }

    const curValues = this._tags[key];
    values.forEach((x) => {
      if (!curValues.includes(x)) {
        curValues.push(x);
      }
    });

    return this;
  }

  /**
   * Builds low level target configurations to be used in an SSM Association.
   *
   * This should be resolved towards the end of the app synth process to all
   * customization of selected instances.
   *
   * The `scope` variable is currently unused but is provided to allow custom
   * and future implementations to make context aware decisions.
   *
   * @param _scope The node that is configuring the SSM Association controlling
   * SSM Inventory.
   */
  public bind(_scope: IConstruct): CfnAssociation.TargetProperty[] {
    if (Object.keys(this._tags).length === 0) {
      throw new Error([
        'Tags target must have at least one tag associated.',
      ].join(' '));
    }

    return Object.keys(this._tags).map((x) => {
      if (this._tags[x].length === 0) {
        throw new Error([
          'All tags target tags must have values associated. Missing for',
          `'${x}'.`,
        ].join(' '));
      }

      return {
        key: `tag:${x}`,
        values: this._tags[x],
      };
    });
  }
}