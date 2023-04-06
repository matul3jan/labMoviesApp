import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import img from "../../images/film-poster-placeholder.png";
import { useNavigate } from "react-router-dom";

const styles = {
  media: {
    height: "200px",
  },
  card: {
    cursor: "pointer",
  },
};

const CastCard = ({ id, title, subtitle, imagePath }) => {
  const navigate = useNavigate();
  const openDetails = () => navigate(`/artists/${id}`);

  return (
    <Card onClick={openDetails} style={styles.card}>
      <CardMedia
        sx={styles.media}
        image={imagePath ? `https://image.tmdb.org/t/p/w500/${imagePath}` : img}
      />
      <CardContent>
        <Grid container>
          <Grid item>
            <Typography variant="subtitle2" component="p">
              {title}
            </Typography>
            <Typography noWrap variant="caption">
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CastCard;
