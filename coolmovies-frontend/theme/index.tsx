import { createTheme } from "@mui/material/styles";

export const muiCustomTheme = createTheme({
  palette: {
    primary: {
      main: "#649683",
      contrastText: "#cfdad5",
    },
    success: {
      main: "#03A646",
    },
    background: {
      default: "#0F2F33",
    },
    text: {
      primary: "#123035",
    },
  },
});
