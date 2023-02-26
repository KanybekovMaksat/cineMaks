//import hooks
import { useState } from "react";


//import lib for routing
import { Link } from "react-router-dom";


//import styles
import "./index.css";


//import types for card props
import { CardProps } from "./card.interface";


//state management for add to favorite
import { RootState } from "../../../store";
import { useAppDispatch, useAppSelector } from "hooks/useReduxHooks";
import { toggleFavorite } from "store/slices/favoriteSlice";


//import mui component
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";


//function for determining movie title
const getMediaTitle = (media: CardProps): string => {
  return media.title || media.name || "";
};



const CardItem = (props: CardProps) => {

  //work with typescript dispatch
  const dispatch = useAppDispatch();


  //redux state for add to favorite pages
  const favorites = useAppSelector(
    (state: RootState) => state.favorites.movies
  );

  //function for liked in favorite pages
  const isFavorite = favorites.some((movie: any) => movie.id === props.id);


  //state for add to favorite pages
  const [isLiked, setIsLiked] = useState(isFavorite);


  //function for add to favorite pages
  const toggleLike = () => {
    setIsLiked(!isLiked);
    dispatch(toggleFavorite(props));
  };


  //function called gor movies title props
  const title = getMediaTitle(props);


  // object for concatenation props
  const { id, backdrop_path, vote_average } = props;

  return (
    <Card
      className="Card"
      sx={{ maxWidth: 345, maxHeight: 360 }}
      style={{ margin: "15px", backgroundColor: "#1976d2" }}
    >
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
      />
      <CardContent>
        <CardActions style={{ padding: "0", justifyContent: "space-between" }}>
          <Link to={`/movie/${id}`} className="Card-title">
            {title}
          </Link>
          <IconButton aria-label="add to favorites" onClick={toggleLike}>
            {isLiked ? (
              <FavoriteIcon style={{ color: "#E21221" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <div className="Card-rating-box">
            <span>{vote_average}</span>
          </div>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CardItem;
