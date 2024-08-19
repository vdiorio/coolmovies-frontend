import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { reviewsActions, useAppDispatch, useAppSelector } from "../../redux";
import { useEffect } from "react";
import ReviewListSkelleton from "./ReviewListSkelleton";
import ReviewCard from "./ReviewCard.tsx";
import { useRouter } from "next/router";

const ReviewList = ({ movieId }: { movieId: string }) => {
  const dispatch = useAppDispatch();
  const reviewState = useAppSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(reviewsActions.fetch({ movieId }));
    console.log(movieId);

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
          <ReviewCard key={review.id} review={review} />
        ))
      ) : (
        <ReviewListSkelleton />
      )}
    </>
  );
};

export default ReviewList;
