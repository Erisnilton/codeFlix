import {
  AppBar,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Close, ExitToApp, VerifiedUser } from "@material-ui/icons";
import { useCallback } from "react";
import TransitionSlide from "../transitions/TransitionSlide";
import UseInformation from "./UseInformation";

export interface DialogMyAccountProps {
  open: boolean;
  onClose?: () => void;
}

const DialogMyAccount: React.FunctionComponent<DialogMyAccountProps> = (
  props
) => {
  const { open, onClose } = props;

  const handleClose = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={TransitionSlide}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            arial-label="close"
          >
            <Close />
          </IconButton>
          <Typography variant="h6">Minha Conta</Typography>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>
          <UseInformation/>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon color="primary">
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default DialogMyAccount;
