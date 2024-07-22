const { I } = inject()

module.exports = {
  locationInput: '#job-search-bar-location',
  searchBtn: '.base-search-bar__submit-btn',

  findAndPopulateLocationField() {
    I.fillField(this.locationInput, 'Milan, Lombardy, Italy')
    I.click(this.searchBtn)
  },
}