module.exports = {
  name: 'get-things-done',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/get-things-done',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
