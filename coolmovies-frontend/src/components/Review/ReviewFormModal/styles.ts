import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      backgroundColor: theme.palette.background.paper, // Fixed `bgcolor` to `backgroundColor`
      border: "2px solid #000",
      padding: theme.spacing(4), // Replaced `p` with `padding` using theme spacing
      borderRadius: theme.shape.borderRadius, // Adjusted to use the theme's border radius
    }),
  };
};

export default useStyles;
