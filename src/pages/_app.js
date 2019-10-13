import React from 'react';
import App from 'next/app';
import { StoreContext } from 'redux-react-hook';
import { withReduxStore } from '../lib/withReduxStore';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../lib/theme'
import NavBar from '../components/navbar'
class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    
    return (
      <StoreContext.Provider value={reduxStore}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar {...this.props} />
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreContext.Provider>
    );
  }
}

export default withReduxStore(MyApp);