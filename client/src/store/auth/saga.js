import authActions from "../auth/actions";

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";
import { spotifyApi } from "../../spotifyApi"
import { sagaWrapper } from "../../helpers/redux";
import { history } from "../../App";

function* me(){
  const response = yield call(spotifyApi.me);
  yield put(authActions.setData(response.data))
}

function* logout() {
  yield Cookies.remove("spotifyAuthToken");
  yield history.push('/')
}

function* authSaga() {
  yield takeLatest(authActions.ME, sagaWrapper(me));
  yield takeLatest(authActions.LOGOUT, sagaWrapper(logout));
}

export default authSaga;
