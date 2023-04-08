import React from "react";
import MovieDetails from "../components/movieDetails";
import { sampleMovie } from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default {
  title: "Movie Details Page/MovieDetails",
  component: MovieDetails,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <MovieDetails movie={sampleMovie} />;

Basic.storyName = "Default";
