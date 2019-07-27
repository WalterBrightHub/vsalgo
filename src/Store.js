import { createStore } from 'redux'

 import reducer from './reducer'

//  const reducer = (state, action) => state

const initState = {
  history: [
    [
      {
        data:9,
        key:0,
        order:0,

      },
      {
        data:2,
        key:1,
        order:1,

      },
      {
        data:1,
        key:2,
        order:2,

      },
      {
        data:3,
        key:3,
        order:3,

      }
    ],
    [
      {
        data:9,
        key:0,
        order:1,

      },
      {
        data:2,
        key:1,
        order:0,

      },
      {
        data:1,
        key:2,
        order:2,

      },
      {
        data:3,
        key:3,
        order:3,

      }
    ],
    [
      {
        data:9,
        key:1,
        order:2,

      },
      {
        data:2,
        key:2,
        order:0,

      },
      {
        data:1,
        key:0,
        order:1,

      },
      {
        data:3,
        key:3,
        order:3,

      }
    ],
    [
      {
        data:9,
        key:1,
        order:3,

      },
      {
        data:2,
        key:2,
        order:0,

      },
      {
        data:1,
        key:0,
        order:1,

      },
      {
        data:3,
        key:3,
        order:2,
      }
    ]
  ],
  pointer: 0
}

export default createStore(reducer, initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())