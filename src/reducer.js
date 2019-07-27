import {NEXT} from './actionTypes'

import {selectBubbleSortSequence} from './selector'

export default (state,action)=>{
  if(action.type===NEXT){
    console.log('hello')
    const {array,pointer}=state
    console.log(`pointer=${pointer}`)
    return {
      ...state,
      pointer:(pointer+1)%selectBubbleSortSequence(state).length
    }
  }
  else{
    return state
  }
}