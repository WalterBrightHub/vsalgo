import { NEXT,PP } from './actionTypes'

import { selectBubbleSortSequence } from './selector'

export default (state, action) => {
  if (action.type === NEXT) {
    console.log('hello')
    const { pointer } = state
    console.log(`pointer=${pointer}`)
    const { length } = selectBubbleSortSequence(state)
    if (pointer < length - 1) {
      return {
        ...state,
        pointer: (pointer + 1) % length
      }

    }
    else {
      return state
    }
  }
  else if(action.type===PP){
    const {isPlaying}=state
    return {
      ...state,
      isPlaying:!isPlaying
    }
  }
  else {
    return state
  }
}