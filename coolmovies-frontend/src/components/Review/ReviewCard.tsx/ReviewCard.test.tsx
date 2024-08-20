import { render, screen, fireEvent } from "@testing-library/react";
import { Review } from "../../../redux/types";
import ReviewCard from ".";
import renderWithMockedStore from "../../../../tests/components/renderWithMockedStore";

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

const initialStateWithUser = {
  currentUser: {
    user: {
      id: "user-1",
      name: "John Doe",
    },
  },
};

const initialStateWithoutUser = {
  currentUser: {
    user: null,
  },
};

const mockHandleEditClick = jest.fn();

describe("ReviewCard", () => {
  test("renders review title and author name", () => {
    renderWithMockedStore(
      <ReviewCard review={mockReview} handleEditClick={mockHandleEditClick} />,
      initialStateWithUser
    );

    expect(screen.getByTestId("review-title")).toHaveTextContent(
      "Great Movie! - (John Doe)"
    );
  });

  test("calls handleEditClick when edit button is clicked", () => {
    renderWithMockedStore(
      <ReviewCard
        review={{ ...mockReview, id: "2" }}
        handleEditClick={mockHandleEditClick}
      />,
      initialStateWithUser
    );

    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);

    expect(mockHandleEditClick).toHaveBeenCalled();
  });

  test("displays the correct rating", () => {
    renderWithMockedStore(
      <ReviewCard review={mockReview} handleEditClick={mockHandleEditClick} />,
      initialStateWithUser
    );

    expect(screen.getByTestId("review-rating")).toHaveAttribute(
      "aria-label",
      "3 Stars"
    );
  });

  test("renders review body", () => {
    renderWithMockedStore(
      <ReviewCard review={mockReview} handleEditClick={mockHandleEditClick} />,
      initialStateWithUser
    );

    expect(screen.getByTestId("review-body")).toHaveTextContent(
      "I really enjoyed this movie."
    );
  });

  test("does not render edit button when user is not the author", () => {
    renderWithMockedStore(
      <ReviewCard review={mockReview} handleEditClick={mockHandleEditClick} />,
      {
        currentUser: {
          user: {
            id: "user-2",
            name: "Jane Doe",
          },
        },
      }
    );

    expect(screen.queryByTestId("edit-button")).not.toBeInTheDocument();
  });

  test("renders correctly without current user", () => {
    renderWithMockedStore(
      <ReviewCard review={mockReview} handleEditClick={mockHandleEditClick} />,
      initialStateWithoutUser
    );

    expect(screen.getByTestId("review-title")).toHaveTextContent(
      "Great Movie! - (John Doe)"
    );
    expect(screen.getByTestId("review-body")).toHaveTextContent(
      "I really enjoyed this movie."
    );
    expect(screen.queryByTestId("edit-button")).not.toBeInTheDocument();
  });
});
