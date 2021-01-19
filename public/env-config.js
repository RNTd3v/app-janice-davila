const prod = process.env.NODE_ENV === 'production'
module.exports = {
  'process.env.API_URL': prod ? 'https://janicedavila.com/api/v1' : 'https://janicedavila.com/api/v1',
  'process.env.URL': prod ? 'https://janicedavila.com/' : 'https://janicedavila.com/'
}
