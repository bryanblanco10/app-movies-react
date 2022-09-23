// import data from "../films.json";
import axios from "axios";

export const getFilms = async (page, limit) => {
  // const config = {
  //   headers: {
  //     Accept: 'application/json',
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //     "Content-Type": "application/json",
  //   },
  // };
  const response = await axios.get(`list_movies.json?page=${page}&limit=${limit}`);
  return response;
}