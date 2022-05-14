import { MenuItem, MuiThemeProvider } from "@material-ui/core";
import MuiMenu from "@material-ui/core/Menu";
import { Movie } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import { menuTheme } from "../../theme";
import FooterItem, { FooterItemProps } from "./FooterItem";

export interface FooterCategoriesItemProps extends FooterItemProps {
  currentRoute: string | undefined;
}

const FooterCategoriesItem: React.FunctionComponent<
  FooterCategoriesItemProps
> = (props) => {
  const { open, anchorEl, handleOpen, handleClose } = useMenu();
  return (
    <>
      <FooterItem
        {...props}
        label="Conteúdos"
        icon={<Movie />}
        onClick={handleOpen}
        selected={props.currentRoute === "video.by-category"}
      />
      <MuiThemeProvider theme={menuTheme}>
        <MuiMenu
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          transformOrigin={{ vertical: "bottom", horizontal: "center" }}
          getContentAnchorEl={null}
        >
          <MenuItem
            component={Link}
            to={`/categories/filme-id`}
            onClick={handleClose}
          >
            Filmes
          </MenuItem>
          <MenuItem
            component={Link}
            to={`/categories/documentarios-id`}
            onClick={handleClose}
          >
            Documentários
          </MenuItem>
        </MuiMenu>
      </MuiThemeProvider>
    </>
  );
};

export default FooterCategoriesItem;
