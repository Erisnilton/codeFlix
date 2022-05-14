import { AppBar, BottomNavigation, makeStyles } from "@material-ui/core";
import { Home, Notifications, Person } from "@material-ui/icons";
import { useCallback, useEffect, useMemo, useState } from "react";
import { matchPath, useHistory, useLocation } from "react-router-dom";
import routes from "../../routes";
import DialogMyAccount from "../dialogAccount/DialogMyAccount";
import HideOnScroll from "../navbar/HideOnScroll";
import FooterCategoriesItem from "./FooterCategoriesItem";
import FooterItem from "./FooterItem";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    bottom: 0,
    top: "auto",
    borderTop: `1px solid ${theme.palette.text.secondary}`,
    height: "40px",
  },
  bottomNavigation: {
    backgroundColor: "inherit",
  },
}));

const Footer: React.FunctionComponent = () => {
  const classes = useStyle();
  const [openDialogAccount, setOpenDialogAccount] = useState(false);
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [value, setValue] = useState(0);

  const currentRoute = useMemo(
    () => routes.find((r) => matchPath(pathname, r))?.name,
    [pathname]
  );

  const goToHome = useCallback(() => {
    push("/");
  }, [push]);

  const onClickMyAccount = useCallback(() => {
    setOpenDialogAccount(true);
  }, []);
  const onCloseDialogAccount = useCallback(() => {
    setOpenDialogAccount(false);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        classes={{ root: classes.appBar }}
        position="fixed"
        color="primary"
        >
        <BottomNavigation
          className={classes.bottomNavigation}
          showLabels
          value={currentRoute}
        >
          <FooterItem
            label="Home"
            value="home"
            icon={<Home />}
            onClick={goToHome}
          />
          <FooterCategoriesItem  currentRoute={currentRoute}/>
          <FooterItem label="Notification" icon={<Notifications />} />
          <FooterItem
            label="Conta"
            icon={<Person />}
            onClick={onClickMyAccount}
          />
        </BottomNavigation>
      </AppBar>
      <DialogMyAccount
        open={openDialogAccount}
        onClose={onCloseDialogAccount}
      />
    </div>
  );
};

export default Footer;
