import React from "react";
import { Route, Routes } from "react-router-dom";
import TemplateArtistPage from "../components/templateArtistPage";
import { sampleArtist } from "./sampleData";
import { MemoryRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default {
  title: "Artist Page/ArtistDetails",
  component: TemplateArtistPage,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
    (Story) => (
      <MemoryRouter initialEntries={[`/artists/${sampleArtist.id}`]}>
        <Routes>
          <Route path="/artists/:id" element={<Story />}></Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export const Basic = () => <TemplateArtistPage />;

Basic.storyName = "Default";
