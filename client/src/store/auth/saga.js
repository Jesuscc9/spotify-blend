import authActions from "../auth/actions";

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";
import { spotifyApi } from "../../spotifyApi";
import { sagaWrapper } from "../../helpers/redux";
import { history } from "../../App";

function* me() {
  const response = yield call(spotifyApi.me);
  const topTracksResponse = yield call(spotifyApi.topTracks);
  yield put(
    authActions.setData({ ...response.data, topTracks: topTracksResponse.data })
  );
}

function* logout() {
  yield Cookies.remove("spotifyAuthToken", {
    path: "/",
    domain: window.location.hostname,
  });
  yield history.push("/");
}

function* authSaga() {
  yield takeLatest(authActions.ME, sagaWrapper(me));
  yield takeLatest(authActions.LOGOUT, logout);
}

export default authSaga;
