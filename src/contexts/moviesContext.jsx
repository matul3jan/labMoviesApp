import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({});
  const [mustWatchMovies, setMustWatchMovies] = useState([]);
  const [pageMovies, setPageMovies] = useState(1);
  const [pageUpcomingMovies, setPageUpcomingMovies] = useState(1);

  const addReview = (movie, review) =>
    setMyReviews({ ...myReviews, [movie.id]: review });

  const addToMustWatchMovies = (movie) => {
    let updatedMustWatchMovies = [...mustWatchMovies];
    if (!mustWatchMovies.includes(movie.id)) {
      updatedMustWatchMovies.push(movie.id);
    }
    setMustWatchMovies(updatedMustWatchMovies);
  };

  const removeFromMustWatchMovies = (movie) =>
    setMustWatchMovies(mustWatchMovies.filter((mId) => mId !== movie.id));

  const isInMustWatchList = (movie) => mustWatchMovies.includes(movie.id);

  return (
    <MoviesContext.Provider
      value={{
        addReview,
        addToMustWatchMovies,
        removeFromMustWatchMovies,
        isInMustWatchList,
        pageMovies,
        setPageMovies,
        pageUpcomingMovies,
        setPageUpcomingMovies,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
