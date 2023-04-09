import { useQueries } from "react-query";

import PageTemplate from "../components/templateMovieListPage";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { titleFilter } from "../components/movieFilterUI";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

import { useFavourites } from "../hooks/useFavorites";
import { useEffect, useState } from "react";
import { applySortValues } from "../util";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};

const genreFiltering = {
  name: "genre",
  value: "0",
  condition: function (movie, value) {
    // Is user selected genre in this movies's genre list?
    // Always true if selected genre ia All (0).
    const genreId = Number(value);
    const genre_ids = movie.genres.map((g) => g.id);
    return genreId > 0 ? genre_ids.includes(genreId) : true;
  },
};

const FavouriteMoviesPage = () => {
  const [sortValue, setSortValue] = useState("title_ASC");
  const { data, isLoading, refetch } = useFavourites();

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  useEffect(() => {
    refetch();
  }, []);

  const favourites = data || [];
  // Create an array of queries and run them in parallel.
  const allQueries = useQueries(
    favourites.map((fav) => ({
      queryKey: ["movie", { id: fav.movie_id }],
      queryFn: getMovie,
    }))
  );

  // Check if any of the parallel queries is still loading.
  const isMovieLoading = allQueries.find((m) => m.isLoading === true);

  if (isLoading || isMovieLoading) return <Spinner />;

  const allFavourites = allQueries.map((q) => q.data);

  const displayedMovies = applySortValues(
    sortValue,
    filterFunction(allFavourites)
  );

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
      <PageTemplate
        title="Favourite Movies"
        movies={displayedMovies}
        action={(movie) => {
          return (
            <span>
              <WriteReview movie={movie} />
              <RemoveFromFavourites movie={movie} />
            </span>
          );
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        onSortValuesChange={setSortValue}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        currentSort={sortValue}
      />
    </>
  );
};

export default FavouriteMoviesPage;
