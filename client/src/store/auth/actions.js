const authActions = {
  LOGOUT: "AUTH/LOGOUT",
  SUCCESS_LOGIN: "AUTH/SUCCESS_LOGIN",
  FAILED_LOGIN: "AUTH/FAILED_LOGIN",

  logout: (data) => ({
    type: authActions.LOGOUT,
    payload: { data },
  }),
  
  sucessLogin: (data) => ({
    type: authActions.SUCCESS_LOGIN,
    payload: { data },
  }),

  failedLogin: (data) => ({
    type: authActions.FAILED_LOGIN,
    payload: { data },
  }),
};

export default authActions;