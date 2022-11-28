// import data from "../films.json";
import axios from "axios";

export const getFilms = async (page, limit) => {

  const response = await axios.get(`list_movies.json?page=${page}&limit=${limit}`);
  return response;
}