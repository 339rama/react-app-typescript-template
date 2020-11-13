import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import './styles/styles.scss';
import AppRoutes from 'router';
import Layout from 'modules/layout/ui/layouts/index';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./styles/base/_variables.scss');

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
