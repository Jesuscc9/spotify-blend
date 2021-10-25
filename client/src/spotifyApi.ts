import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("spotifyAuthToken");

const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

export const spotifyApi = {
  me: async () => {
    let response = await axios.get("https://api.spotify.com/v1/me", config);
		//FALLBACK USER IMAGE
    response.data.images[0] = response.data?.images[0]?.url ? response.data?.images[0] : { url: "http://dissoftec.com/DefaultUserImage.png" }
		return response;
  }, topTracks: async () => {
		const response = await axios.get("https://api.spotify.com/v1/me/top/tracks?limit=100", config)
		return response
	}
};
