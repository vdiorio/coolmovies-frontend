import { css } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { MovieViewModel } from "./MovieViewModel";
import { Movie } from "../../../redux/types";
import { useRouter } from "next/router";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const viewModel = new MovieViewModel(movie);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/movies/${viewModel.getId()}`);
  };

  return (
    <Card css={styles.root} onClick={handleCardClick}>
      <CardMedia
        css={styles.cardMedia}
        image={viewModel.getImgUrl()}
        title={viewModel.getTitle()}
      />
      <CardContent css={styles.content}>
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
            precision={0.01}
            value={viewModel.getRating()}
            readOnly
            size="small"
          />
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"end"}
            css={styles.title}
          >
            {viewModel.getRating()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const styles = {
  root: css({
    width: 240,
    ":hover": { cursor: "pointer", transform: "scale(1.05)" },
    transition: "all 0.2s ease-in-out",
  }),
  cardMedia: css({ height: 300, objectFit: "cover" }),
  title: css({
    fontWeight: 500,
    fontSize: "1rem",
    margin: 0,
  }),
  content: css({ height: 50, padding: 4 }),
};

export default MovieCard;
