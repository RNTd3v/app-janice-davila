import React, { Component } from 'react';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import ReactGA from 'react-ga';

import Loading from '../components/loading';

export default () => Composed => 
    class extends Component {
        static getInitialProps(ctx) {
            return loadGetInitialProps(Composed, ctx)
        }

        constructor(props) {
            super(props)
            this.state = {
              isLoading: true
            };
          }

        componentDidMount() {
            ReactGA.initialize('UA-127770883-1')
            ReactGA.pageview(window.location.pathname);
            this.setState({ isLoading: false })
        }

        render() {
            return (
                <div>
                {this.state.isLoading ? (
                    <div><Loading /></div>
                  ) : (
                    <Composed { ... this.props } />
                  )}
                </div>
              )
        }
    }