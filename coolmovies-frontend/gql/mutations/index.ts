import { gql } from "@apollo/client";

export const CREATE_MOVIE_REVIEW = gql`
  mutation CreateMovieReview(
    $title: String!
    $body: String!
    $rating: Int!
    $movieId: UUID!
    $userReviewerId: UUID!
  ) {
    createMovieReview(
      input: {
        movieReview: {
          title: $title
          body: $body
          rating: $rating
          movieId: $movieId
          userReviewerId: $userReviewerId
        }
      }
    ) {
      movieReview {
        id
        title
        body
        rating
        movieByMovieId {
          title
        }
        userByUserReviewerId {
          name
        }
      }
    }
  }
`;

export const EDIT_MOVIE_REVIEW = gql`
  mutation EditMovieReview(
    $id: UUID!
    $nodeId: ID!
    $title: String
    $body: String
    $rating: Int
  ) {
    updateMovieReview(
      input: {
        nodeId: $nodeId
        movieReviewPatch: {
          id: $id
          title: $title
          body: $body
          rating: $rating
        }
      }
    ) {
      movieReview {
        id
        title
        body
        rating
        movieByMovieId {
          title
        }
        userByUserReviewerId {
          name
        }
      }
    }
  }
`;
