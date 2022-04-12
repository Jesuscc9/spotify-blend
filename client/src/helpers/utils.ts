import { spotifyApi } from '../spotifyApi'
import { iCommonUsersData } from '../types'

const randomString = (length: number): string => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

//function for the animation
const getCurrentRotation = (el: any): number => {
  const st = window.getComputedStyle(el, null)
  const tm =
    st.getPropertyValue('-webkit-transform') ||
    st.getPropertyValue('-moz-transform') ||
    st.getPropertyValue('-ms-transform') ||
    st.getPropertyValue('-o-transform') ||
    st.getPropertyValue('transform') ||
    'none'
  if (tm != 'none') {
    const values = tm.split('(')[1].split(')')[0].split(',')
    /*
    a = values[0];
    b = values[1];
    angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
    */
    //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
    //@ts-ignore
    const angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI))
    return angle < 0 ? angle + 360 : angle //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
  }
  return 0
}
interface iGenre {
  [key: string]: number
}

const getGenres = async (artistsIds: Array<string>): Promise<iGenre> => {
  if (artistsIds.length > 50) {
    console.error('The limit for fetching artists genres is 50')
    return {}
  }

  const genres: iGenre = {}

  const response = await spotifyApi.getArtistsGenres(artistsIds.join())
  response.data.artists.forEach((e: any) => {
    e.genres.forEach((genre: string) => {
      const val = genres[genre]
      genres[genre] = val ? val + 1 : 1
    })
  })

  return genres
}

const getCommonUsersData = async (users: Array<any>): Promise<iCommonUsersData> => {

  const commonUsersData: iCommonUsersData = {
    tracks: [],
    artists: [],
    genres: []
  }
  const topTracksUser1: Array<string> = []
  const topTracksUser2: Array<string> = []

  users[0].topArtists.items.forEach((el: any) => {
    if (users[1].topArtists.items.map((e: any) => e.name).includes(el.name)) {
      commonUsersData.artists.push(el.name)
    }
  })

  topTracksUser1.forEach((track) => {
    if (topTracksUser2.includes(track)) {
      commonUsersData.tracks.push(track)
    }
  })

  const artistsIds1 = users[0].topArtists.items.map((e: any) => e.id)
  const artistsIds2 = users[1].topArtists.items.map((e: any) => e.id)

  const genres1: iGenre = await getGenres(artistsIds1)
  const genres2: iGenre = await getGenres(artistsIds2)

  Object.keys(genres1).forEach((e) => {
    if (genres1[e] > 2 && Object.keys(genres2).includes(e)) {
      if(genres2[e] > 2)
        commonUsersData.genres.push(e)
    }
  })

  return commonUsersData
}

export { randomString, getCurrentRotation, getCommonUsersData }
