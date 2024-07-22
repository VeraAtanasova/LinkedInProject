const { I } = inject()


module.exports = {
  jobOptions: '.base-card__full-link',

    selectFirstJob() {
    I.waitForElement(this.jobOptions, 10)
    I.click(this.jobOptions)
    I.wait(5)
    },
    
    openNewTabCurrentUrl() {
      I.executeScript(async () => {
       await window.open(window.location,'toolbar=yes,scrollbars=yes,resizable=yes')
      });
      I.wait(3)
    },
}

