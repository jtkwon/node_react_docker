import React from 'react';
import { render } from 'react-dom';
// internal
import App from './App';
import './styles.scss';

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
