import React, { useState } from "react";
import FilterCard from "../filterMoviesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

export const titleFilter = function (movie, value) {
  return movie.title.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = function (movie, value) {
  const genreId = Number(value);
  return genreId > 0 ? movie.genre_ids.includes(genreId) : true;
};

export const langFilter = function (movie, value) {
  return value !== "0" ? movie.original_language === value : true;
};

const styles = {
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 35,
    right: 25,
  },
};

const MovieFilterUI = ({
  onFilterValuesChange,
  onSortValuesChange,
  titleFilter,
  genreFilter,
  langFilter,
  currentSort,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={onFilterValuesChange}
          onUserSort={onSortValuesChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          langFilter={langFilter}
          currentSort={currentSort}
        />
      </Drawer>
    </>
  );
};

export default MovieFilterUI;
