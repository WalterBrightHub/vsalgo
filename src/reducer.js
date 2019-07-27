import {NEXT} from './actionTypes'

export default (state,action)=>{
  if(action.type===NEXT){
    console.log('hello')
    const {history,pointer}=state
    console.log((pointer+1)%history.length)
    return {
      ...state,
      pointer:(pointer+1)%history.length
    }
  }
  else{
    return state
  }
}