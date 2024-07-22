const { I } = inject()

module.exports = {
  locationInput: '@job-search-bar-location',
  clickJobsIcon() {
    I.click('Jobs')
  },
}
