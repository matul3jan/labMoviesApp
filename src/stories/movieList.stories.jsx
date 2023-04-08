import React from "react";
import MovieList from "../components/movieList";
import { sampleMovie } from "./sampleData";
import { MemoryRouter } from "react-router";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@mui/material/Grid";
import MoviesContextProvider from "../contexts/moviesContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default {
  title: "Home Page/MovieList",
  component: MovieList,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const movies = [
    { ...sampleMovie, id: 1 },
    { ...sampleMovie, id: 2 },
    { ...sampleMovie, id: 3 },
    { ...sampleMovie, id: 4 },
    { ...sampleMovie, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <MovieList
        movies={movies}
        action={(movie) => <AddToFavouritesIcon movie={movie} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
