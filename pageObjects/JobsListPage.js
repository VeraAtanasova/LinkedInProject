const { I } = inject()
let oldUrl = null;
let newUrl = null;
let assert = require('assert');


module.exports = {
  jobOptions: '.base-card__full-link',

    selectFirstJob() {
    I.waitForElement(this.jobOptions, 10);
    I.click(this.jobOptions);
    I.wait(4)
    },
  
    openNewTabCurrentUrl() {
      I.executeScript(async () => {
        await window.open(window.location,'toolbar=yes,scrollbars=yes,resizable=yes');      
      });
    },
    


}

