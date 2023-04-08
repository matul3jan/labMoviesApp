import React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import { useFavourites } from "../../hooks/useFavorites";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  movieTitle: {
    color: "inherit",
  },
};

const MovieHeader = ({ movie }) => {
  const { data } = useFavourites();
  const favourites = data || [];
  const isFavourite = favourites.some((fav) => fav.movie_id === movie.id);

  return (
    <Paper sx={styles.root}>
      {isFavourite && (
        <Avatar sx={{ backgroundColor: "rgb(255, 0, 0)", margin: "10px" }}>
          <FavoriteIcon />
        </Avatar>
      )}
      <Typography variant="h5" component="span" align="center">
        {movie.title}
        <Typography variant="body2" align="center">
          <span>{`${movie.tagline}`} </span>
        </Typography>
      </Typography>
    </Paper>
  );
};

export default MovieHeader;
