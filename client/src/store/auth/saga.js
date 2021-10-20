import authActions from "../auth/actions";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";
import { spotifyApi } from "../../spotifyApi"

function* me(){
  const response = yield call(spotifyApi.me);
  yield put(authActions.setData(response.data))
}

function* logout() {
  yield Cookies.remove("spotifyAuthToken");
  yield window.location = '/'
}

function* authSaga() {
  yield takeLatest(authActions.ME, me);
  yield takeEvery(authActions.LOGOUT, logout);
}

export default authSaga;
