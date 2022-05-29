import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import roomActions from '../../store/room/actions'
import { ProfileImage, Particles } from '../../components'
import { RootStateType } from '../../store'
import { motion } from 'framer-motion'
import { getCommonUsersData } from '../../helpers'
import { iCommonUsersData } from '../../types'
import { RoomStateType } from '../../store/room/reducer'

export const Blend = () => {
  const { roomId }: { roomId: string } = useParams()

  const dispatch = useDispatch()

  const user = useSelector((state: RootStateType) => state.auth.data)
  const room = useSelector((state: RootStateType) => state.room)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user.display_name) return
    dispatch(
      roomActions.connectRoom({
        user,
        roomId,
        onUpdateRoom: (room: RoomStateType) =>
          dispatch(roomActions.updateRoom(room)),
        onBlendingRoom: () => {
          dispatch(roomActions.setRoomStatus('blending'))

          //setTimeout only with simulation purposes xd
          setTimeout(() => {
            dispatch(roomActions.setRoomStatus('finished'))
          }, 5000)
        }
      })
    )

    setLoading(false)

    return () => {
      dispatch(roomActions.disconnectRoom({ userId: user.id, roomId }))
    }
  }, [user, roomId])

  useEffect(() => {
    dispatch(roomActions.setRoomStatus('ready'))
  }, [])

  const handleBlendClick = () => {
    dispatch(roomActions.setBlending())
  }

  return (
    <div className="container mx-auto mt-10">
      <Particles />
      <Link to="/" className="btn-primary">
        Back
      </Link>

      {room?.status === 'finished' && <BlendedRoom />}

      {/* {room?.status === "blending" && <BlendingRoom users={room.users} />} */}

      {!loading ? (
        <BlendRoom handleBlendClick={handleBlendClick} />
      ) : (
        <div>necesito un loadeeerrr...</div>
      )}
      <br />
    </div>
  )
}

interface BlendRoomProps {
  handleBlendClick: () => void
}

const BlendRoom = ({ handleBlendClick }: BlendRoomProps) => {
  const room = useSelector((state: RootStateType) => state.room)

  return (
    <>
      <div className="my-10">Room ID: {room.id}</div>

      {/* {room.status == "ready" && room?.activeUsers === 2 && ( */}
      <button className="btn-primary" onClick={handleBlendClick}>
        Make Blend
      </button>
      {/* )} */}

      <motion.div
        className="container my-20 flex justify-between flex-wrap"
        layoutId="parent-container"
      >
        {room.users.map((user, i: number) => (
          <ProfileImage
            key={i}
            src={user.images[0].url}
            side={i % 2 == 0 ? true : false}
            index={i}
          />
        ))}
      </motion.div>
    </>
  )
}

const BlendedRoom = () => {
  const room = useSelector((state: RootStateType) => state.room)

  const { users } = room

  //TODO: Migrate this common data to global store on redux with saga actions
  const [commonData, setCommonData] = useState<iCommonUsersData>({
    tracks: [],
    artists: [],
    genres: []
  })

  const { artists, tracks, genres } = commonData

  useEffect(() => {
    getCommonUsersData(users).then((e) => {
      setCommonData(e)
    })
  }, [])

  return (
    <>
      <motion.div className="container border flex" layoutId="parent-container">
        {users.map((user: any, i: number) => (
          <motion.div
            className="border"
            layoutId={`user-image-container-${i}`}
            key={i}
          >
            <img
              src={user.images[0].url}
              alt="clairo"
              className="w-20 h-20 rounded-full"
              style={{}}
            />
          </motion.div>
        ))}
      </motion.div>
      <h1>SONGS IN COMMON</h1>
      {tracks.map((e: any, i: number) => (
        <p key={i}>{e.name}</p>
      ))}
      <h1>ARTISTS IN COMMON</h1>
      {artists.map((e: any, i) => (
        <p key={i}>{e.name}</p>
      ))}
      {/* <h1>GENRES IN COMMON</h1>
      {genres.map((e: any, i) => (
        <p key={i}>{e}</p>
      ))} */}
    </>
  )
}
