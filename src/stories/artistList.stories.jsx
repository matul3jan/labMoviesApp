import React from "react";
import ArtistListPageTemplate from "../components/templateArtistListPage";
import { sampleArtist } from "./sampleData";
import { MemoryRouter } from "react-router";
import Grid from "@mui/material/Grid";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default {
  title: "Artist Page/ArtistList",
  component: ArtistListPageTemplate,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  const artists = [
    { ...sampleArtist, id: 1 },
    { ...sampleArtist, id: 2 },
    { ...sampleArtist, id: 3 },
    { ...sampleArtist, id: 4 },
    { ...sampleArtist, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <ArtistListPageTemplate artists={artists} />
    </Grid>
  );
};
Basic.storyName = "Default";
