import { combineReducers } from "redux";
import auth from "./auth/reducer";
import user from "./user/reducer";
import room from "./room/reducer";

export default combineReducers({ auth, user });