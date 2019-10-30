import { put, takeEvery, select, delay, all } from 'redux-saga/effects'
import { PP, AUTO_PLAY,} from '../component/ControlPanel/actionTypes'

import {selectIsUnsorted} from '../selector/'

function* togglePlaying() {
  const { isPlaying } = yield select()
  // console.log(`isPlaying:${isPlaying}`)
  if (isPlaying) {
    yield put({
      type: AUTO_PLAY
    })
  }
  else {

  }
  yield
}

function* autoPlay() {
  // console.log('here!')
  yield delay(500)
  const state = yield select()
  const {isPlaying}=state
  const isUnsorted=selectIsUnsorted(state)
  if (isPlaying && isUnsorted) {
    yield put({
      type: AUTO_PLAY
    })
  }
  else if(isPlaying){ //播放完成，自动停止
    yield put({
      type:PP
    })
  }
}

function* togglePlayingSaga() {
  yield takeEvery(PP, togglePlaying)

}

function* autoPlaySaga() {
  yield takeEvery(AUTO_PLAY, autoPlay)
}

export default function* mySaga() {
  yield all([
    togglePlayingSaga(),
    autoPlaySaga()
  ])
}