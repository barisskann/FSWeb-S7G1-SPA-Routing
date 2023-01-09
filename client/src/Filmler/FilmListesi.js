import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function FilmListesi(props) {
  let { setİd, id } = props;

  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <FilmDetayları setİd={setİd} key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  const [pathName, setPathName] = useState(window.location.pathname);

  const { setİd } = props;
  const handleClick = () => {
    setİd(props.movie.id);
    window.history.pushState({}, "", props.movie.id);
    setPathName(props.movie.id);
  };

  const { title, director, metascore } = props.movie;
  return (
    <NavLink
      to={"/" + props.movie.id}
      className="movie-card"
      onClick={handleClick}
    >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </NavLink>
  );
}
