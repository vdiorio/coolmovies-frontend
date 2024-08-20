import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { movieActions, useAppDispatch, useAppSelector } from "../../../redux";
import { useEffect } from "react";
import MovieListSkelleton from "../MovieListSkelleton";
import MovieCard from "../MovieCard";

const MovieList: NextPage = () => {
  const dispatch = useAppDispatch();
  const movieState = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(movieActions.fetch());
  }, [dispatch]);

  if (movieState.error)
    return (
      <Typography data-testid="error-message">
        {"Something went wrong :("}
      </Typography>
    );

  return (
    <>
      {movieState.movies ? (
        movieState.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} data-testid="movie-card" />
        ))
      ) : (
        <MovieListSkelleton data-testid="loading-skeleton" />
      )}
    </>
  );
};

export default MovieList;
