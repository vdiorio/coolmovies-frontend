import { css } from "@emotion/react";
import { Box, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { movieActions, useAppDispatch, useAppSelector } from "../redux";
import MovieList from "../components/MovieList";

const primary = "#1976d2";

const Home: NextPage = () => {
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

const styles = {
  root: css({
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  navBar: css({
    background: primary,
    height: 50,
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    padding: 16,
    borderRadius: 0,
    p: {
      color: "white",
    },
  }),
  body: css({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 16,
  }),
  heading: css({
    marginTop: 16,
    fontSize: "2.75rem",
    textAlign: "center",
    marginBottom: 16,
  }),
  subtitle: css({
    fontWeight: 300,
    textAlign: "center",
    maxWidth: 600,
    margin: "24px 0",
    color: "rgba(0, 0, 0, 0.6)",
  }),
  mainControls: css({
    display: "flex",
    alignItems: "center",
    button: { marginRight: 16 },
  }),
  dataInput: css({
    alignSelf: "stretch",
    margin: "32px 0",
  }),
};

export default Home;
