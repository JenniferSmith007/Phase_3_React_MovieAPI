import { Header } from "./header";
import { Link } from "react-router-dom";
import movieapi from "./movieapi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../features/slices/movieSlice";
import DisplayMovie from "./DisplayMovie";

export const Searchmovie = () => {
    let apiKey = '896bcbd1'
    let movieex = 'naruto'
    const dispatch = useDispatch()
useEffect(() => {

    const getMovie = async () => {
    const res = await movieapi.get(`?s=${movieex}&plot=short&apikey=${apiKey}`).catch((error) => {
            console.log('error', error)
        })
        dispatch(addMovies(res.data))
      console.log(res.data)  
      
    }
    getMovie()

}, [])







    return (
        <div>
               <Link to='/favoritemovies'className='favoritemovie-link'>favorite movies</Link>
            <Header/>
         <DisplayMovie/>
           <h1>hello</h1>
        </div>
    );
};

export default Searchmovie;