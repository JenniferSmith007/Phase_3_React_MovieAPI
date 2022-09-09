import React from 'react';
import { useSelector } from 'react-redux';
import { getMovies } from '../features/slices/movieSlice';
import MoviesDisplayed from './MoviesDisplayed';



const DisplayMovie = () => {
    const movies = useSelector(getMovies)
    console.log(movies)

    let display =""
    display = movies.Response
    === "True" ? (movies.Search.map((movie,index) => {return <MoviesDisplayed key={index} data={movie}/>}) ) : 
    (<div className="movies_err">{movies.Error}</div>)
    console.log(display)



    return (
        <div className='wrapper'>
        <div className='displayy'>
           
    {display}
    </div>
        </div>
    );
};

export default DisplayMovie;