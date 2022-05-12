import { createTheme, Theme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
  background: {
    default: "#1f1f1f",
  },
  error: { main: red.A400 },
  action: { active: "#FFF" },
  text: { primary: "#FFF", secondary: "#8c8c8c" },
};

const theme = createTheme({
  palette,
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: palette.background?.default,
      },
    },
  },
});

export default theme;

const backgroundColor = "#3b3b3a";

export const menuTheme = (theme: Theme): Theme => ({
  ...theme,
  overrides: {
    ...theme.overrides,
    MuiPaper: {
      root: {
        backgroundColor,
        padding: "0 10px",
        width: "300px",
      },
    },
    MuiMenuItem: {
      root: {
        borderBottom: "2px solid transparent",
        "&:hover": { borderBottom: "2px solid #ffde39", backgroundColor },
      },
    },
  },
});
