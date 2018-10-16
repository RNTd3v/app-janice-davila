const withSass = require('@zeit/next-sass')

module.exports = {
    exportPathMap: async function (defaultPathMap) {
      return {
        '/': { page: '/' },
        '/bio': { page: '/bio' },
        '/contact': { page: '/contact' },
        '/detail': { page: '/detail', query: { id: '' } },
        '/users': { page: '/users' }
      }
    }
  }

  module.exports = withSass()