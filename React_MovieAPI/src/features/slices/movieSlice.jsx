import movieapi from'../../Components/movieapi'


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";







export const asyncMovie = createAsyncThunk("movies/asyncMovie", async () => {
    let apiKey = '896bcbd1'
    let movieex = 'naruto'
   
    const res = await movieapi.get(`?s=${movieex}&apikey=${apiKey}`).catch((error) => {
        console.log('error', error)
    })
    console.log(res.data)
    
    return res.data
  
})


const initialState = {
    movies: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState, 
    reducers: {addMovies: (state, {payload}) => {
    
        state.movies = payload
        
    }},
    extraReducers: {
        [asyncMovie.pending]: () => {
            console.log("pending ")
        },
        [asyncMovie.fulfilled]: (state, {payload}) => {
            console.log("fulfilled ")
            return {...state, movies: payload}
        },
        [asyncMovie.rejected]: () => {
            console.log("err wrong")
        }
    }
  
})

export const {addMovies} = movieSlice.actions
export const getMovies = state => state.movies.movies
export default movieSlice.reducer
console.log(movieSlice.actions)