const prod = process.env.NODE_ENV === 'production'
module.exports = {
  'process.env.API_URL': prod ? 'https://janicedavila.com.br/api/v1' : 'http://127.0.0.1:3333/api/v1',
  'process.env.URL': prod ? 'https://janicedavila.com/' : 'http://127.0.0.1:3333/'
}