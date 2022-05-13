import { AppBar, BottomNavigation, makeStyles } from "@material-ui/core";
import { Height, Home, Notifications, Person } from "@material-ui/icons";
import FooterItem from "./FooterItem";

const useStyle = makeStyles((theme) => ({
    root:{
        flexGrow: 1
    },
    appBar: {
        backgroundColor: theme.palette.background.default,
        bottom:0,
        top: 'auto',
        borderTop: `1px solid ${theme.palette.text.secondary}`,
        height: '40px'
    },
    bottomNavigation: {
        backgroundColor: 'inherit'
    }

}))

const Footer: React.FunctionComponent = () => {
    const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar classes={{ root: classes.appBar }} position="fixed" color="primary">
        <BottomNavigation  className={classes.bottomNavigation} showLabels>
            <FooterItem label="Home" value="Home" icon={<Home/>} />
            <FooterItem label="Categorias" value="Cateforias" icon={<Home/>} />
            <FooterItem label="Notification" icon={<Notifications/>} />
            <FooterItem label="Conta" icon={<Person/>} />
        </BottomNavigation>
      </AppBar>
    </div>
  );
};

export default Footer;
