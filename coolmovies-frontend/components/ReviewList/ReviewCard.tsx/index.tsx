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
import { useRouter } from "next/router";
import useStyles from "./styles";
import editIcon from "../../../public/edit.svg";

interface Props {
  review: Review;
  handleEditClick: () => void;
}

const ReviewCard = ({ review, handleEditClick }: Props) => {
  const viewModel = new ReviewViewModel(review);
  const styles = useStyles();

  const showEditButton = viewModel.getId() === "1";

  return (
    <Card css={styles.root}>
      <CardContent sx={{ padding: "4px 16px 0 " }}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Typography variant="h5" css={styles.title}>
              {viewModel.getTitle()} - ({viewModel.getReviewAuthorName()})
            </Typography>
            {!showEditButton && (
              <IconButton aria-label="edit" onClick={handleEditClick}>
                <Image src={editIcon} width={25} height={25} alt="edit" />
              </IconButton>
            )}
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h5" css={styles.title}>
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
