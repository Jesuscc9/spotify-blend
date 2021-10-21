const roomActions = {
  UPDATE_ROOM: "ROOM/UPDATE_ROOM",

  updateRoom: (data) => ({
    type: roomActions.UPDATE_ROOM,
    payload: { data },
  }),
};

export default roomActions;
