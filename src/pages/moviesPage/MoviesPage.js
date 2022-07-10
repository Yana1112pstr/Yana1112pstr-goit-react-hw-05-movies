import { fetchSearchMovies } from "api/api";
import MoviesList from "components/moviesList/MoviesList";
import SearchForm from "components/searchForm/SearchForm";
import React, { useState, useEffect } from "react";

const MoviesPage = () => {

        const [searchQuery, setSearchQuery] = useState(null);
        const [movies, setMovies] = useState(null);

        useEffect(() => {
            searchQuery &&
                fetchSearchMovies(searchQuery).then((res) => setMovies(res.results))
        }, [searchQuery])

        console.log(movies)

        const handleChangeQuery = (query) => {
            setSearchQuery(query);
          };

    return (
        <div>
            <SearchForm onSubmit={handleChangeQuery}/>
            {movies && <MoviesList movies={movies}/>}
        </div>
    );
}

export default MoviesPage;