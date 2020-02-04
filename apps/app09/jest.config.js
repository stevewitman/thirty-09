module.exports = {
  name: 'app09',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app09',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
