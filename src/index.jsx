import React from "react";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Auth from "./auth/Auth";
import Account from "./auth/Account";

import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import ArtistsContextProvider from "./contexts/artistsContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import PopularArtistsPage from "./pages/popularArtistsPage";
import TemplateArtistPage from "./components/templateArtistPage";
import { getToken, setToken, setUser } from "./api/apiClient";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(Boolean(getToken()));

  const setDefaultHeaders = ({ token, user }) => {
    setToken(token);
    setUser(user);
    setLoggedIn(true);
  };

  return !loggedIn ? (
    <Auth setDefaultHeaders={setDefaultHeaders} />
  ) : (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <ArtistsContextProvider>
          <MoviesContextProvider>
            <Routes>
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route
                path="/movies/favourites"
                element={<FavouriteMoviesPage />}
              />
              <Route path="/account" element={<Account />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/artists/popular" element={<PopularArtistsPage />} />
              <Route path="/artists/:id" element={<TemplateArtistPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
        </ArtistsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
