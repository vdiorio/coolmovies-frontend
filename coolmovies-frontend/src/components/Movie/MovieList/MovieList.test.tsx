import { screen } from "@testing-library/react";
import MovieList from ".";
import { Movie } from "../../../redux/types";
import renderWithMockedStore from "../../../../tests/components/renderWithMockedStore";

describe("MovieList Component", () => {
  test("renders loading skeleton when there is no movie data", () => {
    const initialState = { movies: { movies: null, error: null } };

    renderWithMockedStore(<MovieList />, initialState);

    expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
  });

  test("renders error message when there is an error", () => {
    const initialState = { movies: { movies: null, error: true } };

    renderWithMockedStore(<MovieList />, initialState);

    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "Something went wrong :("
    );
  });

  test("renders movie cards when movie data is available", () => {
    const mockMovies: Movie[] = [
      {
        id: "1",
        title: "Inception",
        imgUrl: "http://example.com/inception.jpg",
        movieDirectorByMovieDirectorId: {
          age: 20,
          id: "author Id",
          name: "Jhon Doe",
        },
        movieReviewsByMovieId: {
          nodes: [
            {
              rating: 5,
            },
          ],
        },
        releaseDate: "2010-07-16",
      },
      {
        id: "2",
        title: "Interstellar",
        imgUrl: "http://example.com/interstellar.jpg",
        movieDirectorByMovieDirectorId: {
          age: 30,
          id: "author Id",
          name: "Jhon Doe",
        },
        movieReviewsByMovieId: {
          nodes: [
            {
              rating: 4,
            },
          ],
        },
        releaseDate: "2014-11-07",
      },
    ];

    const initialState = { movies: { movies: mockMovies, error: null } };

    renderWithMockedStore(<MovieList />, initialState);

    expect(screen.getAllByTestId("movie-card")).toHaveLength(mockMovies.length);
  });
});
