import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "../../redux"; // Adjust the path as necessary
import MovieListSkelleton from "./DetailedMovieCardSkelleton"; // Ensure you have this component
import DetailedMovieCard from ".";
import { Movie } from "../../redux/types";

//Mocking jest image
jest.mock("next/image", () => {
  return ({ src, ...props }) => {
    return <img src={src} {...props} />;
  };
});

const mockStore = (initialState: any) => {
  return {
    getState: () => initialState,
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };
};

describe("DetailedMovieCard Component", () => {
  test("renders loading skeleton when there is no movie data", () => {
    const store = mockStore({ reviews: { movie: null } });

    render(
      <Provider store={store}>
        <DetailedMovieCard />
      </Provider>
    );

    expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
  });

  test("renders movie details when movie data is available", () => {
    const mockMovie: Movie = {
      title: "Inception",
      imgUrl: "http://example.com/inception.jpg",
      releaseDate: "2010-07-16",
      id: "movieId",
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
    };

    const store = mockStore({ reviews: { movie: mockMovie } });

    render(
      <Provider store={store}>
        <DetailedMovieCard />
      </Provider>
    );

    expect(screen.getByTestId("detailed-movie-card")).toBeInTheDocument();
    expect(screen.getByTestId("movie-title")).toHaveTextContent(
      mockMovie.title
    );
    expect(screen.getByTestId("movie-image")).toHaveAttribute(
      "src",
      mockMovie.imgUrl
    );
    expect(screen.getByTestId("rating-value")).toHaveTextContent(
      mockMovie.movieReviewsByMovieId?.nodes[0].rating.toString()
    );
    expect(screen.getByTestId("movie-release")).toHaveTextContent(
      `Release Date: ${new Date(mockMovie.releaseDate).toLocaleDateString(
        "en-US"
      )}`
    );
    expect(screen.getByTestId("movie-director")).toHaveTextContent(
      `Director: ${mockMovie.movieDirectorByMovieDirectorId.name}`
    );
  });
});
