import { Skeleton } from "@mui/material";

export default function MovieListSkelleton() {
  const length = Math.max(1, Math.floor(window.innerWidth / 260)) * 2;
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width={240}
          height={350}
          animation="wave"
          sx={{ backgroundColor: "rgb(49 93 101 / 20%)" }}
        />
      ))}
    </>
  );
}
