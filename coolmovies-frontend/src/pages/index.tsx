import { css } from "@emotion/react";
import { Button, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import MovieIcon from "@mui/icons-material/Movie";
import useStyles from "./style";

const primary = "#197655";
const secondary = "#ffffff";

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/reviews`);
  };

  const styles = useStyles();

  return (
    <div css={styles.root}>
      <Paper elevation={3} css={styles.navBar}>
        <Typography variant="h6" css={styles.navText}>
          EcoPortal
        </Typography>
      </Paper>

      <div css={styles.hero}>
        <MovieIcon css={styles.heroIcon} />
        <Typography variant="h2" css={styles.heading}>
          EcoPortal Coolmovies Test
        </Typography>
        <Typography variant="subtitle1" css={styles.subtitle}>
          {`This is a simple movie review application made for the EcoPortal application process.`}
        </Typography>
        <Typography variant="subtitle1" css={styles.subtitle}>
          {`It was created using:`}
        </Typography>
        <ul css={styles.techList}>
          <li>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            (Build Framework)
          </li>
          <li>
            <a
              href="https://mui.com/material-ui/getting-started/overview/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MUI
            </a>{" "}
            (Component Library)
          </li>
          <li>
            <a
              href="https://redux-toolkit.js.org/introduction/getting-started"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>{" "}
            (State Management)
          </li>
          <li>
            <a
              href="https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux-Observable
            </a>{" "}
            (State Side-effect Middleware)
          </li>
          <li>
            <a
              href="https://www.apollographql.com/docs/react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apollo GraphQL
            </a>{" "}
            (GraphQL Query Client)
          </li>
        </ul>
        <Button
          variant="contained"
          color="secondary"
          css={styles.button}
          onClick={handleClick}
        >
          Go to reviews page
        </Button>
      </div>
    </div>
  );
};

export default Home;
