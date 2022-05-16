import { makeStyles } from "@material-ui/core";
import Category, { CategoryProps } from "../../../components/video/Category";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      left: 4,
      bottom: 0,
      marginBottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  },
  category: {
    fontSize: "1.4em",
    borderBottomWidth: "2px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "0.8em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.6em",
    },
  },
}));

interface BannerCategoryProps extends CategoryProps {
  classeName?: any;
  children?: any;
}
const BannerCategory: React.FunctionComponent<BannerCategoryProps> = (
  props
) => {
  const classes = useStyles();
  const { children, classeName } = props;
  return (
    <div className={classes.root}>
      <Category {...props} className={classes.category} />
    </div>
  );
};

export default BannerCategory;
