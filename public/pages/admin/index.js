import React, {Component} from 'react';
import Router from 'next/router'
import "../../src/styles/main.scss";
import withAuth from  '../../src/hocs/withAuth'

import Logo from '../../src/components/logo';
import Footer from '../../src/components/footer';

class Admin extends Component {
   render() {
     const user = this.props.auth.getProfile()
     return (   
      <section className="admin">
        <header className="header">
          <Logo />
        </header>
        <main className="main">
          <h1 className="title">
            Olá <strong className="name">{user.username}</strong>, você está na área administrativa do website da Janice D'Avila.
          </h1>
          <div className="list">
            <div className="item" onClick={() => Router.push(`/admin/category`)}>
              <i className="fas fa-film icon"></i>
              <h2 className="title">Films</h2>
            </div>
            <div className="item">
              <i className="fas fa-user-circle icon"></i>
              <h2 className="title">Bio</h2>
            </div>
            <div className="item">
              <i className="fas fa-envelope icon"></i>
              <h2 className="title">Contact</h2>
            </div>
          </div>
        </main>
        <Footer />
      </section>
     )
   }
}

export default withAuth(Admin) 