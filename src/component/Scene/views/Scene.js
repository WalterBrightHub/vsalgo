import React from 'react'

import { connect } from 'react-redux'

import { selectData, selectPadding, selectScaleLinear, selectIsPlaying } from '../selector'

import { Motion, spring, presets } from 'react-motion'

import { scaleColor } from '../draw/scale'

import './scene.css'

import { SVG_WIDTH, SVG_HEIGHT, RECT_STEP, RECT_WIDTH } from '../constant'


let Bubble = ({ rects, padding, scaleLinear }) => {
  // console.log(rects)
  return (
    <div>

      <svg width={SVG_WIDTH} height={SVG_HEIGHT}>

        {rects.map(({ data, order, status }, ind) => (
          <Motion
            key={'motionRect' + ind}
            defaultStyle={
              {
                x: padding.left + order * RECT_STEP,
                y: SVG_HEIGHT - padding.bottom,
                height: 0
              }
            }
            style={
              {
                x: spring(padding.left + order * RECT_STEP, presets.gentle),
                y: spring(SVG_HEIGHT - padding.bottom - scaleLinear(data), presets.gentle),
                height: spring(scaleLinear(data), presets.gentle)
              }
            }>
            {({ x, y, height }) => (
              <g>
                <rect
                  key={'rect' + ind}
                  className='rect'
                  height={height}
                  width={RECT_WIDTH}
                  x={x}
                  y={y}
                  fill={scaleColor(status)}
                >
                </rect>
                <text
                  key={'text' + ind}
                  className='text'
                  fill='black'
                  textAnchor='middle'
                  x={x}
                  y={y}
                  dx={RECT_WIDTH / 2}
                  dy='-0.5em'
                >{data}</text>
              </g>
            )
            }

          </Motion>
        ))}
      </svg>
    </div>
  )
}

let mapState = (state) => ({
  rects: selectData(state),
  padding: selectPadding(state),
  scaleLinear: selectScaleLinear(state),
  isPlaying: selectIsPlaying(state),
})


export default connect(mapState)(Bubble)