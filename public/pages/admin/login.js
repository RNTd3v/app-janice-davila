import React, {Component} from 'react'
import Router from 'next/router'
import "../../src/styles/main.scss";

import AuthService from '../../src/services/AuthService';

import Logo from '../../src/components/logo';

const auth = new AuthService()

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    if (auth.loggedIn()) {
      Router.push('/admin')   // redirect if you're already logged in
    }
  }

  async handleSubmit(event) {
      event.preventDefault();

      const data = new FormData(event.target);
      const login = {
            "email": data.get('email'),
            "password": data.get('password')
      }
      auth.login(login.email, login.password)
      .then(res => {
        Router.push('/admin')
      })
      .catch(e => console.log(e))
  }

  render () {
    return (
      <div className="login">
        <div className="content">
            <Logo />
            <h1 className="title">Entre com o seu login e senha para acessar a área administrativa:</h1>
            <form onSubmit={this.handleSubmit} className="form" >
              <input type="text" className="input" name="email" placeholder="Email"/>
              <input type="password" className="input" name="password" placeholder="Senha" />
              <button className="link">Esqueci minha senha</button>
              <input type="submit" className="button" value="Entrar"/>
            </form>
        </div>
      </div>
    )
  }
}

export default Login