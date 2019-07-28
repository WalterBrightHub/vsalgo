import { put, takeEvery, select, delay, all } from 'redux-saga/effects'
import { PP, AUTO_PLAY,} from '../actionTypes'

function* togglePlaying(action) {
  const { isPlaying } = yield select()
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
  yield delay(500)
  const { isPlaying } = yield select()
  if (isPlaying) {
    yield put({
      type: AUTO_PLAY
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