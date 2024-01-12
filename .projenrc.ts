import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kevin Lucas',
  authorAddress: 'Pharrox@users.noreply.github.com',
  cdkVersion: '2.118.0',
  defaultReleaseBranch: 'master',
  jsiiVersion: '~5.3.0',
  name: 'ssm-inventory-configuration',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/vibe-io/ssm-inventory-configuration.git',
  deps: [
    'ec2-required-policy-config-rule@0.x',
    'ec2-required-role-config-rule@0.x',
  ],

  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();