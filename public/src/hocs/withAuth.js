import React, {Component} from 'react'
import Router from 'next/router'
import AuthService from '../services/AuthService'

import Loading from '../components/loading';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService()
    return class Authenticated extends Component {
      constructor(props) {
        super(props)
        this.state = {
          isLoading: true
        };
      }

      componentDidMount () {
        if (!Auth.loggedIn()) {
            Router.push('/admin/login')
        }
        this.setState({ isLoading: false })
      }

      render() {
        return (
          <div>
          {this.state.isLoading ? (
              <div><Loading /></div>
            ) : (
              <AuthComponent {...this.props}  auth={Auth} />
            )}
          </div>
        )
      }
    }
}

// https://github.com/zeit/next.js/issues/153