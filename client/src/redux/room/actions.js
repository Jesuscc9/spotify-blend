const actions = {
  SET_ROOM: "ROOM/SET_ROOM",

  setRoom: (data) => ({
    type: actions.SET_ROOM,
    payload: { data },
  })
};

export default actions;