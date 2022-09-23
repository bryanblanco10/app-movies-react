import { CardMovie } from "./CardMovie";

export const ListMovies = ({ movies }) => {
  return (
    <>
      {movies?.map((movie) => (
        <CardMovie movie={movie} key={movie.id} />
      ))}
    </>
  );
}