const { defineConfig } = require("cypress");
const compareImages = require("./cypress/support/compareImage");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {

    baseUrl: 'https://www.photopea.com',
    
    setupNodeEvents(on, config) {

    // create task that can be used in cypress test
      on('task', {
        // call function and return the pixel difference
        compareImages({imgExport, imgExpected}){
          const dif = compareImages(imgExport, imgExpected);
          return dif;
        }
      })

    },
  },  
});
