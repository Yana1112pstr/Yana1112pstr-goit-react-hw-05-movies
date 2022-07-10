import React, { useState, useEffect } from "react";
import { lazy, Suspense } from 'react';
import s from "./HomePage.module.css";
import { fetchTrendingMovies } from "api/api";

const MoviesList = lazy(() => import("components/moviesList/MoviesList"));

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLading, setIsLoading] = useState(false);

  useEffect(() => {
      setIsLoading(true);
    fetchTrendingMovies().then(({ results }) => setMovies(results))
    .finally(setIsLoading(false))
  }, []);
//   console.log(movies);
  return (
    <div>
      <h1 className={s.title}> Trending today </h1>
      <Suspense fallback={isLading && <div>Loading...</div>}>
          {movies && <MoviesList movies={movies} />}
      </Suspense>
      
    </div>
  );
};

export default HomePage;
