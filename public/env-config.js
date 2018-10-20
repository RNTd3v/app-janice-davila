const prod = process.env.NODE_ENV === 'production'
module.exports = {
  'process.env.API_URL': prod ? 'http://142.93.204.233/api/v1' : 'http://127.0.0.1:3333/api/v1',
  'process.env.URL': prod ? 'http://142.93.204.233/' : 'http://127.0.0.1:3333/'
}