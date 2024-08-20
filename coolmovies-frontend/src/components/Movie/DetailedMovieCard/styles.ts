import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
  const theme = useTheme();

  return {
    title: css({
      fontWeight: 500,
      fontSize: "1rem",
      margin: 0,
      color: theme.palette.primary.contrastText,
    }),
    detail: css({
      fontWeight: 400,
      fontSize: "0.875rem",
      margin: 0,
      color: theme.palette.primary.contrastText,
    }),
  };
};

export default useStyles;
