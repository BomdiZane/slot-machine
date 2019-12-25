/** Root Component
  *
  * A HOC that wraps sub components with a Redux store and a Material UI Provider
  * This class also provides the basic structure of the application and sets up global
  * error handling and initialization
  *
  * @version 1.0.0
  * @created - 2019.08.30
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@yahoo.com> (https://bomdisoft.com)
  */

//#region imports
import GLOBAL_STYLES from '../style/globals';

// import { StrictMode } from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Header from '../components/header/header';
import Body from '../components/body/body';
import Popup from '../components/popup';
import theme from '../style/theme';
import rootReducer from '../state/rootReducer';
import { ALLOWED_THEMES } from '../utils/constants';
//#endregion

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const makeStore = (initialState, options) => createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

class SlotMachine extends App {
  constructor() { super(); }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);

    const userTheme = localStorage.getItem(process.env.USER_THEME_KEY);
    if (userTheme && ALLOWED_THEMES.includes(userTheme)) this.props.store.dispatch({ type: 'SET_THEME', payload: userTheme });
  }

  componentDidCatch(error, errorStack) {
    console.error(error, errorStack);
    super.componentDidCatch(error, errorStack);
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <ThemeProvider theme={ theme }>
        <Provider store={ store }>
          {/* <StrictMode> */}
          <CssBaseline />
          <Popup />
          <Header />
          <Body>
            <Component { ...pageProps } />
          </Body>
          {/* </StrictMode> */}
          <GLOBAL_STYLES />
        </Provider>
      </ThemeProvider>
    );
  }
}


export default withRedux(makeStore)(SlotMachine);
