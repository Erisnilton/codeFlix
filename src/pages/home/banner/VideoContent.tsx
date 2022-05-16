import { makeStyles } from "@material-ui/core";
import Category from "../../../components/video/Category";
import Title from "../../../components/video/Title";
import useIsSmallWindows from "../../../hooks/useIsSmallWindows";
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
    marginLeft: 4,
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
  return (
    <div className={classes.root}>
      <BannerCategory>
        {video.categories.map((c) => c.name).join(" | ")}
      </BannerCategory>
      {!isSmallWindows && (
        <Title className={classes.title}>{video.title}</Title>
      )}
      {!isSmallWindows && <VideosActions />}
    </div>
  );
};

export default VideoContent;
