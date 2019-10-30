import { NEXT, PP, AUTO_PLAY, JUMP_TO_UNSORTED, PREV, JUMP_TO_SORTED, RANDOM, SET_ARRAY } from './actionTypes'

import { selectIsUnsorted, selectBubbleSortSequence } from './selector'

export default (state, action) => {
  console.log(action)
  if (action.type === PREV) {
    const { pointer } = state
    if (pointer > 0) {
      return {
        ...state,
        pointer: pointer - 1,
        isPlaying: false
      }
    }
    else {
      return state
    }
  }
  else if (action.type === NEXT) {
    console.log('hello')
    const { pointer } = state
    console.log(`pointer=${pointer}`)
    const isUnsorted = selectIsUnsorted(state)
    if (isUnsorted) {
      return {
        ...state,
        pointer: pointer + 1,
        isPlaying: false
      }

    }
    else {
      return state
    }
  }
  else if (action.type === JUMP_TO_UNSORTED) {
    return {
      ...state,
      pointer: 0,
      isPlaying: false
    }
  }
  else if (action.type === JUMP_TO_SORTED) {
    const {length}=selectBubbleSortSequence(state)
    return {
      ...state,
      pointer: length-1,
      isPlaying: false
    }
  }
  else if(action.type===RANDOM){
    let newArray = new Array(Math.ceil(Math.random() * 8 + 8))
    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = Math.ceil(Math.random() * 20)
    }
    return {
      array:newArray.slice(),
      pointer:0,
      isPlaying:false
    }
  }
  else if (action.type === PP) {
    const { isPlaying } = state
    return {
      ...state,
      isPlaying: !isPlaying
    }
  }
  else if (action.type === AUTO_PLAY) {
    const { pointer } = state
    const isUnsorted = selectIsUnsorted(state)
    if (isUnsorted) {
      return {
        ...state,
        pointer: pointer + 1
      }

    }
    else {
      return state
    }
  }

  else if(action.type===SET_ARRAY){
    return {
      array:action.array,
      pointer:0,
      isPlaying:false
    }
  }

  else {
    return state
  }
}