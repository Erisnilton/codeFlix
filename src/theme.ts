import { createTheme, Theme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
  primary: {
    main: red["500"],
  },
  background: {
    default: "#1f1f1f",
  },
  error: { main: red.A400 },
  action: { active: "#FFF" },
  text: { primary: "#FFF", secondary: "#8c8c8c" },
};

const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: palette.background?.default,
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: palette.background?.default,
      },
    },
    MuiDivider: { root: { backgroundColor: palette.text?.secondary } },
    MuiCssBaseline: {
      "@global": {
        "html, body, #root>div:nth:child(2)": { height: "100%" },
        body: { overflowX: "hidden" },
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
