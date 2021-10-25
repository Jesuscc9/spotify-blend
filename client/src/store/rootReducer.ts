import { combineReducers } from "redux";
import auth from "./auth/reducer";
import room from "./room/reducer";

export default combineReducers({ auth, room });