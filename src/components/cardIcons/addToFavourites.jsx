import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAddToFavourites } from "../../hooks/useFavorites";
import { useFavourites } from "../../hooks/useFavorites";

const AddToFavouritesIcon = ({ movie, page = "" }) => {
  const { mutate, isSuccess } = useAddToFavourites(movie);
  const { refetch } = useFavourites();
  const { addToMustWatchMovies, removeFromMustWatchMovies, isInMustWatchList } =
    useContext(MoviesContext);

  useEffect(() => {
    refetch();
  }, [isSuccess]);

  const onUserSelect = async (e) => {
    e.preventDefault();
    mutate();
  };

  const onAddPlaylist = (e) => {
    e.preventDefault();
    addToMustWatchMovies(movie);
  };

  const onRemovePlaylist = (e) => {
    e.preventDefault();
    removeFromMustWatchMovies(movie);
  };

  if (page === "upcoming") {
    return isInMustWatchList(movie) ? (
      <IconButton aria-label="remove from mustwatch" onClick={onRemovePlaylist}>
        <PlaylistAddCheckCircleIcon color="error" fontSize="large" />
      </IconButton>
    ) : (
      <IconButton aria-label="add to mustwatch" onClick={onAddPlaylist}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  }

  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
