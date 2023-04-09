import React, { useContext, useState } from "react";
import { useQuery } from "react-query";

import Spinner from "../components/spinner";
import MovieListPageTemplate from "../components/templateMovieListPage";
import useFiltering from "../hooks/useFiltering";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  langFilter,
} from "../components/movieFilterUI";

import { MoviesContext } from "../contexts/moviesContext";
import { getMovies } from "../api/tmdb-api";
import { applySortValues, applyFilterValues } from "../util";

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
const langFiltering = {
  name: "language",
  value: "0",
  condition: langFilter,
};

const HomePage = ({}) => {
  const [sortValue, setSortValue] = useState("title_ASC");
  const { pageMovies, setPageMovies } = useContext(MoviesContext);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["discover", pageMovies],
    () => getMovies(pageMovies),
    { keepPreviousData: true }
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering, langFiltering]
  );

  if (isLoading || isFetching) return <Spinner />;

  if (isError) return <h1>{error.message}</h1>;

  const handleChangeFilterValues = (...args) =>
    applyFilterValues(filterValues, setFilterValues, ...args);

  const movies = data ? data.results : [];

  const displayedMovies = applySortValues(sortValue, filterFunction(movies));

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
        onFilterValuesChange={handleChangeFilterValues}
        onSortValuesChange={setSortValue}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        langFilter={filterValues[2].value}
        currentSort={sortValue}
      />
    </>
  );
};

export default HomePage;
