const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
  addCucumberPreprocessorPlugin,
  afterRunHandler,
} = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const fs = require('fs').promises;

const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config, {
    omitAfterRunHandler: true,
  });

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );

  // on('after:run', async (results) => {
  //   if (results) {
  //     await afterRunHandler(config);
  //     await fs.writeFile(
  //       'reports/results.json',
  //       JSON.stringify(
  //         {
  //           browserName: results.browserName,
  //           browserVersion: results.browserVersion,
  //           osName: results.osName,
  //           osVersion: results.osVersion,
  //           nodeVersion: results.config.resolvedNodeVersion,
  //           cypressVersion: results.cypressVersion,
  //           startedTestsAt: results.startedTestsAt,
  //           endedTestsAt: results.endedTestsAt,
  //         },
  //         null,
  //         '\t',
  //       ),
  //     );
  //   }
  // });
  return config;
};

export default defineConfig({

  e2e: {
    env:{
      TAGS: "not @ignore",

      api: {
        url: 'https://reqres.in/api',
      },

      commandDelay: 200,
      "hideXHR": true,
      "allure": false,
      "allureResultsPath": 'report/allure-results',
      "allureLogCypress": true,
    },
    setupNodeEvents,

    projectId:"3sjjkx",

    specPattern: ["cypress/e2e/specs/*.cy.ts"],
    
    baseUrl: 'https://practicetestautomation.com/',
    
    experimentalStudio: true,
  },

  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,

  screenshotOnRunFailure: false,
  video: false,
  trashAssetsBeforeRuns: false,
  
})
