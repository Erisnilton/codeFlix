import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../static/img/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    cursor: 'pointer'
  },
  logo: {
      [theme.breakpoints.down("sm")]: {
          with: 100,
      },
      [theme.breakpoints.between("sm", "md")]: {
          with: 130,
      },
      [theme.breakpoints.up("md")]: {
          with: 170,
      }
  },

}));

const Title: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Link to={"/"}>
      <Typography className={classes.root}>
        <img src={logo} alt="codeFlix"  className={classes.logo}/>
      </Typography>
    </Link>
  );
};

export default Title;
