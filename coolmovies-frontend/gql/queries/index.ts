import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query AllMovieReviews {
    allMovies {
      nodes {
        id
        imgUrl
        title
        movieDirectorId
        releaseDate
        movieReviewsByMovieId {
          nodes {
            rating
          }
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      name
    }
  }
`;

export const GET_REVIEWS_BY_MOVIE_ID = gql`
  query GetReviewsByMovieId($movieId: ID!) {
    allMovieReviews(filter: { movieId: { equalTo: $movieId } }) {
      nodes {
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
