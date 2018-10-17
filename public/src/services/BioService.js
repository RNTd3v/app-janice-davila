import AuthService from './AuthService';

const auth = new AuthService();

export default class BioService {
    constructor() {
      this.domain = process.env.API_URL
      this.fetch = this.fetch.bind(this)
    }
  
    getBio() {
      return this.fetch(`${this.domain}/bios/1`, {
        method: 'GET'
      }).then(res => Promise.resolve(res))
    }

    saveBio(data) {
        return this.fetch(`${this.domain}/bios/1`, {
            method: 'PUT',
            body: JSON.stringify(data)
        }).then(res => Promise.resolve(res))
    }


    uploadPicture(data) {
        const headers = {}
        
        if (auth.loggedIn()){
            headers['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
        }
        console.log(data);
        return fetch(`${this.domain}/upload`, {
            headers,
            method: 'POST',
            body: data
        })
          .then(this._checkStatus)
          .then(response => response.json())
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
  
      if (auth.loggedIn()){
        headers['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
      }
  
      return fetch(url, {
        headers,
        ...options
      })
      .then(this._checkStatus)
      .then(response => response.json())
    }
  }