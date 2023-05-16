import React, { useState } from "react";
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

import img from "../../images/film-poster-placeholder.png";
import { useFavourites } from "../../hooks/useFavorites";
import { toReadableDate } from "../../util";

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
  const { data } = useFavourites();
  const [raised, setRaised] = useState(false);
  const toggleRaised = () => setRaised(!raised);
  const openDetails = (e) => {
    if (e.target instanceof SVGElement) return;
    navigate(`/movies/${movie.id}`);
  };

  const favourites = data || [];
  movie.favourite = favourites.some((fav) => fav === movie.id);
  movie.release_date_full = toReadableDate(movie.release_date);

  return (
    <Card
      onMouseOver={toggleRaised}
      onMouseOut={toggleRaised}
      style={styles.raised}
      raised={raised}
      elevation={raised ? 24 : 0}
      onClick={openDetails}
    >
      <CardHeader
        avatar={
          movie.favourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon fontSize="16px" />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="body1" component="p" noWrap>
            {movie.title}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent sx={styles.card}>
        <Grid container sx={styles.card.container}>
          <Grid item xs={5}>
            <Typography variant="body2" component="p">
              <CalendarIcon fontSize="" />
              <span style={styles.footer}>{movie.release_date_full}</span>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              <span style={styles.footer}>
                {movie.vote_average?.toFixed(1)}
              </span>
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
