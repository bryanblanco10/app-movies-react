import React, { useState, useEffect } from "react";
// Service
import { getFilms } from "./services/getFilms";
//Components
import { HeaderFilm } from "./components/HeaderFilm";
import { ContentFilm } from "./components/ContentFilm";
import { Preload } from "./components/Preload";
import { ListMovies } from "./components/ListMovies";
import { TopBarFilter } from "./components/TopBarFilter";
import { SidebarMovie } from "./components/SidebarMovie";

function App() {
  const pages = [1, 2, 3, 4, 5];
  const optionSelect = [5, 10, 15, 20];
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    loadFilms(page, limit);
  }, [page, limit]);

  const loadFilms = async (page, limit) => {
    try {
      setBusy(true);
      const {
        data: { data },
      } = await getFilms(page, limit);
      console.log(data);
      const movies = [];

      data.movies.forEach((el) => {
        movies.push({
          titulo: el.title_long,
          calificacion: el.rating,
          director: "Joss Whedon",
          actores: "Robert Downey Jr., Chris Evans, Chris Hemsworth",
          img: el.large_cover_image,
          descripcion: el.synopsis,
          fecha: el.year,
          url: el.url,
          duracion: el.runtime,
          id: el.id,
        });
      });
      setMovies(movies);
    } catch (error) {
      console.log("Error inesperado", error);
    } finally {
      setBusy(false);
    }
  };

  const onChangePage = (newPage) => {
    setPage(newPage);
  };

  const onChangeLimit = (newLimit) => {
    setLimit(newLimit);
  };

  return (
    <>
      <HeaderFilm />
      {isBusy && <Preload />}
      <ContentFilm>
        <div className="col-md-8 col-sm-12 col-xs-12">
          <ListMovies movies={movies} />
          <TopBarFilter
            pages={pages}
            page={page}
            optionSelect={optionSelect}
            onChangePage={onChangePage}
            onChangeLimit={onChangeLimit}
          />
        </div>
        <SidebarMovie />
      </ContentFilm>
    </>
  );
}

export default App;
