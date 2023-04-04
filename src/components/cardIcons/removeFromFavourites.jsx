import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../../contexts/moviesContext";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const RemoveFromFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromFavourites(movie);
  };

  return (
    <IconButton aria-label="remove from favorites" onClick={onUserRequest}>
      <DeleteOutlineOutlinedIcon color="primary" fontSize="medium" />
    </IconButton>
  );
};

export default RemoveFromFavouritesIcon;
