import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import useRemoveFromFavourites from "../../hooks/useRemoveFromFavourite";
import useFavourites from "../../hooks/useFavorites";

const RemoveFromFavouritesIcon = ({ movie }) => {
  const { mutate, isSuccess } = useRemoveFromFavourites(movie);
  const { refetch } = useFavourites();

  useEffect(() => {
    refetch();
  }, [isSuccess]);

  const onUserRequest = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <IconButton aria-label="remove from favorites" onClick={onUserRequest}>
      <DeleteOutlineOutlinedIcon color="primary" fontSize="medium" />
    </IconButton>
  );
};

export default RemoveFromFavouritesIcon;
