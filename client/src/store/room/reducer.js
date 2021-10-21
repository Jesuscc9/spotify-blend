import roomActions from "./actions";

const initialState = {
  id: '',
  activeUsers: '',
  users: [],
}

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case roomActions.UPDATE_ROOM:
      return {...state, ...payload.data};
    default:
      return state;
  }
};

export default reducer;