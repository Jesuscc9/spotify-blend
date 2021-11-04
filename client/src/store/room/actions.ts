const roomActions = {
  UPDATE_ROOM: "ROOM/UPDATE_ROOM",
  SET_ROOM_STATUS: "ROOM/SET_ROOM_STATUS",
  CONNECT_ROOM: "ROOM/CONNECT_ROOM", 
  SET_BLENDING: "ROOM/SET_BLENDING", 
  DISCONNECT_ROOM: "ROOM/DISONNECT_ROOM",

  updateRoom: (data: any) => ({
    type: roomActions.UPDATE_ROOM,
    payload: { data },
  }),

  setRoomStatus: (data: string) => ({
    type: roomActions.SET_ROOM_STATUS,
    payload: { data },
  }),

  connectRoom: (data: any) => ({
    type: roomActions.CONNECT_ROOM,
    payload: { ...data }
  }),

  setBlending: () => ({
    type: roomActions.SET_BLENDING,
  }),

  disconnectRoom: (data: any) => ({
    type: roomActions.DISCONNECT_ROOM,
    payload: data,
  })
  
};

export default roomActions;
