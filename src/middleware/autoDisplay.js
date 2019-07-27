import {PP} from '../actionTypes'

import {next as onNext} from '../actions'

export default function autoDisplayMiddleware({dispatch,getState}){
  return next=>action=>{
    // let { isPlaying } = getState()
    // if(action.type===PP){
    //   isPlaying=!isPlaying
    // }
    // setTimeout(() => {
    //   if (isPlaying) {
    //     dispatch(onNext())
    //   }
    // }, 500)
    return next(action)
  }
}