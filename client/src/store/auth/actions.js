const authActions = {
  ME: "AUTH/ME",
  SET_DATA: "AUTH/SET_DATA",
  LOGOUT: "AUTH/LOGOUT",

  me: () =>  ({
    type: authActions.ME,
  }),

  setData: (data) =>({
    payload: data,
    type: authActions.SET_DATA,
  }),

  logout: () => ({
    type: authActions.LOGOUT,
  }),
};

export default authActions;