exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'SampleApp',
          browserstackLocal: true,
          accessibility: false,
          testObservabilityOptions: {
                buildName: "bstack-demo",
                projectName: "BrowserStack Sample",
                buildTag: 'TestCustom'
              },
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy Tab S9',
        platformVersion: '13.0',
        platformName: 'android',
      }
    }, {
      'bstack:options': {
        deviceName: 'Google Pixel 7 Pro',
        platformVersion: '13.0',
        platformName: 'android',
      } }, {
      'bstack:options': {
        deviceName: 'OnePlus 9',
        platformVersion: '11.0',
        platformName: 'android',
      }
    }],

    commonCapabilities: {
      'bstack:options': {
        debug: true,
        networkLogs: true
    }
    },
    maxInstances: 10,
  
    updateJob: false,
    specs: [
      './specs/android_test.js'
    ],
    exclude: [],
  
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 40000
    }
  };
  
  // Code to support common capabilities
  exports.config.capabilities.forEach(function(caps){
    for(let key in exports.config.commonCapabilities)
      caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
  });
  