const actions = {
  SET_USER: "USER/SET_USER",

  setUser: (data) => ({
    type: actions.SET_USER,
    payload: { data },
  })
};

export default actions;