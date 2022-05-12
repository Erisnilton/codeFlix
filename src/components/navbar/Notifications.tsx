import { Badge, IconButton } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";

const Notification: React.FunctionComponent = () => {
  return (
    <IconButton>
      <Badge badgeContent={11} color="error">
        <Notifications />
      </Badge>
    </IconButton>
  );
};

export default Notification;