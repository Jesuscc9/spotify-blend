const userActions = {
  SET_USER: "USER/SET_USER",
  SET_USER_DATA: "USER/SET_USER_DATA",
  INITIAL_STATE: "USER/INITIAL_STATE",

  setUserData: (data) => ({
    type: userActions.SET_USER_DATA,
    payload: { data },
  }),

  initialState: () => ({
    type: userActions.INITIAL_STATE,
  })
};

export default userActions;