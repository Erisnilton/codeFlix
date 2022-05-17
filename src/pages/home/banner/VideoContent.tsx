import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Title from "../../../components/video/Title";
import useIsSmallWindows from "../../../hooks/useIsSmallWindows";
import { BANNER_VIDEO_ACTIONS_MEDIA_QUERY } from "../../../theme";
import { Video } from "../../../util/model";
import BannerCategory from "./BannerCategory";
import VideosActions from "./VideoActions";

interface VideosContentProps {
  video: Video;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    position: "absolute",
    marginBottom: 30,
    bottom: 0,
    marginLeft: 30,

    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      marginLeft: 10,
    },
  },
  title: {
    fontSize: "2em",
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.5em",
    },
  },
}));

const VideoContent: React.FunctionComponent<VideosContentProps> = (props) => {
  const { video } = props;
  const classes = useStyles();
  const isSmallWindows = useIsSmallWindows();
  const theme = useTheme();
  const isUp700 = useMediaQuery(theme.breakpoints.up(BANNER_VIDEO_ACTIONS_MEDIA_QUERY))
  return (
    <div className={classes.root}>
      <BannerCategory>
        {video.categories.map((c) => c.name).join(" | ")}
      </BannerCategory>
      {!isSmallWindows && (
        <Title className={classes.title}>{video.title}</Title>
      )}
      {isUp700 && <VideosActions />}
    </div>
  );
};

export default VideoContent;
