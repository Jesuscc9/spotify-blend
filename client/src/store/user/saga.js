import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { spotifyApi } from "../../spotifyApi";
import userActions from "../user/actions";

function* fetchUser() {
  try {
    const user = yield call(spotifyApi.me);
    yield put(userActions.setUserData(user));
  } catch (e) {
    console.log(e)
  }
}

function* userSaga() {
  yield takeEvery(userActions.SET_USER, fetchUser);
}

export default userSaga;
