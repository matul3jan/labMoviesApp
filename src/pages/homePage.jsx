import React, { useContext } from "react";
import { useQuery } from "react-query";

import Spinner from "../components/spinner";
import MovieListPageTemplate from "../components/templateMovieListPage";
import useFiltering from "../hooks/useFiltering";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";

import { MoviesContext } from "../contexts/moviesContext";
import { getMovies } from "../api/tmdb-api";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const HomePage = ({}) => {
  const { pageMovies, setPageMovies } = useContext(MoviesContext);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["discover", pageMovies],
    () => getMovies(pageMovies),
    { keepPreviousData: true }
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  if (isLoading || isFetching) return <Spinner />;

  if (isError) return <h1>{error.message}</h1>;

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  return (
    <>
      <MovieListPageTemplate
        title="Discover Movies"
        movies={displayedMovies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />;
        }}
        page={pageMovies}
        pageSetter={setPageMovies}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default HomePage;
