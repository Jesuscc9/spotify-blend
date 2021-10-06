const userActions = {
  SET_USER: "USER/SET_USER",
  SET_USER_DATA: "USER/SET_USER_DATA",

  setUserData: (data) => ({
    type: userActions.SET_USER_DATA,
    payload: { data },
  })
};

export default userActions;