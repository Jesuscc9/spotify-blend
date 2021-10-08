const roomActions = {
  UPDATE_ROOMS: "ROOMS/UPDATE_ROOMS",

  updateRooms: (data) => ({
    type: roomActions.UPDATE_ROOMS,
    payload: { data },
  }),
};

export default roomActions;
