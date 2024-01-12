import { Duration, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { InventoryAssociation, InventoryTarget } from '../src';


test('created association should use sane defaults', () => {
  const stack = new Stack();
  new InventoryAssociation(stack, 'inventory');
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

test('property overrides should be respected', () => {
  const stack = new Stack();
  new InventoryAssociation(stack, 'inventory', {
    applyOnlyAtCronInterval: true,
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
    ApplyOnlyAtCronInterval: true,
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