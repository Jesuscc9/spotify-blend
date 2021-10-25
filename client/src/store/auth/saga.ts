import authActions from "../auth/actions";

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";
import { spotifyApi } from "../../spotifyApi";
import { sagaWrapper } from "../../helpers/redux";
import { history } from "../../App";
import { ResponseType } from "../../types"

function* me() {
  const userData : ResponseType = yield call(spotifyApi.me);
  const tracksData : ResponseType = yield call(spotifyApi.topTracks);
  yield put(
    authActions.setData({ ...userData.data, topTracks: tracksData.data })
  );
}

function* logout() {
  yield Cookies.remove("spotifyAuthToken");
  yield history.push("/");
}

function* authSaga() {
  yield takeLatest(authActions.ME, sagaWrapper(me));
  yield takeLatest(authActions.LOGOUT, logout);
}

export default authSaga;
