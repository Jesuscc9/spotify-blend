import { combineReducers } from "redux";
import user from "./user/reducer";
import room from "./room/reducer";

export default combineReducers({ user, room });