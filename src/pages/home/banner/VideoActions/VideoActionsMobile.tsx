import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import { AddCircleOutline, Info, PlayCircleOutline } from "@material-ui/icons";
import { BANNER_VIDEO_ACTIONS_MEDIA_QUERY } from "../../../../theme";

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
  const theme = useTheme()
  const isDown700 = useMediaQuery(theme.breakpoints.down(BANNER_VIDEO_ACTIONS_MEDIA_QUERY));
  return isDown700 ? (
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
