import { useQuery } from "react-query";

import Grid from "@mui/material/Grid";
import Spinner from "../spinner";
import { getArtistDetails } from "../../api/tmdb-api";
import { useParams } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import img from "../../images/film-poster-placeholder.png";

const styles = {
  container: {
    padding: "15px",
  },
  content: {
    whiteSpace: "pre-line",
    padding: "0px 1.2em 1.2em 1.2em",
    textAlign: "justify",
  },
  pob: {
    float: "right",
    padding: "0.6em",
    fontStyle: "italic",
  },
  name: {
    marginBottom: "1em",
    padding: "1em",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};

const TemplateArtistPage = ({}) => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ["artist details", id],
    () => getArtistDetails(id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  data.genderFull = data.gender === 1 ? "Female" : "Male";

  const info = [
    {
      title: "Known for",
      subtitle: "known_for_department",
    },
    {
      title: "Gender",
      subtitle: "genderFull",
    },
    {
      title: "Birthdate",
      subtitle: "birthday",
    },
    {
      title: "Place of Birth",
      subtitle: "place_of_birth",
    },
  ];

  return (
    <>
      <Grid container spacing={5} style={styles.container}>
        <Grid item xs={3}>
          <img
            width="100%"
            src={
              data.profile_path
                ? `https://image.tmdb.org/t/p/w500/${data.profile_path}`
                : img
            }
            alt={data.profile_path}
          />
        </Grid>
        <Grid item xs={9}>
          <Paper style={styles.name}>
            <Typography variant="h6" component="h6" noWrap>
              {data.name}
              <Typography variant="caption" component="span" style={styles.pob}>
                {data.place_of_birth || "-"}
              </Typography>
            </Typography>
          </Paper>
          <Paper>
            <Typography variant="h6" component="h6" padding={2}>
              Biography
            </Typography>
            <Typography variant="body2" style={styles.content} component="p">
              {data.biography || "-"}
            </Typography>
          </Paper>

          <br />

          <Paper style={{ display: "flex" }}>
            {info.map(({ title, subtitle }) => (
              <Typography
                key={title}
                variant="h6"
                component="h6"
                padding={2}
                marginRight={5}
              >
                {title}
                <Typography variant="subtitle2" component="div">
                  {data[subtitle] || "-"}
                </Typography>
              </Typography>
            ))}
          </Paper>

          <br />

          <Paper>
            <Typography variant="h6" component="h6" padding={2}>
              Also known as <br />
              {data.also_known_as.length
                ? data.also_known_as.map((name) => (
                    <Typography
                      key={name}
                      variant="subtitle2"
                      component="span"
                      paddingRight={5}
                    >
                      {name}
                    </Typography>
                  ))
                : "-"}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateArtistPage;
