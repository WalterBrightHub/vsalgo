import {PREV,NEXT,PP,JUMP_TO_UNSORTED, JUMP_TO_SORTED, RANDOM} from './actionTypes'

export const prev=()=>({
  type:PREV
})

export const next=()=>({
  type:NEXT
})

export const jumpToUnsorted=()=>({
  type:JUMP_TO_UNSORTED
})

export const jumpToSorted=()=>({
  type:JUMP_TO_SORTED
})

export const random=()=>({
  type:RANDOM
})

export const pp=()=>({
  type:PP
})
