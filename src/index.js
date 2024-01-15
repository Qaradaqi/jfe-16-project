import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import GlobalStyle from './globalStyle';
import ScrollToTop from './components/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <GlobalStyle />
    <Router />
  </Fragment>
);

