import { Box, Skeleton } from "@mui/material";

export default function MovieListSkelleton() {
  const length = Math.max(1, Math.floor(window.innerHeight / 140));
  return (
    <Box data-testid="loading-skeleton">
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          backgroundColor: "rgb(49 93 101 / 20%)",
          marginBottom: "8px",
          height: "400px",
          width: "95%",
        }}
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          backgroundColor: "rgb(49 93 101 / 20%)",
          marginBottom: "8px",
          width: "70%",
        }}
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          backgroundColor: "rgb(49 93 101 / 20%)",
          marginBottom: "8px",
          width: "70%",
        }}
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          backgroundColor: "rgb(49 93 101 / 20%)",
          marginBottom: "8px",
          width: "70%",
        }}
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          backgroundColor: "rgb(49 93 101 / 20%)",
          marginBottom: "8px",
          width: "70%",
        }}
      />
    </Box>
  );
}
