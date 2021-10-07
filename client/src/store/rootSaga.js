import { fork, all, call } from "redux-saga/effects"

import authSaga from './auth/saga'
import userSaga from './user/saga'

export default function * rootSaga() {
	yield all([fork(authSaga), fork(userSaga)])
}