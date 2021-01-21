import AuthService from './AuthService';
import { toast } from 'react-toastify';

const auth = new AuthService();

export default class CategoriesService {
  constructor() {
    this.domain = process.env.API_URL
    this.fetch = this.fetch.bind(this)
  }

  getReels() {
    return this.fetch(`${this.domain}/reels`, {
      method: 'GET'
    }).then(res => Promise.resolve(res))
  }

  getReelById(idReel) {
    return this.fetch(`${this.domain}/reels/${idReel}`, {
        method: 'GET'
    }).then(res => Promise.resolve(res))
  }

  saveReel(reel) {

    return this.fetch(`${this.domain}/reels`, {
        method: 'POST',
        body: JSON.stringify(reel)
    }).then(res => Promise.resolve(res))

  }

  updateReel(reel, idReel) {

    return this.fetch(`${this.domain}/reels/${idReel}`, {
        method: 'PUT',
        body: JSON.stringify(reel)
    }).then(res => Promise.resolve(res))

  }

  deleteReel(idReel) {

    return this.fetch(`${this.domain}/reels/${idReel}`, {
        method: 'DELETE',
    }).then(res => Promise.resolve(res))

  }

  changeOrderReel(reel, idReel) {

    return this.fetch(`${this.domain}/reels/${idReel}`, {
        method: 'PATCH',
        body: JSON.stringify(reel)
    }).then(res => Promise.resolve(res))

  }

  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      toast.error('Houve um erro, contate o administrador ou tente novamente!');
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
    .then(response => {
      if (!!response.message) {
        toast.success(response.message);
      }
      return response;
    })
  }
}
