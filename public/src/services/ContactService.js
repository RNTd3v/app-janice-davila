import AuthService from './AuthService';

const auth = new AuthService();

export default class ContactService {
    constructor() {
      this.domain = process.env.API_URL
      this.fetch = this.fetch.bind(this)
    }
  
    getPhone() {
      return this.fetch(`${this.domain}/phones`, {
        method: 'GET'
      }).then(res => Promise.resolve(res))
    }

    savePhone(data) {
        return this.fetch(`${this.domain}/phones`, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => Promise.resolve(res))
    }

    updatePhone(data, idPhone) {
        return this.fetch(`${this.domain}/phones/${idPhone}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        }).then(res => Promise.resolve(res))
    }

    deletePhone(idPhone) {
        return this.fetch(`${this.domain}/phones/${idPhone}`, {
            method: 'DELETE'
        }).then(res => Promise.resolve(res))
    }

    getEmail() {
        return this.fetch(`${this.domain}/emails`, {
          method: 'GET'
        }).then(res => Promise.resolve(res))
      }
  
      saveEmail(data) {
          return this.fetch(`${this.domain}/emails`, {
              method: 'POST',
              body: JSON.stringify(data)
          }).then(res => Promise.resolve(res))
      }
  
      updateEmail(data, idEmail) {
          return this.fetch(`${this.domain}/emails/${idEmail}`, {
              method: 'PUT',
              body: JSON.stringify(data)
          }).then(res => Promise.resolve(res))
      }
  
      deleteEmail(idEmail) {
          return this.fetch(`${this.domain}/emails/${idEmail}`, {
              method: 'DELETE'
          }).then(res => Promise.resolve(res))
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