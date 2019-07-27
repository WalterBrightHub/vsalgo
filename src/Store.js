import { createStore,applyMiddleware ,compose} from 'redux'

 import reducer from './reducer'

 import autoDisplay from './middleware/autoDisplay'

//  const reducer = (state, action) => state

const initState = {
  array:[1,9,2,6,5,8,4,7,3],
  pointer: 0,
  isPlaying:false
}

const middlewares=[autoDisplay]

const storeEnhancers=compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore(reducer, initState,
storeEnhancers
  )