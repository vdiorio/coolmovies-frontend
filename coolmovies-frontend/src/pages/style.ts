import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

const useStyles = () => {
  const theme = useTheme();

  return {
    root: css({
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: theme.palette.background.default || "#f5f5f5",
    }),
    headerText: css({
      color: theme.palette.primary.contrastText,
      fontWeight: 400,
    }),
    navBar: css({
      backgroundColor: theme.palette.primary.main,
      height: 60,
      alignSelf: "stretch",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      borderRadius: 0,
      gap: 20,
    }),
    navText: css({
      color: theme.palette.text.primary,
    }),
    hero: css({
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 20px",
      maxWidth: 800,
    }),
    heroIcon: css({
      fontSize: "5rem",
      color: theme.palette.primary.main,
    }),
    heading: css({
      fontSize: "3.5rem",
      fontWeight: 600,
    }),
    subtitle: css({
      fontSize: "1.2rem",
      fontWeight: 400,
      color: theme.palette.primary.contrastText,
    }),
    techList: css({
      textAlign: "left",
      padding: "0 20px",
      listStyleType: "disc",
      li: {
        fontSize: "1rem",
        marginBottom: 8,
        color: theme.palette.primary.contrastText,
      },
      a: {
        color: theme.palette.primary.main,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    }),
    headerBack: css({
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      marginLeft: 16,
      "&:hover": {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.contrastText,
      },
    }),

    button: css({
      marginTop: 32,
      fontSize: "1.1rem",
      padding: "12px 24px",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark || "#005bb5",
      },
    }),
  };
};

export default useStyles;
