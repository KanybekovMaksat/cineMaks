//import hooks
import { useEffect } from "react";


//import Card Component
import CardItem from "components/molecules/Card";

//import Card props types 
import { CardProps } from "components/molecules/Card/card.interface";


//import helpers for redux fetching data
import { useAppDispatch, useAppSelector } from "hooks/useReduxHooks";
import { RootState } from "../../../store";
import { fetchMovies } from "store/slices/fetchSlice";


//ts interface fo props
export interface ListProps {
  search?: string;
}


const MoviesList = ({ search = "" }: ListProps) => {
  
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: RootState) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies("http://localhost:4000/results"));
  }, [dispatch]);

  return (
    <>
      {movies
        .filter((movie: CardProps) =>
          movie.title?.toLowerCase().includes(search.toLowerCase())
        )
        .map((movie: CardProps) => (
          <CardItem key={movie.id} {...movie} />
        ))}
    </>
  );
};

export default MoviesList;
