import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { movieActions, useAppDispatch, useAppSelector } from "../../redux";
import { useEffect } from "react";
import MovieListSkelleton from "./MovieListSkelleton";
import MovieCard from "./MovieCard.tsx";

const MovieList = () => {
  const dispatch = useAppDispatch();
  const movieState = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(movieActions.fetch());
  }, [dispatch]);

  if (movieState.error)
    return <Typography>{"Something went wrong :("}</Typography>;

  return (
    <>
      {movieState.movies ? (
        movieState.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <MovieListSkelleton />
      )}
    </>
  );
};

export default MovieList;
