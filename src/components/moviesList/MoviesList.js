import React from "react";
import s from "./MoviesList.module.css";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {

  return (
    <ul className={s.list}>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} className={s.link}>
            {title}
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;