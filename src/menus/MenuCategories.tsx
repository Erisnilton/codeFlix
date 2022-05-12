import { IconButton, ThemeProvider } from "@material-ui/core";
import MuiMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Menu } from "@material-ui/icons";

import { Link } from "react-router-dom";
import useMenu from "../hooks/useMenu";
import routes, { MyRouteProps } from "../routes";
import { menuTheme } from "../theme";
const listRoutes = {
  home: "Início",
};

const menuRoutes = routes.filter((route) =>
  Object.keys(listRoutes).includes(route.name)
);

const MenuCategories: React.FunctionComponent = () => {
  const { anchorEl, open, handleOpen, handleClose } = useMenu();
  return (
    <ThemeProvider theme={menuTheme}>
      <div>
        <IconButton color="inherit" onClick={handleOpen}>
          <Menu />
        </IconButton>
        <MuiMenu
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          getContentAnchorEl={null}
        >
          {Object.keys(listRoutes).map((routeName, key) => {
            const route = menuRoutes.find(
              (route) => route.name === routeName
            ) as MyRouteProps;
            return (
              <MenuItem
                key={key}
                component={Link}
                to={route.path as string}
                onClick={handleClose}
              >
                {listRoutes[routeName as keyof typeof listRoutes]}
              </MenuItem>
            );
          })}
          <MenuItem component={Link} to={"/categorias/1"} onClick={handleClose}>
            Categorias
          </MenuItem>
        </MuiMenu>
      </div>
    </ThemeProvider>
  );
};

export default MenuCategories;
