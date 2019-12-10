import React from 'react'

import { prev, next, pp, jumpToUnsorted, jumpToSorted, random, setArray } from '../actions'
import { connect } from 'react-redux'

import { selectIsPlaying } from '../selector'

import ArrayInput from './ArrayInput'

import './controlPanel.css'


let ControlPanel = ({ isPlaying, onPrev, onNext, onJumpToUnsorted, onJumpToSorted, onRandom, onPP, onSetArray }) => {
  return (
    <div>
      <div className='ctrl'>
        <button onClick={onPrev}>上一步</button>
        <button onClick={onNext}>下一步</button>
        <button onClick={onJumpToUnsorted}>起始</button>
        <button onClick={onJumpToSorted}>结束</button>
        <button onClick={onRandom}>随机</button>
        <button onClick={onPP}>{isPlaying ? '暂停' : '播放'}</button>

      </div>
      <ArrayInput onSetArray={onSetArray}></ArrayInput>
    </div>
  )
}

let mapState = (state) => ({
  isPlaying: selectIsPlaying(state),
})

let mapDispatch = (dispatch) => ({
  onPrev: () => {
    dispatch(prev())
  },
  onNext: () => {
    dispatch(next())
  },
  onJumpToUnsorted: () => {
    dispatch(jumpToUnsorted())
  },
  onJumpToSorted: () => {
    dispatch(jumpToSorted())
  },
  onPP: () => {
    dispatch(pp())
  },
  onRandom: () => {
    dispatch(random())
  },
  onSetArray: array => {
    dispatch(setArray(array))
  }
})

export default connect(mapState, mapDispatch)(ControlPanel)