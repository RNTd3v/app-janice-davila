export default class AuthService {
    constructor() {
      this.domain = process.env.API_URL
      this.fetch = this.fetch.bind(this)
      this.login = this.login.bind(this)
      this.getProfile = this.getProfile.bind(this)
    }
  
    login(email, password) {
      return this.fetch(`${this.domain}/authenticate`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        })
      }).then(res => {
        this.setToken(res.token.token)
        this.setProfile({
          idUser: res.idUser,
          username: res.username
        })

        return Promise.resolve(res)
      })

    }
  
    loggedIn(){
      return this.getToken();
    }
  
    setProfile(profile){
      localStorage.setItem('profile', JSON.stringify(profile))
    }
  
    getProfile(){
      const profile = localStorage.getItem('profile')
      return profile ? JSON.parse(localStorage.profile) : {}
    }
  
    setToken(idToken){
      localStorage.setItem('id_token', idToken)
    }
  
    getToken(){
      return localStorage.getItem('id_token')
    }
  
    logout(){
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
    }
  
    _checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    }
  
    fetch(url, options){
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  
      if (this.loggedIn()){
        headers['Authorization'] = 'Bearer ' + this.getToken()
      }
  
      return fetch(url, {
        headers,
        ...options
      })
      .then(this._checkStatus)
      .then(response => response.json())
    }
  }