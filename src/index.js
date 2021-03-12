import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
import AppContainer from './components/app';
import reportWebVitals from './reportWebVitals';
import './index.scss';

if (process.env.REACT_APP_GTM_ID) {
  const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID,
  };

  TagManager.initialize(tagManagerArgs);
}

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
