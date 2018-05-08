exports.config = {
  specs: [
    './src/components/**/*.test.js'
  ],
  suites: {
    login: [ 'src/components/NavBar/LogIn/LogIn.test.js' ]
  },
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 5,
    browserName: 'firefox'
  }],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './output',
  baseUrl: 'http://localhost:8082',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd'
  },
}
