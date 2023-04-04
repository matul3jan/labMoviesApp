import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const WriteReviewIcon = ({ movie }) => {
  return (
    <Link to={"/reviews/form"} state={{ movieId: movie.id }}>
      <IconButton aria-label="remove from favorites">
        <EditOutlinedIcon color="primary" fontSize="medium" />
      </IconButton>
    </Link>
  );
};

export default WriteReviewIcon;
