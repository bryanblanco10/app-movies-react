import axios from "axios";

export const getFilm = async (id) => {
  const response = await axios.get(`https://yts.torrentbay.to/api/v2/movie_details.json?movie_id=${id}`);
  return response;
}