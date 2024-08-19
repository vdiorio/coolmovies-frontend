import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type CreateStoreOptions = {
  epicDependencies?: EpicDependencies;
};

export type EpicDependencies = {
  client: ApolloClient<NormalizedCacheObject>;
};

export type Movie = {
  id: string;
  imgUrl: string;
  title: string;
  movieDirectorId: number;
  releaseDate: string;
};
