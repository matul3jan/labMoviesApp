import React from "react";
import MovieCard from "../components/movieCard";
import { sampleMovie } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default {
  title: "Home Page/MovieCard",
  component: MovieCard,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <MovieCard
      movie={sampleMovie}
      action={(movie) => <AddToFavouritesIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...sampleMovie, poster_path: undefined };
  return (
    <MovieCard
      movie={sampleNoPoster}
      action={(movie) => <AddToFavouritesIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
