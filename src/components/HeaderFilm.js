import React from "react";

export const HeaderFilm = () => {
  return (
    <div className="hero common-hero common-hero1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="hero-ct">
            <h1> Listado de peliculas</h1>
            <ul className="breadcumb">
              <li>Bryan BV10</li>
            </ul>
            <ul className="breadcumb">
              <li className="margin-right">
                <button className="btn-header">Inicio</button>
              </li>
              <li>
                <button className="btn-header">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}