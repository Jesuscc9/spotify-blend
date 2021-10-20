import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("spotifyAuthToken");

const config = {
	headers: {
		Authorization: "Bearer " + token,
	},
}

export const spotifyApi = {
	me: async () => {
		return await axios.get("https://api.spotify.com/v1/me", config)
	}
}