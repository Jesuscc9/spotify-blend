import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { spotifyApi } from "../../spotifyApi";
import { authActions } from "../auth/actions"

function* fetchUser(action) {
  try {
    const user = yield call(spotifyApi.me);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* userSaga() {
  yield takeEvery(authActions.LOGIN, fetchUser);
}

export default userSaga;
