import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../movieList";

const styles = {
  root: {
    padding: "10px",
  },
};

function MovieListPageTemplate({ movies, title, action, page, pageSetter }) {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} page={page} pageSetter={pageSetter} />
      </Grid>
      <Grid item container spacing={4}>
        <MovieList action={action} movies={movies} />
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
