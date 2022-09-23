import React from "react";

export const CardMovie = ({ movie }) => {
  return (
    <div className="movie-item-style-2">
      <img src={movie.img} alt={movie.titulo + movie.fecha } />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">{movie.titulo}</a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{movie.calificacion}</span> /10
        </p>
        <p className="describe">{movie.descripcion}</p>
        <p className="run-time">
          {" "}
          Run Time: { movie.duracion }’ . <span>MMPA: PG-13 </span> .{" "}
          <span>Release: { movie.fecha }</span>
        </p>
        <p>
          Director: <a href="b">{movie.director}</a>
        </p>
        <p>
          Stars:{" "}
          {movie.actores.split(",").map((actor, index) => (
            <a key={actor + index } href="b">{actor} - </a>
          ))}
        </p>
      </div>
    </div>
  );
};
