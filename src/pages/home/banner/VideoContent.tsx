import { makeStyles } from "@material-ui/core";
import Category from "../../../components/video/Category";
import Title from "../../../components/video/Title";
import { Video } from "../../../util/model";
import VideosActions from "./VideoActions";

interface VideosContentProps {
  video: Video;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    
    position: "absolute",
    marginLeft: 24,
    marginBottom: 40,
    bottom: 0
  },
  title: {
    fontSize: '2em',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5em',
    }
  },
  category: {
    fontSize: '1.4em',
    borderBottomWidth: '2px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.6em',
      borderBottomWidth: '5px',
    }
  }
}));

const VideoContent: React.FunctionComponent<VideosContentProps> = (props) => {
  const { video } = props;
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Category className={classes.category}>
        {video.categories.map((c) => c.name).join(" | ")}
      </Category>
      <Title className={classes.title}>{video.title}</Title>
      <VideosActions />
    </div>
  );
};

export default VideoContent;
