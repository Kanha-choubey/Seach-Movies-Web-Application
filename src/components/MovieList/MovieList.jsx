import React from "react";
import { Grid } from "@mui/material";
import useStyle from "./Styles";
import { Movie } from "..";

const MovieList = ({ movies }) => {
  const classes = useStyle();
  // console.log("movie list");
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
