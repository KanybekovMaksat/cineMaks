import { CardProps } from './../../components/molecules/Card/card.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from './fetchSlice';



interface FavoritesState {
  movies: Movie[];
}

const initialState: FavoritesState = {
  movies: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<CardProps>) => {
      const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
      if (index === -1) {
        state.movies.push(action.payload);
      } else {
        state.movies.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;