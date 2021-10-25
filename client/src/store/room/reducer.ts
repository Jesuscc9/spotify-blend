import { ActionType } from "../../types";
import roomActions from "./actions";

interface RoomStateType {
  id: string,
  activeUsers: number,
  users: any,
}

const initialState: RoomStateType = {
  id: '',
  activeUsers: 0,
  users: [],
}

const reducer = (state = initialState, action: ActionType): RoomStateType  => {
  const { payload, type } = action;

  switch (type) {
    case roomActions.UPDATE_ROOM:
      return {...state, ...payload.data};
    default:
      return state;
  }
};

export default reducer;