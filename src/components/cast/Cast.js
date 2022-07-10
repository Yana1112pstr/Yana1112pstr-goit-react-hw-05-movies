import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "api/api";
import s from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then((res) => setActors(res.cast));
  }, [movieId]);

  return (
    <>
      <ul>
        {actors &&
          actors.map((actor) => {
            const { id, profile_path, name, character } = actor;
            if (profile_path === null) {
              return <div key={id}></div>;
            }
            return (
              <li key={id}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={id}
                    className={s.imgBox}
                  />
                </div>
                <p className={s.castName}>{name}</p>
                <p>{`Character: ${character}`}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
