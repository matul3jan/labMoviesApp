import { useQuery } from "react-query";

import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Spinner from "../spinner";
import { getMovieImages } from "../../api/apiFactory";
import img from "../../images/film-poster-placeholder.png";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
};

const TemplateMoviePage = ({ movie, children }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }],
    () => getMovieImages(movie.id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters.slice(0, 4);

  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={styles.gridListRoot}>
            <ImageList cols={1}>
              {images.length ? (
                images.map((image) => (
                  <ImageListItem key={image.file_path} cols={1}>
                    <img
                      src={
                        image.file_path
                          ? `https://image.tmdb.org/t/p/w500/${image.file_path}`
                          : img
                      }
                      alt={image.poster_path}
                    />
                  </ImageListItem>
                ))
              ) : (
                <ImageListItem cols={1}>
                  <img src={img} />
                </ImageListItem>
              )}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;
