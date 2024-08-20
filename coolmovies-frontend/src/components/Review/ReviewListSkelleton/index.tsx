import { Skeleton } from "@mui/material";

export default function ReviewListSkelleton() {
  const length = Math.max(1, Math.floor(window.innerHeight / 140));
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          height={"90px"}
          animation="wave"
          sx={{ backgroundColor: "rgb(49 93 101 / 20%)", marginBottom: "8px" }}
        />
      ))}
    </>
  );
}
