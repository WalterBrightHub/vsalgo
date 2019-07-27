import React from 'react'

import { next } from './actions'
import { connect } from 'react-redux'

import { Motion, spring, presets } from 'react-motion'

let Bubble = ({ rects, onNext }) => {
  console.log(rects)
  return (
    <div>
      <svg width={400} height={200}>
        {rects.map((rect,ind) => (
          <Motion
            style={{ x: spring(rect.order * 30, presets.gentle) }}>
            {interpolatingStyle => (
                <rect
                  key={ind} height={rect.data * 10} width={20} x={interpolatingStyle.x} y={200 - rect.data * 10}>
                </rect>
              )
            }

          </Motion>
        ))}
      </svg>
      <button onClick={onNext}>下一步</button>
    </div>
  )
}

let mapState = (state) => {
  console.log(state)
  let history = state.history
  let pointer = state.pointer
  let rects = history[pointer]
  return { rects: rects }
}

let mapDispatch = (dispatch) => ({
  onNext: () => {
    dispatch(next())
  }
})

export default connect(mapState, mapDispatch)(Bubble)