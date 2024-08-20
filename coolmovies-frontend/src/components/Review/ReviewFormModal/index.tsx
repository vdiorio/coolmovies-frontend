import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Rating,
} from "@mui/material";
import { Review } from "../../../redux/types";
import { reviewsActions, useAppDispatch } from "../../../redux";
import useStyles from "./styles";

interface Props {
  open: boolean;
  handleClose: () => void;
  movieId: string;
  review?: Review;
}

const ReviewFormModal = ({ open, handleClose, movieId, review }: Props) => {
  const [title, setTitle] = useState(review?.title || "");
  const [body, setBody] = useState(review?.body || "");
  const [rating, setRating] = useState(review?.rating || 0);
  const dispatch = useAppDispatch();

  const style = useStyles();

  useEffect(() => {
    if (review) {
      setTitle(review.title);
      setBody(review.body);
      setRating(review.rating);
    } else {
      setTitle("");
      setBody("");
      setRating(0);
    }
  }, [open, review]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const reviewData = {
      movieId,
      title,
      body,
      rating,
    };

    try {
      if (review) {
        dispatch(
          reviewsActions.update({
            ...reviewData,
            id: review.id,
            nodeId: review.nodeId,
          })
        );
      } else {
        dispatch(reviewsActions.create(reviewData));
      }

      handleClose();
    } catch (error) {
      console.error("Error creating or updating review:", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box css={style.root} component="form" onSubmit={handleSubmit}>
        <Typography variant="h6" component="h2" data-testid="modal-title">
          {review ? "Edit" : "Create"} a Review
        </Typography>
        <Typography component="legend">Rating:</Typography>
        <Rating
          name="movie-rating"
          value={rating}
          onChange={(_e, newValue) => setRating(newValue || 0)}
          data-testid="movie-rating"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          inputProps={{ "data-testid": "review-title" }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          rows={4}
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          inputProps={{ "data-testid": "review-body" }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, color: "white" }}
          disabled={!title || !body}
          data-testid="submit-button"
        >
          Submit Review
        </Button>
      </Box>
    </Modal>
  );
};

export default ReviewFormModal;
