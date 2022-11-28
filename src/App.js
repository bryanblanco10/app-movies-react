import "./assets/css/style.css"
import {BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import { HeaderFilm } from "./components/HeaderFilm";
//Views
import { AllMovies } from "./views/AllMovies";
import { DetailMovie } from "./views/DetailMovie";

function App() {
  return (
    <BrowserRouter>
      <HeaderFilm />
      <Routes>
        <Route path="/" element={<AllMovies />} />
        <Route path="/detalle-pelicula/:id" element={<DetailMovie />} />
        <Route path="*" element={ <h4>Not found</h4> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
