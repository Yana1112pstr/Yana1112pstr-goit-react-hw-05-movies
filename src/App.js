import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "components/layout/Layout";
import HomePage from "pages/homePage/HomePage";
import MovieDetailsPage from "pages/movieDetailsPage/MovieDetailsPage";
import Reviews from "components/reviews/Reviews";
import Cast from "components/cast/Cast";
import MoviesPage from "pages/moviesPage/MoviesPage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage/>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage/>} > 
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
          <Route path="*" element={<Navigate to='/' />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
