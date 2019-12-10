import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import 'normalize.css'

import VsalgoAPP from './view/VsalgoAPP'
import store from './Store'


ReactDOM.render(<Provider store={store}>
  <VsalgoAPP></VsalgoAPP>
</Provider>, document.getElementById('root'));

