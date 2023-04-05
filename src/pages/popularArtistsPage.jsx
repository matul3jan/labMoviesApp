import React, { useContext } from "react";
import { useQuery } from "react-query";

import Spinner from "../components/spinner";
import { ArtistsContext } from "../contexts/artistsContext";
import { getPopularArtists } from "../api/tmdb-api";
import ArtistListPageTemplate from "../components/templateArtistListPage";

const PopularArtistsPage = ({}) => {
  const { pageArtists, setPageArtists } = useContext(ArtistsContext);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["popular artists", pageArtists],
    () => getPopularArtists(pageArtists),
    { keepPreviousData: true }
  );

  if (isLoading || isFetching) return <Spinner />;

  if (isError) return <h1>{error.message}</h1>;

  const artists = data ? data.results : [];

  return (
    <ArtistListPageTemplate
      title="Popular artists"
      artists={artists}
      page={pageArtists}
      pageSetter={setPageArtists}
    />
  );
};

export default PopularArtistsPage;
