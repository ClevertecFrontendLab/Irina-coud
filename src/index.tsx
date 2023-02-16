import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from './app';
import { store } from './store/store';
import { GlobalStyle } from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
