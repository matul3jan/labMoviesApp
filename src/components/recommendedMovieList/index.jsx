import React from "react";
import { useQuery } from "react-query";

import MovieCard from "../movieCard";
import Spinner from "../spinner";
import AddToFavouritesIcon from "../cardIcons/addToFavourites";

import { getRecommendedMovies } from "../../api/apiFactory";
import { Typography } from "@mui/material";

const styles = {
  container: {
    overflowX: "scroll",
    display: "flex",
    flexDirection: "row",
  },
  card: {
    marginLeft: "20px",
    minWidth: "275px",
    maxWidth: "275px",
  },
};

const RecommendedMovieList = ({ movie }) => {
  const { isLoading, isError, error, data } = useQuery(
    ["recommended movies", movie],
    () => getRecommendedMovies(movie.id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div style={styles.container}>
      {data.length ? (
        data.map((m) => (
          <div key={m.id} style={styles.card}>
            <MovieCard
              movie={m}
              action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />;
              }}
            />
          </div>
        ))
      ) : (
        <Typography variant="subtitle2" padding={2}>
          Sorry, no recommendations for now !
        </Typography>
      )}
    </div>
  );
};

export default RecommendedMovieList;
