const authActions = {
  LOGOUT: "AUTH/LOGOUT",

  logout: () => ({
    type: authActions.LOGOUT,
  })
};

export default authActions;