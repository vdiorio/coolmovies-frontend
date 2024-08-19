import { Skeleton } from "@mui/material";

export default function MovieListSkelleton() {
  return (
    <>
      {Array.from({ length: Math.max(1, window.innerWidth / 260) * 2 }).map(
        (_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={240}
            height={350}
          />
        )
      )}
    </>
  );
}
