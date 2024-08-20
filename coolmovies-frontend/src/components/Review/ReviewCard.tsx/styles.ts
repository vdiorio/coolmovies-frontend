import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      background: theme.palette.primary.main,
      marginBottom: 8,
    }),
    cardMedia: css({ height: 300, objectFit: "cover" }),
    title: css({
      fontWeight: 500,
      fontSize: "1rem",
      margin: 0,
      textAlign: "center",
      padding: "10px 0",
    }),
  };
};

export default useStyles;
