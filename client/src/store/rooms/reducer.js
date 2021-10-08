import roomActions from "./actions";

const initialState = []

const reducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case roomActions.UPDATE_ROOMS:
      return [...payload.data ];
    default:
      return state;
  }
};

export default reducer;