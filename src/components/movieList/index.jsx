import React from "react";
import MovieCard from "../movieCard";
import Grid from "@mui/material/Grid";

const MovieList = ({ movies, action }) => {
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <MovieCard key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default MovieList;
