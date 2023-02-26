import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


export interface Movie {
    id: number;
    title?: string;
    name?: string;
    backdrop_path: string;
    vote_average: number;
}

interface MoviesState {
  movies: Movie[]
  loading: boolean
  error: string | null
}


const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null
}


export const fetchMovies = createAsyncThunk('movies', async (url: string) => {
  const response = await axios.get(url);

  return response.data.map((movie: any) => ({
    id: movie.id,
    title: movie.title || movie.name,
    backdrop_path: movie.backdrop_path,
    vote_average: movie.vote_average,
  }));
});



const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchMovies.pending, (state) => {
          state.loading = true
          state.error = null
        })
        .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
          state.loading = false
          state.movies = action.payload
        })
        .addCase(fetchMovies.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message ?? 'Something went wrong.'
        })
    },
  })
  
  export default moviesSlice.reducer;