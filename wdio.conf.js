exports.config = {
  // Tell Mocha where to find the test files
  specs: [
    'src/components/NavBar/LogIn/LogIn.test.js',
    'src/components/NavBar/SignUp/SignUp.test.js',
    'src/components/NavBar/NavBar.test.js',
    'src/components/Content/TaskManager/TaskManager.test.js',
    'src/components/Dashboard/Dashboard.test.js',
    'src/components/CreatePursuance/CreatePursuance.test.js',
    'src/components/Footer/Footer.test.js',
    'src/components/HomePage/HomePage.test.js'
  ],
  suites: {
    login: [ 'src/components/NavBar/LogIn/LogIn.test.js' ]
  },
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'firefox'
  }],
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: 'output',
  baseUrl: 'http://localhost:8080',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd'
  },
}
