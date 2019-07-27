import React from 'react'

import { next } from './actions'
import { connect } from 'react-redux'

import {selectData} from './selector'

import { Motion, spring, presets } from 'react-motion'

let Bubble = ({ rects, onNext }) => {
  console.log(rects)
  return (
    <div>
      <svg width={400} height={200}>
        {rects.map((rect,ind) => (
          <Motion
           key={ind} 
            style={{ x: spring(rect.order * 30, presets.gentle) }}>
            {interpolatingStyle => (
                <rect
                  key={rect.order} height={rect.data * 10} width={20} x={interpolatingStyle.x} y={200 - rect.data * 10}>
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

let mapState = (state) => ({
  rects:selectData(state)
})

let mapDispatch = (dispatch) => ({
  onNext: () => {
    dispatch(next())
  }
})

export default connect(mapState, mapDispatch)(Bubble)