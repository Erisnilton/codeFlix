import { Avatar, Typography, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
    }
})

const UseInformation: React.FunctionComponent = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar src="" style={{ marginRight: theme.spacing(1)}}>
        Nu
      </Avatar>
      <Typography noWrap={true}>Nome do Usuário</Typography>
    </div>
  );
};

export default UseInformation;
