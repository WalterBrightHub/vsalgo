import {createSelector} from 'reselect'

import {bubbleSortGenerator} from './bubble'

//待排序的数组
export const selectArray=state=>state.array

//目前进行到第几步
export const selectPointer=state=>state.pointer

//是否自动播放
export const selectIsPlaying=state=>state.isPlaying

//处理待排序的数组
export const selectDataset=createSelector(
  [selectArray],
  array => array.map((val, ind) => ({
    data: val,
    order: ind,
    status: 'unsorted' 
  }))
)

//获取所有步骤的信息，以便详细select
export const selectBubbleSort=createSelector(
  [selectDataset],
  dataset => [...bubbleSortGenerator(dataset)]
)

//用于画板上展示
export const selectBubbleSortSequence=createSelector(
  [selectBubbleSort],
  (bubbleSort)=>bubbleSort.map(item=>item.sequence)
)

//用于跟踪代码和重要变量
export const selectInfos=createSelector(
  [selectBubbleSort],
  (bubbleSort)=>bubbleSort.map(item=>item.info)
)

//用于画板上展示
export const selectData=createSelector(
  [selectBubbleSortSequence,selectPointer],
  (sequence,pointer)=>sequence[pointer]
)

//是否排序完成
export const selectIsUnsorted=createSelector(
  [selectBubbleSortSequence,selectPointer],
  (sequence,pointer)=>pointer<sequence.length-1
)

//用于代码跟踪
export const selectCurrentInfo=createSelector(
  [selectInfos,selectPointer],
  (infos,pointer)=>infos[pointer]
)

export const selectN=createSelector(
  [selectArray],
  (array)=>array.length
)