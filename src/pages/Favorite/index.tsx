import { useAppSelector } from 'hooks/useReduxHooks'; 
import { RootState } from '../../store';
import CardItem from '../../components/molecules/Card';
import { CardProps } from 'components/molecules/Card/card.interface';
import { Box } from '@mui/material'

const FavoriteMovies = () => {
  const favorites = useAppSelector((state: RootState) => state.favorites.movies);

  return (
    <div>
      <h1>Favorite Movies</h1>
    <Box display="flex"  flexWrap="wrap">
      {favorites.length === 0 ? (<p>Non</p>) : (favorites.map((movie: CardProps) => (
        <CardItem key={movie.id} {...movie} />
      )))}
    </Box>
    </div>
  );
};

export default FavoriteMovies;