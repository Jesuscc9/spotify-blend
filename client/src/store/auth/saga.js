import authActions from "../auth/actions";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import userActions from "../user/actions";
import Cookies from "js-cookie";

function* logout() {
  yield Cookies.remove("spotifyAuthToken");
  yield window.location = '/'
}

function* authSaga() {
  yield takeEvery(authActions.LOGOUT, logout);
}

export default authSaga;
