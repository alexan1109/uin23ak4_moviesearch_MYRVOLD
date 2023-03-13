import {useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

const URL = `http://www.omdbapi.com/?apikey=83cfc641&s="James+Bond"`;
function App() {
    const[movies, setMovies] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                //console.log(json);
            })
        }
        fetchData();
    }, []);
}


export default App;
