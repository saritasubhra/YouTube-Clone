import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RAPID_API_YOUTUBE_KEY =
  "60f5c46df1mshd3e3addcfaced07p1b3bc2jsn4634f2e91b18";
const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": RAPID_API_YOUTUBE_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export async function fetchVideos(url) {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
