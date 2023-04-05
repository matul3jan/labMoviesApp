import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    "& > * + *": {
      marginLeft: 2,
    },
    height: "100vh",
    alignItems: "center",
  },
};

export default function CircularIndeterminate() {
  return (
    <div style={styles.root}>
      <CircularProgress />
    </div>
  );
}
