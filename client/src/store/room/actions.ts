const roomActions = {
  UPDATE_ROOM: "ROOM/UPDATE_ROOM",
  SET_ROOM_STATUS: "ROOM/SET_ROOM_STATUS",

  updateRoom: (data: any) => ({
    type: roomActions.UPDATE_ROOM,
    payload: { data },
  }),

  setRoomStatus: (data: string) => ({
    type: roomActions.SET_ROOM_STATUS,
    payload: { data },
  })
};

export default roomActions;
