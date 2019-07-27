import {createSelector} from 'reselect'

import {bubbleSortGenerator} from './bubble'

export const selectArray=state=>state.array

export const selectPointer=state=>state.pointer

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
  dataset => {
    let generator = bubbleSortGenerator(dataset)
    let sequence = []
    for (let item of generator) {
      sequence.push(item)
    }
    return sequence
  }
)

export const selectData=createSelector(
  [selectBubbleSortSequence,selectPointer],
  (sequence,pointer)=>sequence[pointer]
)
