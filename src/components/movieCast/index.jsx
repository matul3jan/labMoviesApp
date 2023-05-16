import React from "react";
import { useQuery } from "react-query";

import Spinner from "../spinner";
import { getMovieCast } from "../../api/apiFactory";
import CastCard from "../castCard";

const styles = {
  container: {
    overflowX: "scroll",
    display: "flex",
    flexDirection: "row",
  },
  card: {
    marginLeft: "20px",
    minWidth: "170px",
  },
};

const MovieCastList = ({ movie }) => {
  const { isLoading, isError, error, data } = useQuery(
    ["movie cast", movie],
    () => getMovieCast(movie.id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div style={styles.container}>
      {data.map((cast, index) => (
        <div key={index + "-" + cast.id} style={styles.card}>
          <CastCard
            id={cast.id}
            imagePath={cast.profile_path}
            title={cast.name}
            subtitle={cast.character}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCastList;
