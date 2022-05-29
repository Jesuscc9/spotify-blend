import { io, Socket } from 'socket.io-client'
import { RoomStateType } from '../store/room/reducer'
import { iUser } from '../types/api'

export interface SocketConnectProps {
  user: string
  roomId: string
  onUpdateRoom: (room: RoomStateType) => void
  onBlendingRoom: () => void
}

interface SocketType {
  roomId: string
  instance: Socket | null
  connect: (obj: SocketConnectProps) => void
  disconnect: () => void
  setBlending: () => void
}

export const socket: SocketType = {
  roomId: '',
  instance: null,
  connect: ({ user, roomId, onUpdateRoom, onBlendingRoom }) => {
    socket.roomId = roomId

    if (socket.instance === null) {
      socket.instance = io(`http://localhost:3001/`)
    }

    socket.instance.connect()

    socket.instance.emit('newUser', { user, roomId })

    socket.instance.on('updateRoom', (room: RoomStateType) => {
      if (room.id !== roomId) return
      onUpdateRoom(room)
    })

    socket.instance.on('blending', (roomId: string) => {
      if (roomId !== roomId) return
      onBlendingRoom()
    })
  },

  disconnect: () => {
    socket?.instance?.disconnect()
    socket.instance = null
  },

  setBlending: () => {
    socket?.instance?.emit('blending', { roomId: socket.roomId })
  }
}
