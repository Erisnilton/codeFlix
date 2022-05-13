import {
  BottomNavigationAction,
  BottomNavigationActionProps,
  makeStyles,
} from "@material-ui/core";

export interface FooterItemProps extends BottomNavigationActionProps {}

const useStyle = makeStyles({
  root: {
    fontWeight: 600,
    paddingBottom: 0,
    paddingTop: 0,
  },
});

const FooterItem: React.FunctionComponent<FooterItemProps> = (props) => {
  const classes = useStyle();
  return <BottomNavigationAction className={classes.root} {...props} />;
};

export default FooterItem;
