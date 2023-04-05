import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import CastCard from "../castCard";

const styles = {
  root: {
    padding: "10px",
  },
};

const ArtistListPageTemplate = ({ artists, title, page, pageSetter }) => (
  <Grid container sx={styles.root}>
    <Grid item xs={12} marginBottom={2}>
      <Header title={title} page={page} pageSetter={pageSetter} />
    </Grid>
    <Grid item container spacing={3}>
      {artists.map((artist) => {
        const subtitle =
          artist.known_for
            .map((m) => m.title)
            .filter(Boolean)
            .join(", ") || "-";
        return (
          <Grid key={artist.id} item xs={12} sm={2} md={2} lg={2} xl={2}>
            <CastCard
              key={artist.id}
              imagePath={artist.profile_path}
              title={artist.name}
              subtitle={subtitle}
            />
          </Grid>
        );
      })}
    </Grid>
  </Grid>
);

export default ArtistListPageTemplate;
