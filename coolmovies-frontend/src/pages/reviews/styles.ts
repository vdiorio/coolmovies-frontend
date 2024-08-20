import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: theme.palette.background.default,
    }),
    navBar: css({
      backgroundColor: theme.palette.primary.main,
      height: 50,
      alignSelf: "stretch",
      display: "flex",
      alignItems: "center",
      padding: 16,
      borderRadius: 0,
      p: {
        color: theme.palette.primary.contrastText,
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
      color: theme.palette.primary.contrastText,
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
};

export default useStyles;
