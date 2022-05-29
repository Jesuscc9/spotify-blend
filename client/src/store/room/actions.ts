import { SocketConnectProps } from 'services/socket'
import { RoomStateType } from './reducer'

const roomActions = {
  UPDATE_ROOM: 'ROOM/UPDATE_ROOM',
  SET_ROOM_STATUS: 'ROOM/SET_ROOM_STATUS',
  CONNECT_ROOM: 'ROOM/CONNECT_ROOM',
  SET_BLENDING: 'ROOM/SET_BLENDING',
  DISCONNECT_ROOM: 'ROOM/DISONNECT_ROOM',
  CALCULATE_COMMON_DATA: 'ROOM/CALCULATE_COMMON_DATA',

  updateRoom: (data: RoomStateType) => ({
    type: roomActions.UPDATE_ROOM,
    payload: { data }
  }),

  setRoomStatus: (status: string) => ({
    type: roomActions.SET_ROOM_STATUS,
    payload: { status }
  }),

  connectRoom: (data: SocketConnectProps) => ({
    type: roomActions.CONNECT_ROOM,
    payload: { ...data }
  }),

  setBlending: () => ({
    type: roomActions.SET_BLENDING
  }),

  calculateCommonData: () => ({
    type: roomActions.CALCULATE_COMMON_DATA
  }),

  disconnectRoom: (data: any) => ({
    type: roomActions.DISCONNECT_ROOM,
    payload: data
  })
}

export default roomActions
