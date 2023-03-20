import React from 'react';
export default function MovieLists({movies}){
    return (
        <>
        <div id="flex">
        {movies?.map((movie, index) =>
        <div className="flex-columns">
            <h2>{movie.Title}</h2>
            <span>Type of movie: {movie.Type}</span>
            <br />
            <span>Year: {movie.Year}</span>
            <p>IMDbId: {movie.imdbID}</p>
            <img src={movie.Poster} alt="Poster james Bond movie"></img>
        </div>
        )}
        </div>

        </>
    )

};
