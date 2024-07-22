const { I } = inject()

module.exports = {
  locationInput: '#job-search-bar-location',

  findAndPopulateLocationField() {
    I.fillField(this.locationInput, 'Milan, Lombardy, Italy')
    I.click('.base-search-bar__submit-btn')
  },

  
}