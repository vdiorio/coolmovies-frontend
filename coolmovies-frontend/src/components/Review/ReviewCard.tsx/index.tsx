import { css } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ReviewViewModel } from "../../ViewModels/ReviewViewModel";
import { Review } from "../../../redux/types";
import useStyles from "./styles";
import editIcon from "../../../../public/edit.svg";
interface Props {
  review: Review;
  handleEditClick: () => void;
}

const ReviewCard = ({ review, handleEditClick }: Props) => {
  const viewModel = new ReviewViewModel(review);
  const styles = useStyles();

  return (
    <Card css={styles.root} data-testid="review-card">
      <CardContent sx={{ padding: "4px 16px 0 " }} data-testid="card-content">
        <Box
          display="flex"
          justifyContent="space-between"
          data-testid="flex-box"
        >
          <Box display="flex" alignItems="center" data-testid="author-box">
            <Typography
              variant="h5"
              css={styles.title}
              data-testid="review-title"
            >
              {viewModel.getTitle()} - ({viewModel.getReviewAuthorName()})
            </Typography>
            <IconButton
              aria-label="edit"
              onClick={handleEditClick}
              data-testid="edit-button"
            >
              <Image src={editIcon} width={25} height={25} alt="edit" />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center" data-testid="rating-box">
            <Typography
              variant="h5"
              css={styles.title}
              data-testid="rating-label"
            >
              Rating:
            </Typography>
            <Rating
              precision={0.1}
              value={viewModel.getRating()}
              readOnly
              size="small"
              data-testid="review-rating"
            />
          </Box>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          data-testid="review-body"
        >
          {viewModel.getBody()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
