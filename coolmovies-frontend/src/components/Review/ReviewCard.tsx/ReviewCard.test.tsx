import { render, screen, fireEvent } from "@testing-library/react";
import { Review } from "../../../redux/types";
import ReviewCard from ".";

const mockReview: Review = {
  id: "1",
  title: "Great Movie!",
  rating: 3,
  body: "I really enjoyed this movie.",
  movieId: "",
  nodeId: 0,
  userByUserReviewerId: {
    id: "user-1",
    name: "John Doe",
  },
};

const mockHandleEditClick = jest.fn();

describe("ReviewCard", () => {
  test("renders review title and author name", () => {
    render(
      <ReviewCard review={mockReview} handleEditClick={mockHandleEditClick} />
    );

    expect(screen.getByTestId("review-title")).toHaveTextContent(
      "Great Movie! - (John Doe)"
    );
  });

  test("calls handleEditClick when edit button is clicked", () => {
    render(
      <ReviewCard
        review={{ ...mockReview, id: "2" }}
        handleEditClick={mockHandleEditClick}
      />
    );

    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);

    expect(mockHandleEditClick).toHaveBeenCalled();
  });

  test("displays the correct rating", () => {
    render(
      <ReviewCard review={mockReview} handleEditClick={mockHandleEditClick} />
    );

    expect(screen.getByTestId("review-rating")).toHaveAttribute(
      "aria-label",
      "3 Stars"
    );
  });

  test("renders review body", () => {
    render(
      <ReviewCard review={mockReview} handleEditClick={mockHandleEditClick} />
    );

    expect(screen.getByTestId("review-body")).toHaveTextContent(
      "I really enjoyed this movie."
    );
  });
});
