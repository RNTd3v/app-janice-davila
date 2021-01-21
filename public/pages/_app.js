import React from 'react'
import App, { Container } from 'next/app';
import { ToastContainer } from 'react-toastify';

export default class JaniceApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    )
  }
}
