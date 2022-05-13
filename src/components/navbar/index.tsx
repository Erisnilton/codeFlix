import {
  AppBar,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { FunctionComponent, useCallback, useContext } from "react";
import useIsSmallWindows from "../../hooks/useIsSmallWindows";
import MenuAccount from "../../menus/MenuAccount";
import MenuCategories from "../../menus/MenuCategories";
import DialogSearchContext from "../dialogSearch/DialogSearchContext";
import InputSearch from "../InputSearch";
import Notification from "./Notifications";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGlow: 1,
  },
}));

const Navbar: FunctionComponent = () => {
  const classes = useStyles();
  const isSmallWindows = useIsSmallWindows();
  const dialogContext = useContext(DialogSearchContext);

  const handleOpen = useCallback(() => {
    dialogContext.show();
  }, [dialogContext]);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {!isSmallWindows && <MenuCategories />}

          <Title />
          {!isSmallWindows && (
            <React.Fragment>
              <Grid container justifyContent="center">
                <Grid item xs={8} lg={7}>
                  <InputSearch />
                </Grid>
              </Grid>
                <Notification />
                <MenuAccount />
            </React.Fragment>
          )}
          {isSmallWindows && (
            <Grid container justifyContent="flex-end">
              <IconButton onClick={handleOpen}>
                <Search />
              </IconButton>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
