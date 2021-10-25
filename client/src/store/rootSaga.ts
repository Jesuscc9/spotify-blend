import { all } from "redux-saga/effects"

import authSaga from './auth/saga'
import roomSaga from './room/saga'

export function * rootSaga() {
	yield all([authSaga(), roomSaga()])
}