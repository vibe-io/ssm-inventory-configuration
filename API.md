# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InventoryAssociation <a name="InventoryAssociation" id="ssm-inventory-configuration.InventoryAssociation"></a>

Configures SSM Inventory to collect data from managed EC2 instances.

By default settings will match the settings one would get if they were to
use the quick setup for Inventory in the Systems Manager console.

#### Initializers <a name="Initializers" id="ssm-inventory-configuration.InventoryAssociation.Initializer"></a>

```typescript
import { InventoryAssociation } from 'ssm-inventory-configuration'

new InventoryAssociation(scope: IConstruct, id: string, props?: InventoryAssociationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | The node within a CDK app that will serve as the parent for this construct. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | An name that identifies this construct in the tree. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.Initializer.parameter.props">props</a></code> | <code><a href="#ssm-inventory-configuration.InventoryAssociationProps">InventoryAssociationProps</a></code> | Properties confrolling how this construct should be configured. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="ssm-inventory-configuration.InventoryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

The node within a CDK app that will serve as the parent for this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="ssm-inventory-configuration.InventoryAssociation.Initializer.parameter.id"></a>

- *Type:* string

An name that identifies this construct in the tree.

Must be
unique in the context of scope.

---

##### `props`<sup>Optional</sup> <a name="props" id="ssm-inventory-configuration.InventoryAssociation.Initializer.parameter.props"></a>

- *Type:* <a href="#ssm-inventory-configuration.InventoryAssociationProps">InventoryAssociationProps</a>

Properties confrolling how this construct should be configured.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.addTarget">addTarget</a></code> | Adds a new Inventory Target. |

---

##### `toString` <a name="toString" id="ssm-inventory-configuration.InventoryAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="ssm-inventory-configuration.InventoryAssociation.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="ssm-inventory-configuration.InventoryAssociation.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addTarget` <a name="addTarget" id="ssm-inventory-configuration.InventoryAssociation.addTarget"></a>

```typescript
public addTarget(target: IInventoryTarget): void
```

Adds a new Inventory Target.

Inventory Targets are used to select which EC2 instances should have their
data collected by SSM Inventory.

###### `target`<sup>Required</sup> <a name="target" id="ssm-inventory-configuration.InventoryAssociation.addTarget.parameter.target"></a>

- *Type:* <a href="#ssm-inventory-configuration.IInventoryTarget">IInventoryTarget</a>

The target to be added for Inventory.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="ssm-inventory-configuration.InventoryAssociation.isConstruct"></a>

```typescript
import { InventoryAssociation } from 'ssm-inventory-configuration'

InventoryAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="ssm-inventory-configuration.InventoryAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="ssm-inventory-configuration.InventoryAssociation.isOwnedResource"></a>

```typescript
import { InventoryAssociation } from 'ssm-inventory-configuration'

InventoryAssociation.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="ssm-inventory-configuration.InventoryAssociation.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="ssm-inventory-configuration.InventoryAssociation.isResource"></a>

```typescript
import { InventoryAssociation } from 'ssm-inventory-configuration'

InventoryAssociation.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="ssm-inventory-configuration.InventoryAssociation.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule that controls how frequently inventory data collection should run. |

---

##### `node`<sup>Required</sup> <a name="node" id="ssm-inventory-configuration.InventoryAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="ssm-inventory-configuration.InventoryAssociation.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="ssm-inventory-configuration.InventoryAssociation.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="ssm-inventory-configuration.InventoryAssociation.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

The schedule that controls how frequently inventory data collection should run.

Schedules based on cron expressions will run in Coordinated Universal Time
(UTC).

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.property.ASSOCIATION_DOCUMENT">ASSOCIATION_DOCUMENT</a></code> | <code>string</code> | The Systems Manager Document that is used to configure SSM Inventory. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociation.property.DEFAULT_SCHEDULE">DEFAULT_SCHEDULE</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The default rate at which SSM Inventory should sync data from managed instances. |

---

##### `ASSOCIATION_DOCUMENT`<sup>Required</sup> <a name="ASSOCIATION_DOCUMENT" id="ssm-inventory-configuration.InventoryAssociation.property.ASSOCIATION_DOCUMENT"></a>

```typescript
public readonly ASSOCIATION_DOCUMENT: string;
```

- *Type:* string

The Systems Manager Document that is used to configure SSM Inventory.

---

##### `DEFAULT_SCHEDULE`<sup>Required</sup> <a name="DEFAULT_SCHEDULE" id="ssm-inventory-configuration.InventoryAssociation.property.DEFAULT_SCHEDULE"></a>

```typescript
public readonly DEFAULT_SCHEDULE: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

The default rate at which SSM Inventory should sync data from managed instances.

---

### InventoryConfiguration <a name="InventoryConfiguration" id="ssm-inventory-configuration.InventoryConfiguration"></a>

Configures SSM Inventory to collect data from managed EC2 instances.

By default settings will match the settings one would get if they were to
use the quick setup for Inventory in the Systems Manager console.

Can optionally also set up permission enforcement which detects EC2
instances and IAM roles with insufficient permissions to report instance
data to Systems Manager. These resources can be remediated to be brought
into compliance with the minimum requirements.

#### Initializers <a name="Initializers" id="ssm-inventory-configuration.InventoryConfiguration.Initializer"></a>

```typescript
import { InventoryConfiguration } from 'ssm-inventory-configuration'

new InventoryConfiguration(scope: IConstruct, id: string, props?: InventoryConfigurationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | The node within a CDK app that will serve as the parent for this construct. |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | An name that identifies this construct in the tree. |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.Initializer.parameter.props">props</a></code> | <code><a href="#ssm-inventory-configuration.InventoryConfigurationProps">InventoryConfigurationProps</a></code> | Properties confrolling how this construct should be configured. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="ssm-inventory-configuration.InventoryConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

The node within a CDK app that will serve as the parent for this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="ssm-inventory-configuration.InventoryConfiguration.Initializer.parameter.id"></a>

- *Type:* string

An name that identifies this construct in the tree.

Must be
unique in the context of scope.

---

##### `props`<sup>Optional</sup> <a name="props" id="ssm-inventory-configuration.InventoryConfiguration.Initializer.parameter.props"></a>

- *Type:* <a href="#ssm-inventory-configuration.InventoryConfigurationProps">InventoryConfigurationProps</a>

Properties confrolling how this construct should be configured.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.addTarget">addTarget</a></code> | Adds a new Inventory Target. |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.enablePermissionEnforcement">enablePermissionEnforcement</a></code> | Enabled permission enforcement. |

---

##### `toString` <a name="toString" id="ssm-inventory-configuration.InventoryConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="ssm-inventory-configuration.InventoryConfiguration.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="ssm-inventory-configuration.InventoryConfiguration.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addTarget` <a name="addTarget" id="ssm-inventory-configuration.InventoryConfiguration.addTarget"></a>

```typescript
public addTarget(target: IInventoryTarget): InventoryConfiguration
```

Adds a new Inventory Target.

Inventory Targets are used to select which EC2 instances should have their
data collected by SSM Inventory.

###### `target`<sup>Required</sup> <a name="target" id="ssm-inventory-configuration.InventoryConfiguration.addTarget.parameter.target"></a>

- *Type:* <a href="#ssm-inventory-configuration.IInventoryTarget">IInventoryTarget</a>

The target to be added for Inventory.

---

##### `enablePermissionEnforcement` <a name="enablePermissionEnforcement" id="ssm-inventory-configuration.InventoryConfiguration.enablePermissionEnforcement"></a>

```typescript
public enablePermissionEnforcement(options?: PermissionEnforcementOptions): void
```

Enabled permission enforcement.

With permission enforcement resources that have a configuration that
doesn't meet the minimum requirements to allow EC2 resources to
communicate with Systems Manager can be detected (non-compliant
resources).

These non-compliant resources come in two types:
* EC2 Instances that have no IAM role associated with them.
* IAM Roles for EC2 instances that lack the Systems Manager default policy.

With permissions enforcement these non-compliant resources can be
identified.

Optionally, remediation allows non-compliant resources to be brought into
compliant with the press of a button or automatically.

###### `options`<sup>Optional</sup> <a name="options" id="ssm-inventory-configuration.InventoryConfiguration.enablePermissionEnforcement.parameter.options"></a>

- *Type:* <a href="#ssm-inventory-configuration.PermissionEnforcementOptions">PermissionEnforcementOptions</a>

Options for configuring permission enforcement.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="ssm-inventory-configuration.InventoryConfiguration.isConstruct"></a>

```typescript
import { InventoryConfiguration } from 'ssm-inventory-configuration'

InventoryConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="ssm-inventory-configuration.InventoryConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="ssm-inventory-configuration.InventoryConfiguration.isOwnedResource"></a>

```typescript
import { InventoryConfiguration } from 'ssm-inventory-configuration'

InventoryConfiguration.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="ssm-inventory-configuration.InventoryConfiguration.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="ssm-inventory-configuration.InventoryConfiguration.isResource"></a>

```typescript
import { InventoryConfiguration } from 'ssm-inventory-configuration'

InventoryConfiguration.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="ssm-inventory-configuration.InventoryConfiguration.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#ssm-inventory-configuration.InventoryConfiguration.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="ssm-inventory-configuration.InventoryConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="ssm-inventory-configuration.InventoryConfiguration.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="ssm-inventory-configuration.InventoryConfiguration.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


## Structs <a name="Structs" id="Structs"></a>

### InventoryAssociationProps <a name="InventoryAssociationProps" id="ssm-inventory-configuration.InventoryAssociationProps"></a>

Properties for configuring the SSM Inventory Association.

#### Initializer <a name="Initializer" id="ssm-inventory-configuration.InventoryAssociationProps.Initializer"></a>

```typescript
import { InventoryAssociationProps } from 'ssm-inventory-configuration'

const inventoryAssociationProps: InventoryAssociationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryAssociationProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociationProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociationProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociationProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociationProps.property.applyOnlyAtCronInterval">applyOnlyAtCronInterval</a></code> | <code>boolean</code> | By default, when Inventory is set up, it collects data immediately after it is created and then according to the schedule you specify. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociationProps.property.categories">categories</a></code> | <code><a href="#ssm-inventory-configuration.InventoryCategories">InventoryCategories</a></code> | The types of data that should be collected from managed EC2 instances. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociationProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule that controls how frequently inventory data collection should run. |
| <code><a href="#ssm-inventory-configuration.InventoryAssociationProps.property.targets">targets</a></code> | <code><a href="#ssm-inventory-configuration.IInventoryTarget">IInventoryTarget</a>[]</code> | An array of targets that are used to select which EC2 instancesshould have their data collected by SSM Inventory. |

---

##### `account`<sup>Optional</sup> <a name="account" id="ssm-inventory-configuration.InventoryAssociationProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="ssm-inventory-configuration.InventoryAssociationProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="ssm-inventory-configuration.InventoryAssociationProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="ssm-inventory-configuration.InventoryAssociationProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `applyOnlyAtCronInterval`<sup>Optional</sup> <a name="applyOnlyAtCronInterval" id="ssm-inventory-configuration.InventoryAssociationProps.property.applyOnlyAtCronInterval"></a>

```typescript
public readonly applyOnlyAtCronInterval: boolean;
```

- *Type:* boolean

By default, when Inventory is set up, it collects data immediately after it is created and then according to the schedule you specify.

Set this to
`true` if you don't want an association to run immediately after you
create it. This parameter is not supported for rate expressions.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="ssm-inventory-configuration.InventoryAssociationProps.property.categories"></a>

```typescript
public readonly categories: InventoryCategories;
```

- *Type:* <a href="#ssm-inventory-configuration.InventoryCategories">InventoryCategories</a>

The types of data that should be collected from managed EC2 instances.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="ssm-inventory-configuration.InventoryAssociationProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

The schedule that controls how frequently inventory data collection should run.

Schedules based on cron expressions will run in Coordinated Universal Time
(UTC).

---

##### `targets`<sup>Optional</sup> <a name="targets" id="ssm-inventory-configuration.InventoryAssociationProps.property.targets"></a>

```typescript
public readonly targets: IInventoryTarget[];
```

- *Type:* <a href="#ssm-inventory-configuration.IInventoryTarget">IInventoryTarget</a>[]

An array of targets that are used to select which EC2 instancesshould have their data collected by SSM Inventory.

---

### InventoryCategories <a name="InventoryCategories" id="ssm-inventory-configuration.InventoryCategories"></a>

The types of data that should be collected from managed EC2 instances.

#### Initializer <a name="Initializer" id="ssm-inventory-configuration.InventoryCategories.Initializer"></a>

```typescript
import { InventoryCategories } from 'ssm-inventory-configuration'

const inventoryCategories: InventoryCategories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryCategories.property.applications">applications</a></code> | <code>boolean</code> | Collect data for installed applications. |
| <code><a href="#ssm-inventory-configuration.InventoryCategories.property.awsComponents">awsComponents</a></code> | <code>boolean</code> | Collect data for AWS Components like amazon-ssm-agent. |
| <code><a href="#ssm-inventory-configuration.InventoryCategories.property.customInventory">customInventory</a></code> | <code>boolean</code> | Collect data for custom inventory. |
| <code><a href="#ssm-inventory-configuration.InventoryCategories.property.instanceDetailedInformation">instanceDetailedInformation</a></code> | <code>boolean</code> | Collect additional information about the instance, including the CPU model, speed, and the number of cores, to name a few. |
| <code><a href="#ssm-inventory-configuration.InventoryCategories.property.networkConfig">networkConfig</a></code> | <code>boolean</code> | Collect data for Network configurations. |
| <code><a href="#ssm-inventory-configuration.InventoryCategories.property.services">services</a></code> | <code>boolean</code> | Collect data for service configurations. |
| <code><a href="#ssm-inventory-configuration.InventoryCategories.property.windowsRoles">windowsRoles</a></code> | <code>boolean</code> | Collect data for Microsoft Windows role configurations. |
| <code><a href="#ssm-inventory-configuration.InventoryCategories.property.windowsUpdates">windowsUpdates</a></code> | <code>boolean</code> | Collect data for all Windows Updates. |

---

##### `applications`<sup>Optional</sup> <a name="applications" id="ssm-inventory-configuration.InventoryCategories.property.applications"></a>

```typescript
public readonly applications: boolean;
```

- *Type:* boolean
- *Default:* true

Collect data for installed applications.

---

##### `awsComponents`<sup>Optional</sup> <a name="awsComponents" id="ssm-inventory-configuration.InventoryCategories.property.awsComponents"></a>

```typescript
public readonly awsComponents: boolean;
```

- *Type:* boolean
- *Default:* true

Collect data for AWS Components like amazon-ssm-agent.

---

##### `customInventory`<sup>Optional</sup> <a name="customInventory" id="ssm-inventory-configuration.InventoryCategories.property.customInventory"></a>

```typescript
public readonly customInventory: boolean;
```

- *Type:* boolean
- *Default:* true

Collect data for custom inventory.

---

##### `instanceDetailedInformation`<sup>Optional</sup> <a name="instanceDetailedInformation" id="ssm-inventory-configuration.InventoryCategories.property.instanceDetailedInformation"></a>

```typescript
public readonly instanceDetailedInformation: boolean;
```

- *Type:* boolean
- *Default:* true

Collect additional information about the instance, including the CPU model, speed, and the number of cores, to name a few.

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="ssm-inventory-configuration.InventoryCategories.property.networkConfig"></a>

```typescript
public readonly networkConfig: boolean;
```

- *Type:* boolean
- *Default:* true

Collect data for Network configurations.

---

##### `services`<sup>Optional</sup> <a name="services" id="ssm-inventory-configuration.InventoryCategories.property.services"></a>

```typescript
public readonly services: boolean;
```

- *Type:* boolean
- *Default:* true

Collect data for service configurations.

Windows only.

---

##### `windowsRoles`<sup>Optional</sup> <a name="windowsRoles" id="ssm-inventory-configuration.InventoryCategories.property.windowsRoles"></a>

```typescript
public readonly windowsRoles: boolean;
```

- *Type:* boolean
- *Default:* true

Collect data for Microsoft Windows role configurations.

Windows only.

---

##### `windowsUpdates`<sup>Optional</sup> <a name="windowsUpdates" id="ssm-inventory-configuration.InventoryCategories.property.windowsUpdates"></a>

```typescript
public readonly windowsUpdates: boolean;
```

- *Type:* boolean
- *Default:* true

Collect data for all Windows Updates.

Windows only.

---

### InventoryConfigurationProps <a name="InventoryConfigurationProps" id="ssm-inventory-configuration.InventoryConfigurationProps"></a>

Properties for configuring SSM Inventory.

#### Initializer <a name="Initializer" id="ssm-inventory-configuration.InventoryConfigurationProps.Initializer"></a>

```typescript
import { InventoryConfigurationProps } from 'ssm-inventory-configuration'

const inventoryConfigurationProps: InventoryConfigurationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryConfigurationProps.property.account">account</a></code> | <code>string</code> | The AWS account ID this resource belongs to. |
| <code><a href="#ssm-inventory-configuration.InventoryConfigurationProps.property.environmentFromArn">environmentFromArn</a></code> | <code>string</code> | ARN to deduce region and account from. |
| <code><a href="#ssm-inventory-configuration.InventoryConfigurationProps.property.physicalName">physicalName</a></code> | <code>string</code> | The value passed in by users to the physical name prop of the resource. |
| <code><a href="#ssm-inventory-configuration.InventoryConfigurationProps.property.region">region</a></code> | <code>string</code> | The AWS region this resource belongs to. |
| <code><a href="#ssm-inventory-configuration.InventoryConfigurationProps.property.categories">categories</a></code> | <code><a href="#ssm-inventory-configuration.InventoryCategories">InventoryCategories</a></code> | The types of data that should be collected from managed EC2 instances. |
| <code><a href="#ssm-inventory-configuration.InventoryConfigurationProps.property.permissionEnforcement">permissionEnforcement</a></code> | <code><a href="#ssm-inventory-configuration.PermissionEnforcementProps">PermissionEnforcementProps</a></code> | Controls whether or not resources related to permission enforcement should be created and the specifics of that enforcement. |
| <code><a href="#ssm-inventory-configuration.InventoryConfigurationProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The intervals at which inventory data should be collected from managed EC2 Instances. |
| <code><a href="#ssm-inventory-configuration.InventoryConfigurationProps.property.targets">targets</a></code> | <code><a href="#ssm-inventory-configuration.IInventoryTarget">IInventoryTarget</a>[]</code> | Filters governing which EC2 instances should have their data collected for SSM Inventory. |

---

##### `account`<sup>Optional</sup> <a name="account" id="ssm-inventory-configuration.InventoryConfigurationProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="environmentFromArn" id="ssm-inventory-configuration.InventoryConfigurationProps.property.environmentFromArn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* string
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN.
This should be used for imported resources.

Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="physicalName" id="ssm-inventory-configuration.InventoryConfigurationProps.property.physicalName"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* string
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by
  CloudFormation during deployment.
- a concrete value implies a specific physical name
- `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated
  by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="region" id="ssm-inventory-configuration.InventoryConfigurationProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="ssm-inventory-configuration.InventoryConfigurationProps.property.categories"></a>

```typescript
public readonly categories: InventoryCategories;
```

- *Type:* <a href="#ssm-inventory-configuration.InventoryCategories">InventoryCategories</a>
- *Default:* All categories enabled

The types of data that should be collected from managed EC2 instances.

---

##### `permissionEnforcement`<sup>Optional</sup> <a name="permissionEnforcement" id="ssm-inventory-configuration.InventoryConfigurationProps.property.permissionEnforcement"></a>

```typescript
public readonly permissionEnforcement: PermissionEnforcementProps;
```

- *Type:* <a href="#ssm-inventory-configuration.PermissionEnforcementProps">PermissionEnforcementProps</a>
- *Default:* false

Controls whether or not resources related to permission enforcement should be created and the specifics of that enforcement.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="ssm-inventory-configuration.InventoryConfigurationProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* Every 30 minutes

The intervals at which inventory data should be collected from managed EC2 Instances.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="ssm-inventory-configuration.InventoryConfigurationProps.property.targets"></a>

```typescript
public readonly targets: IInventoryTarget[];
```

- *Type:* <a href="#ssm-inventory-configuration.IInventoryTarget">IInventoryTarget</a>[]
- *Default:* All instances

Filters governing which EC2 instances should have their data collected for SSM Inventory.

---

### PermissionEnforcementOptions <a name="PermissionEnforcementOptions" id="ssm-inventory-configuration.PermissionEnforcementOptions"></a>

Configuration options for enabling permission enforcement.

With permission enforcement resources that have a configuration that doesn't
meet the minimum requirements to allow EC2 resources to communicate with
Systems Manager can be detected (non-compliant resources).

These non-compliant resources come in two types:
* EC2 Instances that have no IAM role associated with them.
* IAM Roles for EC2 instances that lack the Systems Manager default policy.

With permissions enforcement these non-compliant resources can be
identified.

Optionally, remediation allows non-compliant resources to be brought into
compliant with the press of a button or automatically.

#### Initializer <a name="Initializer" id="ssm-inventory-configuration.PermissionEnforcementOptions.Initializer"></a>

```typescript
import { PermissionEnforcementOptions } from 'ssm-inventory-configuration'

const permissionEnforcementOptions: PermissionEnforcementOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.PermissionEnforcementOptions.property.remediation">remediation</a></code> | <code><a href="#ssm-inventory-configuration.PermissionRemediationOptions">PermissionRemediationOptions</a></code> | Settings related to how non-compliant resources (resources where the configuration could prevent instances from reporting to Systems Manager) should be dealt with. |

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="ssm-inventory-configuration.PermissionEnforcementOptions.property.remediation"></a>

```typescript
public readonly remediation: PermissionRemediationOptions;
```

- *Type:* <a href="#ssm-inventory-configuration.PermissionRemediationOptions">PermissionRemediationOptions</a>

Settings related to how non-compliant resources (resources where the configuration could prevent instances from reporting to Systems Manager) should be dealt with.

---

### PermissionEnforcementProps <a name="PermissionEnforcementProps" id="ssm-inventory-configuration.PermissionEnforcementProps"></a>

Configuration options for enabling permission enforcement.

With permission enforcement resources that have a configuration that doesn't
meet the minimum requirements to allow EC2 resources to communicate with
Systems Manager can be detected (non-compliant resources).

These non-compliant resources come in two types:
* EC2 Instances that have no IAM role associated with them.
* IAM Roles for EC2 instances that lack the Systems Manager default policy.

With permissions enforcement these non-compliant resources can be
identified.

Optionally, remediation allows non-compliant resources to be brought into
compliant with the press of a button or automatically.

#### Initializer <a name="Initializer" id="ssm-inventory-configuration.PermissionEnforcementProps.Initializer"></a>

```typescript
import { PermissionEnforcementProps } from 'ssm-inventory-configuration'

const permissionEnforcementProps: PermissionEnforcementProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.PermissionEnforcementProps.property.remediation">remediation</a></code> | <code><a href="#ssm-inventory-configuration.PermissionRemediationOptions">PermissionRemediationOptions</a></code> | Settings related to how non-compliant resources (resources where the configuration could prevent instances from reporting to Systems Manager) should be dealt with. |
| <code><a href="#ssm-inventory-configuration.PermissionEnforcementProps.property.enabled">enabled</a></code> | <code>boolean</code> | Controls whether the resources needed for permission enforcement should be created. |

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="ssm-inventory-configuration.PermissionEnforcementProps.property.remediation"></a>

```typescript
public readonly remediation: PermissionRemediationOptions;
```

- *Type:* <a href="#ssm-inventory-configuration.PermissionRemediationOptions">PermissionRemediationOptions</a>

Settings related to how non-compliant resources (resources where the configuration could prevent instances from reporting to Systems Manager) should be dealt with.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="ssm-inventory-configuration.PermissionEnforcementProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* false

Controls whether the resources needed for permission enforcement should be created.

---

### PermissionRemediationOptions <a name="PermissionRemediationOptions" id="ssm-inventory-configuration.PermissionRemediationOptions"></a>

Configuration options addressing how resources that impact Systems Manager auditability should be dealt with.

#### Initializer <a name="Initializer" id="ssm-inventory-configuration.PermissionRemediationOptions.Initializer"></a>

```typescript
import { PermissionRemediationOptions } from 'ssm-inventory-configuration'

const permissionRemediationOptions: PermissionRemediationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.PermissionRemediationOptions.property.automatic">automatic</a></code> | <code>boolean</code> | By default remediation configuration for non-compliant resources are created but are not run automatically. |
| <code><a href="#ssm-inventory-configuration.PermissionRemediationOptions.property.defaultRole">defaultRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | A default role to be associated with EC2 instances. |
| <code><a href="#ssm-inventory-configuration.PermissionRemediationOptions.property.enabled">enabled</a></code> | <code>boolean</code> | By default remediation configuration for non-compliant resources are created but are not run automatically. |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="ssm-inventory-configuration.PermissionRemediationOptions.property.automatic"></a>

```typescript
public readonly automatic: boolean;
```

- *Type:* boolean
- *Default:* false

By default remediation configuration for non-compliant resources are created but are not run automatically.

Set this to true to attempt to auto-correct any non-compliant resources
to bring them into compliance.

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="ssm-inventory-configuration.PermissionRemediationOptions.property.defaultRole"></a>

```typescript
public readonly defaultRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* Create a new role with minimal permissions

A default role to be associated with EC2 instances.

EC2 instances that have no roles associated are considered to be
non-compliant as they cannot report their status to Systems Manager.

When non-compliant EC2 instances are remediated this role will be
associated with them.

A policy granting the minimum permissions needed to report instance data
to Systems Manager will be attached to this role.

By default a new role with only the base level of permissions needed for
Systems Manager to function will be created.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="ssm-inventory-configuration.PermissionRemediationOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

By default remediation configuration for non-compliant resources are created but are not run automatically.

If you don't want any remediation configurations or associated resources
created at all this can be set to false.

---

## Classes <a name="Classes" id="Classes"></a>

### AllInstancesTarget <a name="AllInstancesTarget" id="ssm-inventory-configuration.AllInstancesTarget"></a>

A target that can be used to select all instances in the region where inventory is being configured.

#### Initializers <a name="Initializers" id="ssm-inventory-configuration.AllInstancesTarget.Initializer"></a>

```typescript
import { AllInstancesTarget } from 'ssm-inventory-configuration'

new AllInstancesTarget()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.AllInstancesTarget.bind">bind</a></code> | Builds low level target configurations to be used in an SSM Association. |

---

##### `bind` <a name="bind" id="ssm-inventory-configuration.AllInstancesTarget.bind"></a>

```typescript
public bind(_scope: IConstruct): TargetProperty[]
```

Builds low level target configurations to be used in an SSM Association.

This should be resolved towards the end of the app synth process to all
customization of selected instances.

The `scope` variable is currently unused but is provided to allow custom
and future implementations to make context aware decisions.

###### `_scope`<sup>Required</sup> <a name="_scope" id="ssm-inventory-configuration.AllInstancesTarget.bind.parameter._scope"></a>

- *Type:* constructs.IConstruct

The node that is configuring the SSM Association controlling SSM Inventory.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.AllInstancesTarget.allInstances">allInstances</a></code> | Creates a target that can be used to select all instances in the region where inventory is being configured. |
| <code><a href="#ssm-inventory-configuration.AllInstancesTarget.instances">instances</a></code> | Creates a target that can be used to select specific instances in the region where inventory is being configured. |
| <code><a href="#ssm-inventory-configuration.AllInstancesTarget.tags">tags</a></code> | Creates a target that can be used to select instances in the region where inventory is being configured based on their tags. |

---

##### `allInstances` <a name="allInstances" id="ssm-inventory-configuration.AllInstancesTarget.allInstances"></a>

```typescript
import { AllInstancesTarget } from 'ssm-inventory-configuration'

AllInstancesTarget.allInstances()
```

Creates a target that can be used to select all instances in the region where inventory is being configured.

##### `instances` <a name="instances" id="ssm-inventory-configuration.AllInstancesTarget.instances"></a>

```typescript
import { AllInstancesTarget } from 'ssm-inventory-configuration'

AllInstancesTarget.instances(instances: IInstance)
```

Creates a target that can be used to select specific instances in the region where inventory is being configured.

###### `instances`<sup>Required</sup> <a name="instances" id="ssm-inventory-configuration.AllInstancesTarget.instances.parameter.instances"></a>

- *Type:* aws-cdk-lib.aws_ec2.IInstance

---

##### `tags` <a name="tags" id="ssm-inventory-configuration.AllInstancesTarget.tags"></a>

```typescript
import { AllInstancesTarget } from 'ssm-inventory-configuration'

AllInstancesTarget.tags(tags: {[ key: string ]: string[]})
```

Creates a target that can be used to select instances in the region where inventory is being configured based on their tags.

This can be
especially useful to select specific instances that are created
automatically (such as through auto scaling groups).

###### `tags`<sup>Required</sup> <a name="tags" id="ssm-inventory-configuration.AllInstancesTarget.tags.parameter.tags"></a>

- *Type:* {[ key: string ]: string[]}

---



### InstancesTarget <a name="InstancesTarget" id="ssm-inventory-configuration.InstancesTarget"></a>

A target that can be used to select specific instances in the region where inventory is being configured.

#### Initializers <a name="Initializers" id="ssm-inventory-configuration.InstancesTarget.Initializer"></a>

```typescript
import { InstancesTarget } from 'ssm-inventory-configuration'

new InstancesTarget(instances: IInstance)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.InstancesTarget.Initializer.parameter.instances">instances</a></code> | <code>aws-cdk-lib.aws_ec2.IInstance</code> | The instances that should be included in Inventory. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="ssm-inventory-configuration.InstancesTarget.Initializer.parameter.instances"></a>

- *Type:* aws-cdk-lib.aws_ec2.IInstance

The instances that should be included in Inventory.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.InstancesTarget.bind">bind</a></code> | Builds low level target configurations to be used in an SSM Association. |
| <code><a href="#ssm-inventory-configuration.InstancesTarget.addInstances">addInstances</a></code> | Adds new instances that should have its data collected by SSM Inventory. |

---

##### `bind` <a name="bind" id="ssm-inventory-configuration.InstancesTarget.bind"></a>

```typescript
public bind(_scope: IConstruct): TargetProperty[]
```

Builds low level target configurations to be used in an SSM Association.

This should be resolved towards the end of the app synth process to all
customization of selected instances.

The `scope` variable is currently unused but is provided to allow custom
and future implementations to make context aware decisions.

###### `_scope`<sup>Required</sup> <a name="_scope" id="ssm-inventory-configuration.InstancesTarget.bind.parameter._scope"></a>

- *Type:* constructs.IConstruct

The node that is configuring the SSM Association controlling SSM Inventory.

---

##### `addInstances` <a name="addInstances" id="ssm-inventory-configuration.InstancesTarget.addInstances"></a>

```typescript
public addInstances(instances: IInstance): InstancesTarget
```

Adds new instances that should have its data collected by SSM Inventory.

###### `instances`<sup>Required</sup> <a name="instances" id="ssm-inventory-configuration.InstancesTarget.addInstances.parameter.instances"></a>

- *Type:* aws-cdk-lib.aws_ec2.IInstance

The instances to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.InstancesTarget.allInstances">allInstances</a></code> | Creates a target that can be used to select all instances in the region where inventory is being configured. |
| <code><a href="#ssm-inventory-configuration.InstancesTarget.instances">instances</a></code> | Creates a target that can be used to select specific instances in the region where inventory is being configured. |
| <code><a href="#ssm-inventory-configuration.InstancesTarget.tags">tags</a></code> | Creates a target that can be used to select instances in the region where inventory is being configured based on their tags. |

---

##### `allInstances` <a name="allInstances" id="ssm-inventory-configuration.InstancesTarget.allInstances"></a>

```typescript
import { InstancesTarget } from 'ssm-inventory-configuration'

InstancesTarget.allInstances()
```

Creates a target that can be used to select all instances in the region where inventory is being configured.

##### `instances` <a name="instances" id="ssm-inventory-configuration.InstancesTarget.instances"></a>

```typescript
import { InstancesTarget } from 'ssm-inventory-configuration'

InstancesTarget.instances(instances: IInstance)
```

Creates a target that can be used to select specific instances in the region where inventory is being configured.

###### `instances`<sup>Required</sup> <a name="instances" id="ssm-inventory-configuration.InstancesTarget.instances.parameter.instances"></a>

- *Type:* aws-cdk-lib.aws_ec2.IInstance

---

##### `tags` <a name="tags" id="ssm-inventory-configuration.InstancesTarget.tags"></a>

```typescript
import { InstancesTarget } from 'ssm-inventory-configuration'

InstancesTarget.tags(tags: {[ key: string ]: string[]})
```

Creates a target that can be used to select instances in the region where inventory is being configured based on their tags.

This can be
especially useful to select specific instances that are created
automatically (such as through auto scaling groups).

###### `tags`<sup>Required</sup> <a name="tags" id="ssm-inventory-configuration.InstancesTarget.tags.parameter.tags"></a>

- *Type:* {[ key: string ]: string[]}

---



### InventoryTarget <a name="InventoryTarget" id="ssm-inventory-configuration.InventoryTarget"></a>

- *Implements:* <a href="#ssm-inventory-configuration.IInventoryTarget">IInventoryTarget</a>

Generic base class representing a selection of EC2 instances that should have SSM Inventory data collection enabled.

#### Initializers <a name="Initializers" id="ssm-inventory-configuration.InventoryTarget.Initializer"></a>

```typescript
import { InventoryTarget } from 'ssm-inventory-configuration'

new InventoryTarget()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryTarget.bind">bind</a></code> | Builds low level target configurations to be used in an SSM Association. |

---

##### `bind` <a name="bind" id="ssm-inventory-configuration.InventoryTarget.bind"></a>

```typescript
public bind(scope: IConstruct): TargetProperty[]
```

Builds low level target configurations to be used in an SSM Association.

This should be resolved towards the end of the app synth process to all
customization of selected instances.

The `scope` variable is currently unused but is provided to allow custom
and future implementations to make context aware decisions.

###### `scope`<sup>Required</sup> <a name="scope" id="ssm-inventory-configuration.InventoryTarget.bind.parameter.scope"></a>

- *Type:* constructs.IConstruct

The node that is configuring the SSM Association controlling SSM Inventory.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.InventoryTarget.allInstances">allInstances</a></code> | Creates a target that can be used to select all instances in the region where inventory is being configured. |
| <code><a href="#ssm-inventory-configuration.InventoryTarget.instances">instances</a></code> | Creates a target that can be used to select specific instances in the region where inventory is being configured. |
| <code><a href="#ssm-inventory-configuration.InventoryTarget.tags">tags</a></code> | Creates a target that can be used to select instances in the region where inventory is being configured based on their tags. |

---

##### `allInstances` <a name="allInstances" id="ssm-inventory-configuration.InventoryTarget.allInstances"></a>

```typescript
import { InventoryTarget } from 'ssm-inventory-configuration'

InventoryTarget.allInstances()
```

Creates a target that can be used to select all instances in the region where inventory is being configured.

##### `instances` <a name="instances" id="ssm-inventory-configuration.InventoryTarget.instances"></a>

```typescript
import { InventoryTarget } from 'ssm-inventory-configuration'

InventoryTarget.instances(instances: IInstance)
```

Creates a target that can be used to select specific instances in the region where inventory is being configured.

###### `instances`<sup>Required</sup> <a name="instances" id="ssm-inventory-configuration.InventoryTarget.instances.parameter.instances"></a>

- *Type:* aws-cdk-lib.aws_ec2.IInstance

---

##### `tags` <a name="tags" id="ssm-inventory-configuration.InventoryTarget.tags"></a>

```typescript
import { InventoryTarget } from 'ssm-inventory-configuration'

InventoryTarget.tags(tags: {[ key: string ]: string[]})
```

Creates a target that can be used to select instances in the region where inventory is being configured based on their tags.

This can be
especially useful to select specific instances that are created
automatically (such as through auto scaling groups).

###### `tags`<sup>Required</sup> <a name="tags" id="ssm-inventory-configuration.InventoryTarget.tags.parameter.tags"></a>

- *Type:* {[ key: string ]: string[]}

---



### TagsTarget <a name="TagsTarget" id="ssm-inventory-configuration.TagsTarget"></a>

A target that can be used to select instances in the region where inventory is being configured based on their tags.

This can be especially useful to
select specific instances that are created automatically (such as through
auto scaling groups).

#### Initializers <a name="Initializers" id="ssm-inventory-configuration.TagsTarget.Initializer"></a>

```typescript
import { TagsTarget } from 'ssm-inventory-configuration'

new TagsTarget(tags: {[ key: string ]: string[]})
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ssm-inventory-configuration.TagsTarget.Initializer.parameter.tags">tags</a></code> | <code>{[ key: string ]: string[]}</code> | The tags which should be used to select EC2 instances. |

---

##### `tags`<sup>Required</sup> <a name="tags" id="ssm-inventory-configuration.TagsTarget.Initializer.parameter.tags"></a>

- *Type:* {[ key: string ]: string[]}

The tags which should be used to select EC2 instances.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.TagsTarget.bind">bind</a></code> | Builds low level target configurations to be used in an SSM Association. |
| <code><a href="#ssm-inventory-configuration.TagsTarget.addTag">addTag</a></code> | Adds a new tag to be used to select EC2 Instances for SSM Inventory. |

---

##### `bind` <a name="bind" id="ssm-inventory-configuration.TagsTarget.bind"></a>

```typescript
public bind(_scope: IConstruct): TargetProperty[]
```

Builds low level target configurations to be used in an SSM Association.

This should be resolved towards the end of the app synth process to all
customization of selected instances.

The `scope` variable is currently unused but is provided to allow custom
and future implementations to make context aware decisions.

###### `_scope`<sup>Required</sup> <a name="_scope" id="ssm-inventory-configuration.TagsTarget.bind.parameter._scope"></a>

- *Type:* constructs.IConstruct

The node that is configuring the SSM Association controlling SSM Inventory.

---

##### `addTag` <a name="addTag" id="ssm-inventory-configuration.TagsTarget.addTag"></a>

```typescript
public addTag(key: string, values: string): TagsTarget
```

Adds a new tag to be used to select EC2 Instances for SSM Inventory.

Tags that are already associated with the target will have their values
merged by the values for that tag that are already tracks with duplicate
values removed.

###### `key`<sup>Required</sup> <a name="key" id="ssm-inventory-configuration.TagsTarget.addTag.parameter.key"></a>

- *Type:* string

The tag key to add.

---

###### `values`<sup>Required</sup> <a name="values" id="ssm-inventory-configuration.TagsTarget.addTag.parameter.values"></a>

- *Type:* string

The values to match for the specified tag key.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.TagsTarget.allInstances">allInstances</a></code> | Creates a target that can be used to select all instances in the region where inventory is being configured. |
| <code><a href="#ssm-inventory-configuration.TagsTarget.instances">instances</a></code> | Creates a target that can be used to select specific instances in the region where inventory is being configured. |
| <code><a href="#ssm-inventory-configuration.TagsTarget.tags">tags</a></code> | Creates a target that can be used to select instances in the region where inventory is being configured based on their tags. |

---

##### `allInstances` <a name="allInstances" id="ssm-inventory-configuration.TagsTarget.allInstances"></a>

```typescript
import { TagsTarget } from 'ssm-inventory-configuration'

TagsTarget.allInstances()
```

Creates a target that can be used to select all instances in the region where inventory is being configured.

##### `instances` <a name="instances" id="ssm-inventory-configuration.TagsTarget.instances"></a>

```typescript
import { TagsTarget } from 'ssm-inventory-configuration'

TagsTarget.instances(instances: IInstance)
```

Creates a target that can be used to select specific instances in the region where inventory is being configured.

###### `instances`<sup>Required</sup> <a name="instances" id="ssm-inventory-configuration.TagsTarget.instances.parameter.instances"></a>

- *Type:* aws-cdk-lib.aws_ec2.IInstance

---

##### `tags` <a name="tags" id="ssm-inventory-configuration.TagsTarget.tags"></a>

```typescript
import { TagsTarget } from 'ssm-inventory-configuration'

TagsTarget.tags(tags: {[ key: string ]: string[]})
```

Creates a target that can be used to select instances in the region where inventory is being configured based on their tags.

This can be
especially useful to select specific instances that are created
automatically (such as through auto scaling groups).

###### `tags`<sup>Required</sup> <a name="tags" id="ssm-inventory-configuration.TagsTarget.tags.parameter.tags"></a>

- *Type:* {[ key: string ]: string[]}

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IInventoryTarget <a name="IInventoryTarget" id="ssm-inventory-configuration.IInventoryTarget"></a>

- *Implemented By:* <a href="#ssm-inventory-configuration.AllInstancesTarget">AllInstancesTarget</a>, <a href="#ssm-inventory-configuration.InstancesTarget">InstancesTarget</a>, <a href="#ssm-inventory-configuration.InventoryTarget">InventoryTarget</a>, <a href="#ssm-inventory-configuration.TagsTarget">TagsTarget</a>, <a href="#ssm-inventory-configuration.IInventoryTarget">IInventoryTarget</a>

Represents a selection of EC2 instances that should have their data collected by SSM Inventory.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ssm-inventory-configuration.IInventoryTarget.bind">bind</a></code> | Builds low level target configurations to be used in an SSM Association. |

---

##### `bind` <a name="bind" id="ssm-inventory-configuration.IInventoryTarget.bind"></a>

```typescript
public bind(scope: IConstruct): TargetProperty[]
```

Builds low level target configurations to be used in an SSM Association.

This should be resolved towards the end of the app synth process to all
customization of selected instances.

The `scope` variable is currently unused but is provided to allow custom
and future implementations to make context aware decisions.

###### `scope`<sup>Required</sup> <a name="scope" id="ssm-inventory-configuration.IInventoryTarget.bind.parameter.scope"></a>

- *Type:* constructs.IConstruct

The node that is configuring the SSM Association controlling SSM Inventory.

---


