import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Typography from "@mui/material/Typography";

import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import RecommendedMovieList from "../recommendedMovieList";
import MovieCastList from "../movieCast";
import SimilarMovieList from "../similarMovieList";
import { toReadableLanguage } from "../../util";
import { LanguageOutlined } from "@mui/icons-material";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 2,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 85,
    right: 20,
  },
  content: {
    whiteSpace: "pre-line",
    padding: "0px 1.2em 1.2em 1.2em",
    textAlign: "justify",
  },
};

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <br />
      <Paper>
        <Typography variant="h6" component="h6" padding={2}>
          Overview
        </Typography>
        <Typography
          variant="body2"
          component="p"
          padding={2}
          style={styles.content}
        >
          {movie.overview || "-"}
        </Typography>
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={styles.chipLabel} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<AccessTimeIcon />}
          label={`${movie.runtime} min.`}
          sx={styles.chipLabel}
        />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
          sx={styles.chipLabel}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
          sx={styles.chipLabel}
        />
        <Chip
          icon={<CalendarMonthIcon />}
          label={movie.release_date}
          sx={styles.chipLabel}
        />
        <Chip
          icon={<LanguageOutlined />}
          label={toReadableLanguage(movie.original_language)}
          sx={styles.chipLabel}
        />
      </Paper>

      <Paper>
        <Typography variant="h6" component="h6" padding={2}>
          Cast
        </Typography>
        <MovieCastList movie={movie} />
      </Paper>

      <br />

      <Paper>
        <Typography variant="h6" component="h6" padding={2}>
          Similar movies
        </Typography>
        <SimilarMovieList movie={movie} />
      </Paper>

      <br />

      <Paper>
        <Typography variant="h6" component="h6" padding={2}>
          Recommended movies
        </Typography>
        <RecommendedMovieList movie={movie} />
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};

export default MovieDetails;
