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
    //FALLBACK USER IMAGE
    response.data.images[0] = response.data?.images[0]?.url
      ? response.data?.images[0]
      : { url: 'http://dissoftec.com/DefaultUserImage.png' }
    return response
  },
  topTracks: async () => {
    const response = await axios.get(
      `${API_URL}/me/top/tracks?limit=50`,
      config
    )
    return response
  },
  topArtists: async () => {
    const response = await axios.get(
      `${API_URL}/me/top/artists?limit=50`,
      config
    )
    return response
  },
  getArtistsGenres: async (artistsIds: string) => {
    const response = await axios.get(
      `${API_URL}/artists?ids=${artistsIds}`,
      config
    )
    return response
  }
}
