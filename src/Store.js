import { createStore,applyMiddleware ,compose} from 'redux'

 import {reducer} from './component/ControlPanel/'

 import createSagaMiddleware from 'redux-saga'

 import mySaga from './middleware/sagas'

//  const reducer = (state, action) => state

const initState = {
  array:[4,2,5,3,1,6],
  pointer: 0,
  isPlaying:false
}

const sagaMiddleware=createSagaMiddleware()

const middlewares=[sagaMiddleware]

const storeEnhancers=compose(
  applyMiddleware(...middlewares),
   window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__():f=>f
)

const store= createStore(reducer, initState,storeEnhancers)

sagaMiddleware.run(mySaga)

  export default store