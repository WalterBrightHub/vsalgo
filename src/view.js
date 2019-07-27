import React from 'react'

import { next , pp} from './actions'
import { connect } from 'react-redux'

import { selectData, selectPadding, selectScaleLinear,selectIsPlaying } from './selector'

import { Motion, spring, presets } from 'react-motion'

import { scaleColor } from './draw/scale'

import './bubble.css'

import { SVG_WIDTH, SVG_HEIGHT, RECT_STEP, RECT_WIDTH } from './constrant'


let Bubble = ({ rects, padding, scaleLinear,isPlaying,
   onNext,onPP }) => {
  console.log(rects)
  // console.log(padding)
  // console.log(scaleLinear)
  return (
    <div>
      <div>
{/* <svg
        width={SVG_WIDTH}
        height={SVG_HEIGHT}
      >
        {
          rects.map(({ data, order, status }, ind) => (
            <rect
              key={'rect' + ind}
              className='rect'
              height={scaleLinear(data)}
              width={RECT_WIDTH}
              x={padding.left + order * RECT_STEP}
              y={SVG_HEIGHT - padding.bottom - scaleLinear(data)}
              fill={scaleColor(status)}
            >
            </rect>
          ))
        }
        {
          rects.map(({ data, order }, ind) => (
            <text
              key={'text' + ind}
              className='text'
              fill='black'
              textAnchor='middle'
              x={padding.left + order * RECT_STEP}
              y={SVG_HEIGHT - padding.bottom - scaleLinear(data)}
              dx={RECT_WIDTH / 2}
              dy='-0.5em'
            >
              <animate attributeName="x" from="0" to={padding.left + order * RECT_STEP} dur="0.5s" />
              {data}
            </text>
          ))
        }
      </svg> */}
      </div>
      
      <svg width={SVG_WIDTH} height={SVG_HEIGHT}>

        {rects.map(({ data, order, status }, ind) => (
          <Motion
            key={'motionRect' + ind}
            style={
              {
                x: spring(padding.left + order * RECT_STEP, presets.gentle)
              }
            }>
            {({ x }) => (
              <g>
                <rect
                  key={ind}
                  className='rect'
                  height={scaleLinear(data)}
                  width={RECT_WIDTH}
                  x={x}
                  y={SVG_HEIGHT - padding.bottom - scaleLinear(data)}
                  fill={scaleColor(status)}
                >
                </rect>
                <text
                  key={'text' + ind}
                  className='text'
                  fill='black'
                  textAnchor='middle'
                  x={x}
                  y={SVG_HEIGHT - padding.bottom - scaleLinear(data)}
                  dx={RECT_WIDTH / 2}
                  dy='-0.5em'
                >
                  {data}
                </text>
              </g>
            )
            }

          </Motion>
        ))}
      </svg>
      <button onClick={onNext}>下一步</button>
      <button onClick={onPP}>{isPlaying?'暂停':'播放'}</button>
    </div>
  )
}

let mapState = (state) => ({
  rects: selectData(state),
  padding: selectPadding(state),
  scaleLinear: selectScaleLinear(state),
  isPlaying:selectIsPlaying(state),
})

let mapDispatch = (dispatch) => ({
  onNext: () => {
    dispatch(next())
  },
  onPP:()=>{
    dispatch(pp())
  },
})

export default connect(mapState, mapDispatch)(Bubble)