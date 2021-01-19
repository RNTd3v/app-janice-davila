const withSass = require('@zeit/next-sass')
module.exports = withSass({
  i18n: {
    locales: ["en-US", "pt"],
    defaultLocale: "en-US"
  }
})
