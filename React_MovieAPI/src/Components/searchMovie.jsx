import { Header } from "./header";
import { Link } from "react-router-dom";
import movieapi from "./movieapi";
import { useEffect } from "react";

export const Searchmovie = () => {
useEffect(() => {
    let apiKey = '896bcbd1'
    let movieex = 'naruto'
    const getMovie = async () => {
    const res = await movieapi.get(`?s=${movieex}&plot=short&apikey=${apiKey}`).catch((error) => {
            console.log('error', error)
        })
      console.log(res)  
    }
    getMovie()

}, [])







    return (
        <div>
               <Link to='/favoritemovies'className='favoritemovie-link'>favorite movies</Link>
            <Header/>
         
           <h1>hello</h1>
        </div>
    );
};

export default Searchmovie;