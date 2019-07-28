import {createSelector} from 'reselect'

import {bubbleSortGenerator} from './bubble'

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

export const selectIsUnsorted=createSelector(
  [selectBubbleSortSequence,selectPointer],
  (sequence,pointer)=>pointer<sequence.length-1
)