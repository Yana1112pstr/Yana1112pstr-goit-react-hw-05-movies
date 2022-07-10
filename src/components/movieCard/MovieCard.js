import React from "react";
import s from "./MovieCard.module.css";
import { Link, Outlet } from "react-router-dom";

function MovieCard({ movie }) {
  const { release_date, poster_path, overview, title, vote_average, genres } =
    movie;

  const release =
    release_date[0] + release_date[1] + release_date[2] + release_date[3];

  return (
    <>
      <div className={s.movieCard}>
        <div className={s.movieBlock}>
          <img
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
            alt={title}
            className={s.img}
          />
        </div>
        <div className={s.movieBlock}>
          <h2 className={s.title}>
            {title}
            <br/>
            {release}
          </h2>
          <p className={s.userScore}>User Score: {vote_average}</p>
          <p className={s.littleTitle}>Overview:</p>
          <p>{overview}</p>
          <p className={s.littleTitle}>Genres:</p>
          <ol>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ol>
        </div>
      </div>
      <div>
        <Link to="cast" style={{ padding: "10px" }}>Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default MovieCard;
