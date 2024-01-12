import { Duration, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { InventoryConfiguration, InventoryTarget } from '../src';


test('configuration association should use sane defaults', () => {
  const stack = new Stack();
  new InventoryConfiguration(stack, 'configuration');
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SSM::Association', {
    ApplyOnlyAtCronInterval: false,
    Name: 'AWS-GatherSoftwareInventory',
    Parameters: {
      applications: ['Enabled'],
      awsComponents: ['Enabled'],
      customInventory: ['Enabled'],
      instanceDetailedInformation: ['Enabled'],
      networkConfig: ['Enabled'],
      services: ['Enabled'],
      windowsRoles: ['Enabled'],
      windowsUpdates: ['Enabled'],
    },
    ScheduleExpression: 'rate(30 minutes)',
    Targets: [{
      Key: 'InstanceIds',
      Values: [
        '*',
      ],
    }],
  });
});

test('configuration association property overrides should be respected', () => {
  const stack = new Stack();
  new InventoryConfiguration(stack, 'configuration', {
    categories: {
      applications: false,
      awsComponents: false,
      customInventory: false,
      instanceDetailedInformation: false,
      networkConfig: false,
      services: false,
      windowsRoles: false,
      windowsUpdates: false,
    },
    schedule: Schedule.rate(Duration.hours(1)),
    targets: [
      InventoryTarget.tags({
        environment: [
          'dev',
        ],
      }),
    ],
  });
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SSM::Association', {
    Parameters: {
      applications: ['Disabled'],
      awsComponents: ['Disabled'],
      customInventory: ['Disabled'],
      instanceDetailedInformation: ['Disabled'],
      networkConfig: ['Disabled'],
      services: ['Disabled'],
      windowsRoles: ['Disabled'],
      windowsUpdates: ['Disabled'],
    },
    ScheduleExpression: 'rate(1 hour)',
    Targets: [{
      Key: 'tag:environment',
      Values: [
        'dev',
      ],
    }],
  });
});

test('deferred target additions should be respected', () => {
  const stack = new Stack();
  const config = new InventoryConfiguration(stack, 'configuration', {
    targets: [
      InventoryTarget.tags({
        environment: [
          'dev',
        ],
      }),
    ],
  });
  config.addTarget(InventoryTarget.tags({
    product: [
      'example',
    ],
  }));
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SSM::Association', {
    Targets: [
      {
        Key: 'tag:environment',
        Values: [
          'dev',
        ],
      },
      {
        Key: 'tag:product',
        Values: [
          'example',
        ],
      },
    ],
  });
});

test('permission management should use sane defaults', () => {
  const stack = new Stack();
  const policy = ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedEC2InstanceDefaultPolicy');
  new InventoryConfiguration(stack, 'configuration', {
    permissionEnforcement: {
      enabled: true,
    },
  });
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Config::ConfigRule', 2);
  template.resourceCountIs('AWS::Config::RemediationConfiguration', 2);

  template.allResourcesProperties('AWS::Config::RemediationConfiguration', {
    Automatic: false,
  });

  template.hasResourceProperties('AWS::IAM::Role', {
    AssumeRolePolicyDocument: {
      Statement: [{
        Action: 'sts:AssumeRole',
        Effect: 'Allow',
        Principal: {
          Service: 'ec2.amazonaws.com',
        },
      }],
    },
    ManagedPolicyArns: [
      stack.resolve(policy.managedPolicyArn),
    ],
  });
});

test('permission management should respect overrides', () => {
  const stack = new Stack();
  const roPolicy = ManagedPolicy.fromAwsManagedPolicyName('ViewOnlyAccess');
  const ssmPolicy = ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedEC2InstanceDefaultPolicy');
  const role = new Role(stack, 'role', {
    assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
    managedPolicies: [roPolicy],
  });
  new InventoryConfiguration(stack, 'configuration', {
    permissionEnforcement: {
      enabled: true,
      remediation: {
        automatic: true,
        defaultRole: role,
      },
    },
  });
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Config::ConfigRule', 2);
  template.resourceCountIs('AWS::Config::RemediationConfiguration', 2);
  template.resourceCountIs('AWS::IAM::InstanceProfile', 1);

  template.allResourcesProperties('AWS::Config::RemediationConfiguration', {
    Automatic: true,
  });

  template.hasResourceProperties('AWS::IAM::InstanceProfile', {
    Roles: [
      stack.resolve(role.roleName),
    ],
  });

  template.hasResourceProperties('AWS::IAM::Role', {
    AssumeRolePolicyDocument: {
      Statement: [{
        Action: 'sts:AssumeRole',
        Effect: 'Allow',
        Principal: {
          Service: 'ec2.amazonaws.com',
        },
      }],
    },
    ManagedPolicyArns: [
      stack.resolve(roPolicy.managedPolicyArn),
      stack.resolve(ssmPolicy.managedPolicyArn),
    ],
  });
});

test('disabling remediation should remove remediation associated resources', () => {
  const stack = new Stack();
  new InventoryConfiguration(stack, 'configuration', {
    permissionEnforcement: {
      enabled: true,
      remediation: {
        enabled: false,
      },
    },
  });
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Config::ConfigRule', 2);
  template.resourceCountIs('AWS::Config::RemediationConfiguration', 0);
});

test('multiple enable permission enforcement calls should be ignored', () => {
  const stack = new Stack();
  const config = new InventoryConfiguration(stack, 'configuration', {
    permissionEnforcement: {
      enabled: true,
    },
  });
  config.enablePermissionEnforcement();
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Config::ConfigRule', 2);
  template.resourceCountIs('AWS::Config::RemediationConfiguration', 2);
});