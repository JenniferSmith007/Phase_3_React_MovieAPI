import { Header } from "./header";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import DisplayMovie from "./DisplayMovie";
import {asyncMovie} from '../features/slices/movieSlice'

export const Searchmovie = () => {
   
   
    const dispatch = useDispatch()
useEffect(() => {
dispatch(asyncMovie())

}, [dispatch])







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