import { Stack } from 'aws-cdk-lib';
import { IInstance } from 'aws-cdk-lib/aws-ec2';
import { InventoryTarget } from '../src';


test('all instances target should produce expected results', () => {
  const stack = new Stack();
  const target = InventoryTarget.allInstances();
  const resolved = target.bind(stack);

  expect(resolved.length).toBe(1);
  expect(resolved[0].key).toBe('InstanceIds');
  expect(resolved[0].values.length).toBe(1);
  expect(resolved[0].values[0]).toBe('*');
});

test('instances target with no instances should throw an error', () => {
  const stack = new Stack();
  const target = InventoryTarget.instances();

  expect(() => {
    target.bind(stack);
  }).toThrow(Error);
});

test('instances target should reflect instances added through the constructor', () => {
  const stack = new Stack();
  const instanceId1 = 'i-1234567890123456';
  const instanceId2 = 'i-9876543210987654';
  const instance1 = getInstance(instanceId1);
  const instance2 = getInstance(instanceId2);
  const target = InventoryTarget.instances(instance1, instance2);
  const resolved = target.bind(stack);

  expect(resolved.length).toBe(1);
  expect(resolved[0].key).toBe('InstanceIds');
  expect(resolved[0].values.length).toBe(2);
  expect(resolved[0].values[0]).toBe(instanceId1);
  expect(resolved[0].values[1]).toBe(instanceId2);
});

test('instances target should reflect instances added through method', () => {
  const stack = new Stack();
  const instanceId1 = 'i-1234567890123456';
  const instanceId2 = 'i-9876543210987654';
  const instance1 = getInstance(instanceId1);
  const instance2 = getInstance(instanceId2);
  const target = InventoryTarget.instances();

  target.addInstances(instance1, instance2);
  const resolved = target.bind(stack);

  expect(resolved.length).toBe(1);
  expect(resolved[0].key).toBe('InstanceIds');
  expect(resolved[0].values.length).toBe(2);
  expect(resolved[0].values[0]).toBe(instanceId1);
  expect(resolved[0].values[1]).toBe(instanceId2);
});

test('tags target with no tags should throw an error', () => {
  const stack = new Stack();
  const target = InventoryTarget.tags({});

  expect(() => {
    target.bind(stack);
  }).toThrow(Error);
});

test('tags target tag with no values should throw an error', () => {
  const stack = new Stack();
  const target = InventoryTarget.tags({
    tag1: [],
  });

  expect(() => {
    target.bind(stack);
  }).toThrow(Error);
});

test('tags target should reflect tags added through the constructor', () => {
  const stack = new Stack();
  const target = InventoryTarget.tags({
    tag1: ['t1v1', 't1v2'],
    tag2: ['t2v1', 't2v2'],
  });
  const resolved = target.bind(stack);

  expect(resolved.length).toBe(2);
  expect(resolved[0].key).toBe('tag:tag1');
  expect(resolved[0].values.length).toBe(2);
  expect(resolved[0].values[0]).toBe('t1v1');
  expect(resolved[0].values[1]).toBe('t1v2');
  expect(resolved[1].key).toBe('tag:tag2');
  expect(resolved[1].values.length).toBe(2);
  expect(resolved[1].values[0]).toBe('t2v1');
  expect(resolved[1].values[1]).toBe('t2v2');
});

test('tags target should reflect tags added through method', () => {
  const stack = new Stack();
  const target = InventoryTarget.tags({});

  target.addTag('tag1', 't1v1', 't1v2');
  target.addTag('tag2', 't2v1', 't2v2');
  const resolved = target.bind(stack);

  expect(resolved.length).toBe(2);
  expect(resolved[0].key).toBe('tag:tag1');
  expect(resolved[0].values.length).toBe(2);
  expect(resolved[0].values[0]).toBe('t1v1');
  expect(resolved[0].values[1]).toBe('t1v2');
  expect(resolved[1].key).toBe('tag:tag2');
  expect(resolved[1].values.length).toBe(2);
  expect(resolved[1].values[0]).toBe('t2v1');
  expect(resolved[1].values[1]).toBe('t2v2');
});

test('tags target should ignore duplicate tag values', () => {
  const stack = new Stack();
  const target = InventoryTarget.tags({
    tag1: ['t1v1'],
  });

  target.addTag('tag1', 't1v1');
  const resolved = target.bind(stack);

  expect(resolved.length).toBe(1);
  expect(resolved[0].key).toBe('tag:tag1');
  expect(resolved[0].values.length).toBe(1);
  expect(resolved[0].values[0]).toBe('t1v1');
});

function getInstance(instanceId: string): IInstance {
  return {
    instanceId: instanceId,
  } as IInstance;
}