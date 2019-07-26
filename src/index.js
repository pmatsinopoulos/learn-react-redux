import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './Reducers';
import App from './components/App'

const todos = [
  {id: 1, text: "todo 1", completed: false},
  {id: 2, text: "todo 2", completed: false}
]

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)