import axios from 'axios'
import Cookies from 'js-cookie'

const token = Cookies.get('spotifyAuthToken')

const config = {
  headers: {
    Authorization: 'Bearer ' + token
  }
}

const API_URL = 'https://api.spotify.com/v1'

export const spotifyApi = {
  me: async () => {
    const response = await axios.get(`${API_URL}/me`, config)
    // FALLBACK USER IMAGE
    response.data.images[0] = response.data?.images[0]?.url
      ? response.data?.images[0]
      : { url: 'http://dissoftec.com/DefaultUserImage.png' }
    return response
  },
  topTracks: async () => {
    const mediumTermTracks = await axios.get(
      `${API_URL}/me/top/tracks?limit=50&time_range=medium_term`,
      config
    )

    const shortTermTracks = await axios.get(
      `${API_URL}/me/top/tracks?limit=50&time_range=short_term`,
      config
    )

    const totalTracks = mediumTermTracks.data.items.concat(
      shortTermTracks.data.items
    )

    // Remove duplicated tracks
    totalTracks.forEach((e: any, i: number) => {
      const isDuplicate =
        totalTracks.filter((x: any) => x.id == e.id).length > 1
      if (isDuplicate) {
        totalTracks.splice(i, 1)
      }
    })

    mediumTermTracks.data.items = totalTracks

    return mediumTermTracks
  },
  topArtists: async () => {
    const mediumTermArtists = await axios.get(
      `${API_URL}/me/top/artists?limit=50&time_range=medium_term`,
      config
    )

    const shortTermArtists = await axios.get(
      `${API_URL}/me/top/artists?limit=50&time_range=short_term`,
      config
    )

    const totalArtists = mediumTermArtists.data.items.concat(
      shortTermArtists.data.items
    )

    // Remove duplicated artists
    totalArtists.forEach((e: any, i: number) => {
      const isDuplicate =
        totalArtists.filter((x: any) => x.id == e.id).length > 1
      if (isDuplicate) {
        totalArtists.splice(i, 1)
      }
    })

    mediumTermArtists.data.items = totalArtists

    return mediumTermArtists
  },
  getArtistsGenres: async (artistsIds: string) => {
    const response = await axios.get(
      `${API_URL}/artists?ids=${artistsIds}`,
      config
    )
    return response
  }
}
