import Cookies from "js-cookie";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { authActions } from "../auth/actions"
import userActions from "../user/actions";

function* logout() {
  // yield put(userActions.initialState())
  yield Cookies.remove("spotifyAuthToken");
  yield window.location = '/'
}

function* authSaga() {
  yield takeEvery(authActions.LOGOUT, logout);
}

export default authSaga;
