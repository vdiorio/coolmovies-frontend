import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type CreateStoreOptions = {
  epicDependencies?: EpicDependencies;
};

export type EpicDependencies = {
  client: ApolloClient<NormalizedCacheObject>;
};

export type MovieDirector = {
  age: number;
  id: string;
  name: string;
};

export type Movie = {
  id: string;
  imgUrl: string;
  title: string;
  movieDirectorByMovieDirectorId: MovieDirector;
  releaseDate: string;
  movieReviewsByMovieId?: { nodes: { rating: number }[] };
};

export type Review = {
  id: string;
  title: string;
  body: string;
  rating: number;
  movieId: string;
  nodeId: number;
  userByUserReviewerId: { id: string; name: string };
};
