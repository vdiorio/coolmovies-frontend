import { Typography } from "@mui/material";
import { reviewsActions, useAppDispatch, useAppSelector } from "../../../redux";
import { useEffect } from "react";
import ReviewCard from "../ReviewCard.tsx";
import { Review } from "../../../redux/types";
import ReviewListSkelleton from "../ReviewListSkelleton";

interface Props {
  movieId: string;
  handleEditClick: (review: Review) => void;
}

const ReviewList = ({ movieId, handleEditClick }: Props) => {
  const dispatch = useAppDispatch();
  const reviewState = useAppSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(reviewsActions.fetch({ movieId }));

    return () => {
      dispatch(reviewsActions.clearData());
    };
  }, [dispatch, movieId]);

  if (reviewState.error)
    return <Typography>{"Something went wrong :("}</Typography>;

  return (
    <>
      {reviewState.reviews ? (
        reviewState.reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            handleEditClick={() => handleEditClick(review)}
          />
        ))
      ) : (
        <ReviewListSkelleton />
      )}
    </>
  );
};

export default ReviewList;
