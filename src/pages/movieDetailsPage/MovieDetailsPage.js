import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesByID } from "api/api";
import { lazy, Suspense } from "react";

const MovieCard = lazy(() => import("components/movieCard/MovieCard"));
const ButtonGoBack = lazy(() => import("components/buttonGoBack/ButtonGoBack"));

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesByID(movieId).then((data) => setMovie(data));
  }, [movieId]);

  // console.log(movie);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ButtonGoBack />
        {movie && <MovieCard movie={movie} />}
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
