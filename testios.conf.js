exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || '${{ secrets.BROWSERSTACK_USERNAME }}',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '${{ secrets.BROWSERSTACK_ACCESS_KEY }}',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: process.env.APP_URL,
          browserstackLocal: true,
          accessibility: true,
          testObservabilityOptions: {
                buildName: process.env.BROWSERSTACK_BUILD_NAME,
                projectName: "Browserstack Sample",
                buildTag: 'TestCustom'
              },
        },
      ]
    ],
    capabilities: [{
        'bstack:options': {
          deviceName: 'iPhone .*',
          platformVersion: '17',
          platformName: 'ios',
        } }],
    
    commonCapabilities: {
      'bstack:options': {
        debug: true,
        networkLogs: true,
        interactiveDebugging : true,
        appProfiling: true,
    }
    },
    maxInstances: 10,
  
    updateJob: false,
    specs: [
      './specs/ios_test*.js'
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
  
