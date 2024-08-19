import { css } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { ReviewViewModel } from "../../ViewModels/ReviewViewModel";
import { Review } from "../../../redux/types";
import { useRouter } from "next/router";
import useStyles from "./styles";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  const viewModel = new ReviewViewModel(review);
  const router = useRouter();

  const styles = useStyles();

  return (
    <Card css={styles.root}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" marginBottom={2}>
          <Typography gutterBottom variant="h5" css={styles.title}>
            {viewModel.getTitle()}
          </Typography>
          <Box display="flex" alignItems={"center"}>
            <Typography gutterBottom variant="h5" css={styles.title}>
              Rating:
            </Typography>
            <Rating
              precision={0.01}
              value={viewModel.getRating()}
              readOnly
              size="small"
            />
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {viewModel.getBody()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
