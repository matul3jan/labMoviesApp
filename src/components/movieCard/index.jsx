import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

import { MoviesContext } from "../../contexts/moviesContext";
import img from "../../images/film-poster-placeholder.png";

const styles = {
  card: {
    padding: "0px",
    margin: "0px",
    paddingBottom: "0px!important",
    container: {
      alignItems: "center",
      textAlign: "end",
    },
  },
  media: { height: "350px" },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
    height: "25px",
    width: "25px",
  },
  footer: {
    marginLeft: 10,
  },
  raised: {
    cursor: "pointer",
  },
};

export default function MovieCard({ movie, action }) {
  const navigate = useNavigate();
  const { favourites } = useContext(MoviesContext);
  const [raised, setRaised] = useState(false);
  const toggleRaised = () => setRaised(!raised);
  const openDetails = () => navigate(`/movies/${movie.id}`);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false;
  }

  return (
    <Card
      onMouseOver={toggleRaised}
      onMouseOut={toggleRaised}
      style={raised ? styles.raised : null}
      raised={raised}
      elevation={raised ? 24 : 0}
    >
      <CardHeader
        sx={styles.header}
        style={{ justifyContent: "right", display: "flex" }}
        avatar={
          movie.favourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon fontSize="16px" />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="body1" component="p" noWrap={true}>
            {movie.title}
          </Typography>
        }
        onClick={openDetails}
      />
      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
        onClick={openDetails}
      />
      <CardContent sx={styles.card}>
        <Grid container sx={styles.card.container}>
          <Grid item xs={5} onClick={openDetails}>
            <Typography variant="body1" component="p">
              <CalendarIcon fontSize="" />
              <span style={styles.footer}>{movie.release_date}</span>
            </Typography>
          </Grid>
          <Grid item xs={3} onClick={openDetails}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              <span style={styles.footer}>{movie.vote_average.toFixed(1)}</span>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            {action(movie)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
