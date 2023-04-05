import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  movieTitle: {
    color: "inherit",
  },
};

const MovieHeader = (props) => {
  const movie = props.movie;
  const movies = JSON.parse(localStorage.getItem("favourites")) || [];
  const isFavourite = movies.find((m) => m.id === movie.id);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      {isFavourite ? (
        <Avatar sx={{ backgroundColor: "rgb(255, 0, 0)" }}>
          <FavoriteIcon />
        </Avatar>
      ) : null}
      <Typography variant="h5" component="h3" align="center">
        <a href={movie.homepage} target="_blank" style={styles.movieTitle}>
          {movie.title}
        </a>
        <Typography variant="body2" align="center">
          <span>{`${movie.tagline}`} </span>
        </Typography>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
