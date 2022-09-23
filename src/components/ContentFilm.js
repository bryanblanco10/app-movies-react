import React from "react";

export const ContentFilm = ({children}) => {
  return (
    <div className="page-single movie_list">
      <div className="container">
        <div className="row ipad-width2">
          {children}
        </div>
      </div>
    </div>
  );
};
