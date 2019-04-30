import AuthService from './AuthService';

const auth = new AuthService();

export default class CategoriesService {
    constructor() {
      this.domain = process.env.API_URL
      this.fetch = this.fetch.bind(this)
    }

    getCategories() {
      return this.fetch(`${this.domain}/category`, {
        method: 'GET'
      }).then(res => Promise.resolve(res))
    }

    getFilmsByCategoryId(idCategory) {
        return this.fetch(`${this.domain}/category/${idCategory}/films`, {
          method: 'GET'
        }).then(res => Promise.resolve(res))
    }

    getFilmById(idFilm) {
        return this.fetch(`${this.domain}/film/${idFilm}`, {
            method: 'GET'
        }).then(res => Promise.resolve(res))
    }

    saveFilm(film) {

        return this.fetch(`${this.domain}/films`, {
            method: 'POST',
            body: JSON.stringify(film)
        }).then(res => Promise.resolve(res))

    }

    updateFilm(film, idFilm) {

      return this.fetch(`${this.domain}/films/${idFilm}`, {
          method: 'PUT',
          body: JSON.stringify(film)
      }).then(res => Promise.resolve(res))

    }

    changeOrderFilm(film, idFilm) {

      return this.fetch(`${this.domain}/films/${idFilm}`, {
          method: 'PATCH',
          body: JSON.stringify(film)
      }).then(res => Promise.resolve(res))

    }

    deleteFilm(idFilm) {

      return this.fetch(`${this.domain}/films/${idFilm}`, {
          method: 'DELETE',
      }).then(res => Promise.resolve(res))

    }

    saveVideo(video) {
      return this.fetch(`${this.domain}/videos`, {
          method: 'POST',
          body: JSON.stringify(video)
      }).then(res => Promise.resolve(res))
    }

    deleteVideo(videoId) {
      return this.fetch(`${this.domain}/videos/${videoId}`, {
          method: 'DELETE'
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
