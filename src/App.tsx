import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routers';
import { GlobalStyle } from './styles';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
