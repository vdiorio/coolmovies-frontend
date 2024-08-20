import { Box, Grid, Rating, Typography } from "@mui/material";
import { MovieViewModel } from "../ViewModels/MovieViewModel";
import { useAppSelector } from "../../redux";
import Image from "next/image";
import useStyles from "./styles";
import StarIcon from "@mui/icons-material/Star";
import MovieListSkelleton from "./DetailedMovieCardSkelleton";

const DetailedMovieCard = () => {
  const movieState = useAppSelector((state) => state.reviews);
  const styles = useStyles();

  if (!movieState.movie) return <MovieListSkelleton />;

  const viewModel = new MovieViewModel(movieState.movie);

  const MovieDetail = ({ label, value }: { label: string; value: string }) => (
    <Typography variant="body2" color="text.secondary" css={styles.detail}>
      {label}: {value}
    </Typography>
  );

  return (
    <Grid container>
      <Grid item sm={12} xs={4}>
        <Image
          src={viewModel.getImgUrl()}
          alt={viewModel.getTitle()}
          width={300}
          height={450}
          style={{ width: "95%", height: "auto" }}
        />
      </Grid>
      <Grid item sm={12} xs={8}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          css={styles.title}
        >
          {viewModel.getTitle()}
        </Typography>

        <Box display="flex" gap={1}>
          <Rating
            precision={0.1}
            value={viewModel.getRating()}
            emptyIcon={
              <StarIcon
                style={{ opacity: 0.55 }}
                fontSize="inherit"
                sx={{ color: "white" }}
              />
            }
            readOnly
            size="small"
            color="white"
          />
          <Typography variant="body2" color="white" textAlign="end">
            {viewModel.getRating()}
          </Typography>
        </Box>

        <MovieDetail label="Release Date" value={viewModel.getReleaseDate()} />
        <MovieDetail
          label="Director"
          value={viewModel.getMovieDirectorName()}
        />
      </Grid>
    </Grid>
  );
};

export default DetailedMovieCard;
