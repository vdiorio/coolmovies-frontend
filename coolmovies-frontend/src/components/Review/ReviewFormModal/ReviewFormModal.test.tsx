import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { reviewsActions } from "../../../redux";
import ReviewFormModal from ".";
import { Review } from "../../../redux/types";

const mockStore = (initialState: any): any => ({
  getState: () => initialState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
});

const mockDispatch = jest.fn();

jest.mock("../../redux", () => {
  const originalModule = jest.requireActual("../../redux");
  return {
    ...originalModule,
    reviewsActions: {
      create: jest.fn(),
      update: jest.fn(),
    },
    useAppDispatch: () => mockDispatch,
  };
});

describe("ReviewFormModal Component", () => {
  const handleClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = (props: {
    open: boolean;
    handleClose: jest.Mock<any, any, any>;
    movieId: string;
    review?: Review;
  }) => {
    const store = mockStore({ reviews: {} });
    render(
      <Provider store={store}>
        <ReviewFormModal {...props} />
      </Provider>
    );
  };

  test("renders create review form when no review data is provided", () => {
    renderComponent({ open: true, handleClose, movieId: "123" });

    expect(screen.getByTestId("modal-title")).toHaveTextContent(
      "Create a Review"
    );
    expect(screen.getByTestId("movie-rating")).toBeInTheDocument();
    expect(screen.getByTestId("review-title")).toBeInTheDocument();
    expect(screen.getByTestId("review-body")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  test("renders edit review form with provided review data", () => {
    const mockReview = {
      id: "reviewId",
      nodeId: 1,
      title: "Great Movie",
      body: "I really enjoyed it.",
      rating: 5,
      movieId: "",
      userByUserReviewerId: {
        id: "",
        name: "",
      },
    };

    renderComponent({
      open: true,
      handleClose,
      movieId: "123",
      review: mockReview,
    });

    expect(screen.getByRole("textbox", { name: /title/i })).toHaveValue(
      mockReview.title
    );
    expect(screen.getByRole("textbox", { name: /body/i })).toHaveValue(
      mockReview.body
    );
  });

  describe("handleSubmit", () => {
    const mockHandleClose = jest.fn();

    test("dispatches create action when no review exists", async () => {
      renderComponent({
        open: true,
        handleClose: mockHandleClose,
        movieId: "",
      });

      fireEvent.change(screen.getByLabelText(/title/i), {
        target: { value: "My Review Title" },
      });
      fireEvent.change(screen.getByLabelText(/body/i), {
        target: { value: "This is a review body." },
      });
      fireEvent.click(screen.getByRole("radio", { name: /5 star/i }));
      fireEvent.click(screen.getByTestId("submit-button"));

      expect(reviewsActions.create).toHaveBeenCalledWith({
        movieId: expect.any(String),
        title: "My Review Title",
        body: "This is a review body.",
        rating: 5,
      });
      expect(mockHandleClose).toHaveBeenCalled();
    });

    test("dispatches update action when review exists", async () => {
      const existingReview = {
        id: "123",
        nodeId: 2,
        title: "Existing Review",
        body: "Existing review body.",
        rating: 3,
        movieId: "",
        userByUserReviewerId: {
          id: "",
          name: "",
        },
      };

      renderComponent({
        open: true,
        handleClose: mockHandleClose,
        review: existingReview,
        movieId: "",
      });

      fireEvent.change(screen.getByLabelText(/title/i), {
        target: { value: "Updated Review Title" },
      });
      fireEvent.change(screen.getByLabelText(/body/i), {
        target: { value: "This is an updated review body." },
      });
      fireEvent.click(screen.getByRole("radio", { name: /5 star/i }));
      fireEvent.click(screen.getByTestId("submit-button"));

      expect(reviewsActions.update).toHaveBeenCalledWith({
        movieId: expect.any(String),
        title: "Updated Review Title",
        body: "This is an updated review body.",
        rating: 5,
        id: existingReview.id,
        nodeId: existingReview.nodeId,
      });
      expect(mockHandleClose).toHaveBeenCalled();
    });
  });
});
