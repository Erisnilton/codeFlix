import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import { AddCircleOutline, Info, PlayCircleOutline } from "@material-ui/icons";
import useIsSmallWindows from "../../../../hooks/useIsSmallWindows";

interface VideoActionsMobileProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "inherit",
  },
  navigationActions: {
    color: theme.palette.text.primary,
  },
}));
export const VideoActionsMobile: React.FunctionComponent<
  VideoActionsMobileProps
> = (props) => {
  const classes = useStyles();
  const isSmallWindows = useIsSmallWindows();
  return isSmallWindows ? (
    <BottomNavigation
      className={classes.root}
      showLabels
      //   value={currentRoute}
    >
      <BottomNavigationAction
        className={classes.navigationActions}
        label="Play"
        icon={<PlayCircleOutline />}
      />
      <BottomNavigationAction
        className={classes.navigationActions}
        label=" Minha Lista"
        icon={<AddCircleOutline />}
      />
      <BottomNavigationAction
        className={classes.navigationActions}
        label="Info"
        icon={<Info />}
      />
    </BottomNavigation>
  ) : null;
};

export default VideoActionsMobile;
