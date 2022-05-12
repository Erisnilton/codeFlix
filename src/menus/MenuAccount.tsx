import {
  Box,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
} from "@material-ui/core";
import { ArrowDropDownSharp, ExitToApp } from "@material-ui/icons";
import MuiMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMenu from "../hooks/useMenu";
import { menuTheme } from "../theme";

const MenuAccount: React.FunctionComponent = () => {
  const { anchorEl, open, handleOpen, handleClose } = useMenu();

  return (
    <ThemeProvider theme={menuTheme}>
      <div>
        <Box
          display="flex"
          alignItems={"center"}
          flexDirection={"row"}
          px={1}
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        >
          Nome do usuário
          <ArrowDropDownSharp />
        </Box>
        <MuiMenu
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon style={{ color: "inherit" }}>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </MenuItem>
        </MuiMenu>
      </div>
    </ThemeProvider>
  );
};

export default MenuAccount;
