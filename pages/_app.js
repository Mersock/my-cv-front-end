import React from 'react';
import App from 'next/app';
import { StoreContext } from 'redux-react-hook';
import { withReduxStore } from '../lib/withReduxStore';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
        <StoreContext.Provider value={reduxStore}>
          <Component {...pageProps} />
        </StoreContext.Provider>
    );
  }
}

export default withReduxStore(MyApp);