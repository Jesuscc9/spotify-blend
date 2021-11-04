import roomActions from "../room/actions";

import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType } from "../../types"
import { socket } from "../../services/socket";

function* connect({ payload }: ActionType) {
	yield call(socket.connect, payload)
	yield put(roomActions.setRoomStatus("ready"))
}

function* disconnect({ payload }: ActionType){
	yield call(socket.disconnect, payload)
	yield put(roomActions.setRoomStatus("closed"))
}

function* setBlending(){
	yield call(socket.setBlending);
}

function* roomSaga(){
	yield takeEvery(roomActions.CONNECT_ROOM, connect)
	yield takeEvery(roomActions.DISCONNECT_ROOM, disconnect)
	yield takeEvery(roomActions.SET_BLENDING, setBlending)
}

export default roomSaga;

