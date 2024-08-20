import { screen } from "@testing-library/react";
import DetailedMovieCard from ".";
import renderWithMockedStore from "../../../../tests/components/renderWithMockedStore";
import { Movie } from "../../../redux/types";

describe("DetailedMovieCard Component", () => {
  test("renders loading skeleton when there is no movie data", () => {
    const initialState = { reviews: { movie: null } };

    renderWithMockedStore(<DetailedMovieCard />, initialState);

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

    const initialState = { reviews: { movie: mockMovie } };

    renderWithMockedStore(<DetailedMovieCard />, initialState);

    expect(screen.getByTestId("detailed-movie-card")).toBeInTheDocument();
    expect(screen.getByTestId("movie-title")).toHaveTextContent(
      mockMovie.title
    );
    expect(screen.getByTestId("movie-image")).toHaveAttribute(
      "src",
      mockMovie.imgUrl
    );
    expect(screen.getByTestId("rating-value")).toHaveTextContent("5");
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
