import { css } from "@emotion/react";
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import MovieList from "../../components/MovieList";
import useStyles from "./styles";

const Home: NextPage = () => {
  const styles = useStyles();
  return (
    <div css={styles.root}>
      <Paper elevation={3} css={styles.navBar}>
        <Typography>{"Cool movies"}</Typography>
      </Paper>

      <Typography variant={"h1"} css={styles.heading}>
        {"Cool movie Reviews!"}
      </Typography>
      <Box css={styles.body}>
        <MovieList />
      </Box>
    </div>
  );
};

export default Home;
