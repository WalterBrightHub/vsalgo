import { createStore } from 'redux'

 import reducer from './reducer'

//  const reducer = (state, action) => state

const initState = {
  array:[1,9,2,6,5,8,4,7,3],
  pointer: 0
}

export default createStore(reducer, initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())