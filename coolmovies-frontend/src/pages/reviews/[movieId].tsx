import { NextPage } from "next";
import { useRouter } from "next/router";
import ReviewList from "../../components/Review/ReviewList";
import { Button, Grid, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReviewFormModal from "../../components/Review/ReviewFormModal";
import { useState } from "react";
import { Review } from "../../redux/types";
import DetailedMovieCard from "../../components/Movie/DetailedMovieCard";
import useStyles from "../style";

const MoviePage: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [reviewEdit, setReviewEdit] = useState<Review | undefined>(undefined);

  const handleCloseModal = () => {
    setOpen(false);
    setReviewEdit(undefined);
  };

  const {
    query: { movieId },
  } = useRouter();

  const handleBackClick = () => {
    window.history.back();
  };

  const handleEditClick = (review: Review) => {
    setReviewEdit(review);
    setOpen(true);
  };

  const styles = useStyles();

  return (
    <div css={styles.root}>
      <Paper elevation={3} css={styles.navBar}>
        <Button
          onClick={handleBackClick}
          variant="contained"
          css={styles.headerBack}
        >
          <ArrowBackIcon />
        </Button>
        <Typography text-align="center" css={styles.headerText}>
          {"Reviews:"}
        </Typography>
      </Paper>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
          <DetailedMovieCard />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9} xl={10}>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{
              marginBottom: "1rem",
            }}
          >
            Add Review
          </Button>
          <ReviewList
            movieId={movieId as string}
            handleEditClick={handleEditClick}
          />
        </Grid>
      </Grid>
      <ReviewFormModal
        open={open}
        handleClose={handleCloseModal}
        movieId={movieId as string}
        review={reviewEdit}
      />
    </div>
  );
};

export default MoviePage;
