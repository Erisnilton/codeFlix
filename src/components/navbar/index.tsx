import {
  AppBar,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { FunctionComponent } from "react";
import MenuAccount from "../../menus/MenuAccount";
import MenuCategories from "../../menus/MenuCategories";
import Notification from "./Notifications";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGlow: 1,
    },
}))

const Navbar: FunctionComponent = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
            <MenuCategories />
          <Title />
          <Notification/>
          <MenuAccount />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
