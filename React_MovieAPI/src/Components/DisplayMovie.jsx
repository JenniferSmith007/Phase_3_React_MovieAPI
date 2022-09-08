import React from 'react';
import { useSelector } from 'react-redux';
import { getMovies } from '../features/slices/movieSlice';
import MoviesDisplayed from './MoviesDisplayed';



const DisplayMovie = () => {
    const movies = useSelector(getMovies)
    console.log(movies)
//    let display = movies.Search
//     console.log(display)
//     let render = ""
//     render = display.map((movie, index) => { <MoviesDisplayed data={movie} key={index}/>})
//     console.log('this is render', render)
    let display =""
    display = movies.Response === "True" ? (movies.Search.map((movie,index) => { return <MoviesDisplayed key={index} data={movie}/>}) ) : 
    (<div className="movies_err">{movies.Error}</div>)
    

    return (
        <div className='displayy'>
            <h1>Movies</h1>
    {display}
   
        </div>
    );
};

export default DisplayMovie;