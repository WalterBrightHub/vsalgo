import { NEXT,PP ,AUTO_PLAY} from './actionTypes'

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
        pointer: (pointer + 1) % length,
        isPlaying:false
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
  else if(action.type===AUTO_PLAY){
    const { pointer } = state
    const { length } = selectBubbleSortSequence(state)
    if (pointer < length - 1) {
      return {
        ...state,
        pointer: (pointer + 1) % length,
      }

    }
    else {
      return state
    }
  }
  else {
    return state
  }
}