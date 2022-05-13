import { AppBar, Dialog, IconButton, makeStyles } from "@material-ui/core";
import { ArrowBack, ArrowBackIos, CallMissedSharp } from "@material-ui/icons";
import { useCallback, useContext } from "react";
import InputSearch from "../InputSearch";
import TransitionSlide from "../transitions/TransitionSlide";
import DialogSearchContext from "./DialogSearchContext";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
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

export interface DialogSearchProps {
  open: boolean;
}

const DialogSearch: React.FunctionComponent<DialogSearchProps> = (props) => {
  const classes = useStyles();

  const dialogContext = useContext(DialogSearchContext);

  const handleClose = useCallback(() => {
    dialogContext.hide();
  }, [dialogContext]);

  return (
    <Dialog fullScreen open={props.open} TransitionComponent={TransitionSlide}>
      <AppBar position={"static"}>
        <div className={classes.wrapper}>
          <IconButton
            classes={{ root: classes.iconButtonRoot }}
            TouchRippleProps={{ classes: { child: classes.touchRippleChild } }}
            edge="start"
            onClick={handleClose}
          >
            <ArrowBack />
          </IconButton>
          <InputSearch />
        </div>
      </AppBar>
    </Dialog>
  );
};

export default DialogSearch;
