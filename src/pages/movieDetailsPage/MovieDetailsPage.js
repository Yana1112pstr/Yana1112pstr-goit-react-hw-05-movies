import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByID } from 'api/api';
import MovieCard from 'components/movieCard/MovieCard';
import ButtonGoBack from 'components/buttonGoBack/ButtonGoBack';

function MovieDetailsPage() {

    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMoviesByID(movieId).then(data => setMovie(data))
    }, [movieId])

    // console.log(movie);

    
    return (
        <div>
            {/* <Link to="/">Go back</Link> */}
            <ButtonGoBack/>
            {movie && <MovieCard movie={movie} />}
        </div>
    );
};

export default MovieDetailsPage;