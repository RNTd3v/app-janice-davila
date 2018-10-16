const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.API_URL': prod ? '' : 'http://127.0.0.1:3333/api/v1'
}