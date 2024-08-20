import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import MovieList from ".";
import { Movie } from "../../../redux/types";

const mockStore = (initialState: any): any => {
  return {
    getState: () => initialState,
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };
};

describe("MovieList Component", () => {
  test("renders loading skeleton when there is no movie data", () => {
    const store = mockStore({ movies: { movies: null, error: null } });

    render(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
  });

  test("renders error message when there is an error", () => {
    const store = mockStore({ movies: { movies: null, error: true } });

    render(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

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

    const store = mockStore({ movies: { movies: mockMovies, error: null } });

    render(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    expect(screen.getAllByTestId("movie-card")).toHaveLength(mockMovies.length);
  });
});
