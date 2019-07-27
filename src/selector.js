import {createSelector} from 'reselect'

import {bubbleSortGenerator} from './bubble'

import {SVG_WIDTH,RECT_STEP,SVG_HEIGHT} from './constrant'

import {scaleLinear} from 'd3'

export const selectArray=state=>state.array

export const selectPointer=state=>state.pointer

export const selectIsPlaying=state=>state.isPlaying

export const selectDataset=createSelector(
  [selectArray],
  array => array.map((val, ind) => ({
    data: val,
    order: ind,
    status: 'unsorted' 
  }))
)

export const selectBubbleSortSequence=createSelector(
  [selectDataset],
  dataset => [...bubbleSortGenerator(dataset)]
)

export const selectData=createSelector(
  [selectBubbleSortSequence,selectPointer],
  (sequence,pointer)=>sequence[pointer]
)

export const selectPadding=createSelector(
  [selectArray],
  array=>{
    const paddingLeft=(SVG_WIDTH - array.length * RECT_STEP) / 2
    return {
      top: 20,
      right: paddingLeft,
      bottom: 20,
      left: paddingLeft
    }
  }
)

//选择数组中最大的元素
const selectMax = array => array.reduce((max, val) => Math.max(max, val))

//将数据映射到不超过SVG限定高度300px

export const selectScaleLinear=createSelector(
  [selectArray],
  array => scaleLinear()
  .domain([0, selectMax(array)])
  .range([0, SVG_HEIGHT-100])  //留下空间给文字
)