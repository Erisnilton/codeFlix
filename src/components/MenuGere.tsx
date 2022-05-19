import { Box, ThemeProvider } from "@material-ui/core";
import MuiMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { KeyboardArrowDown, Menu } from "@material-ui/icons";
import useMenu from "../hooks/useMenu";
import { menuTheme } from "../theme";

const MenuGere: React.FunctionComponent = () => {
  const { anchorEl, open, handleOpen, handleClose } = useMenu();
  return (
    <ThemeProvider theme={menuTheme}>
          <Box display={"flex"} alignItems={"center"} style={{cursor: 'pointer'}} px={1} onClick={handleOpen}>
              Ação
              <KeyboardArrowDown/>
          </Box>
        <MuiMenu
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          getContentAnchorEl={null}
        >
          <MenuItem>Todos Generos</MenuItem>
          <MenuItem>Ação</MenuItem>
        </MuiMenu>
    </ThemeProvider>
  );
};

export default MenuGere;
