import React from "react";
import { Typography, Box } from "@mui/material";
import useStyle from "./Styles";
import { Movie } from "..";

const RatedCards = ({ title, data }) => {
  const classes = useStyle();
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.i} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
