import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import img from "../../images/film-poster-placeholder.png";

const styles = {
  media: {
    height: "200px",
  },
};

const CastCard = ({ title, subtitle, imagePath }) => {
  return (
    <Card>
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
