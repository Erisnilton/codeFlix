import {
  IconButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
} from "@material-ui/core";
import { ArrowDropDownSharp, ExitToApp } from "@material-ui/icons";
import MuiMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMenu from "../hooks/useMenu";
import { menuTheme } from "../theme";
import UseInformation from "../components/dialogAccount/UseInformation";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    alignItem: "center",
    flexDirection: "row",
  },
  iconButtonRoot: {
    borderRadius: 0,
  },
  touchRippleChild: {
    borderRadius: 0,
  },
}));
const MenuAccount: React.FunctionComponent = () => {
  const { anchorEl, open, handleOpen, handleClose } = useMenu();
  const classes = useStyles();

  return (
    <ThemeProvider theme={menuTheme}>
      <div>
        <div style={{ cursor: "pointer" }} className={classes.box}>
          <IconButton
            classes={{ root: classes.iconButtonRoot }}
            TouchRippleProps={{ classes: { child: classes.touchRippleChild } }}
            onClick={handleOpen}
          >
          <UseInformation />
            <ArrowDropDownSharp />
          </IconButton>
        </div>
        <MuiMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
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
