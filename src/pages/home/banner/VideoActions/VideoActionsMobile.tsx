import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { AddCircleOutline, Info, PlayCircleOutline } from "@material-ui/icons";

interface VideoActionsMobileProps {}
export const VideoActionsMobile: React.FunctionComponent<
  VideoActionsMobileProps
> = (props) => {
  return (
    <BottomNavigation
      //   className={classes.bottomNavigation}
      showLabels
      //   value={currentRoute}
    >
      <BottomNavigationAction label="Play" icon={<PlayCircleOutline />} />
      <BottomNavigationAction
        label=" Minha Lista"
        icon={<AddCircleOutline />}
      />
      <BottomNavigationAction label="Info" icon={<Info />} />
    </BottomNavigation>
  );
};

export default VideoActionsMobile;
