import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
import Provider from 'react-redux'

const store = createStore(manageUsers);


ReactDOM.render(
  // add imports and code
  <Provider={store}
  <App />
  // add imports and code
  </Provider>
  ,
  document.getElementById('root')
);
