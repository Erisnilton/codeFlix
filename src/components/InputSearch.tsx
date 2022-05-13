import {
  Divider,
  IconButton,
  InputBase,
  makeStyles,
  alpha,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Height, Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    width: "100%",
    marginLeft: theme.spacing(1),
    Height: "40px",
    padding: 0,
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1.5),
  },
  divider: {
    backgroundColor: theme.palette.common.white,
    height: 30,
    margin: 2,
  },
  iconButtonRoot: {
    borderRadius: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  touchRippleChild: {
    borderRadius: 0,
  },
}));

export interface InputSearchProps {}

const InputSearch: React.FunctionComponent<InputSearchProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputBase
        classes={{ root: classes.inputRoot, input: classes.inputInput }}
        placeholder="Buscar"
      />
      <Divider classes={{ root: classes.divider }} orientation="vertical" />
      <IconButton
        classes={{ root: classes.iconButtonRoot }}
        TouchRippleProps={{ classes: { child: classes.touchRippleChild }}}
      >
        <Search />
      </IconButton>
    </div>
  );
};

export default InputSearch;
