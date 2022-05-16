import { makeStyles, Typography } from "@material-ui/core";
import logo from "../../static/img/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
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
    <Typography className={classes.root}>
      <img src={logo} alt="codeFlix"  className={classes.logo}/>
    </Typography>
  );
};

export default Title;
