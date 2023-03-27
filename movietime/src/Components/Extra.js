import React, { useEffect, useState } from "react";

export default function Extra({id}) {
    const [movie, setMovie] = useState("");
    const getRequests = async () => {
        const URL = `http://www.omdbapi.com/?apikey=83cfc641&i=${id}`;
        const response = await fetch(URL);
        const responseJson = await response.json();
        console.log(responseJson);
        setMovie(responseJson);
        };
    useEffect(() => {
        getRequests();
    console.log(movie);

    }, [id])

    return (
        <>
        <div className="flex-columns">
            <h2>{movie.Title}</h2>
            <br />
            <img src={movie.Poster}></img>
            <br />
            <span><b>Director:</b> {movie.Director}</span>
            <br />
            <span><b>Plot:</b> {movie.Plot}</span>
            <br />
            <span><b>Actors:</b> {movie.Actors}</span>
            <p><b>Priser:</b> {movie.Awards}</p>
        </div>
        </>
    )
}