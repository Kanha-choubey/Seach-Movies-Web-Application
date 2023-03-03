import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB.js";
import { MovieList } from "..";
import { display } from "@mui/system";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alingItems="center">
        <CircularProgress />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alingItems="center" mt="20px">
        <Typography variant="h5">
          No movie that match that name
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }
  if (error) return "An error has occured.";
  // console.log(data);
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
