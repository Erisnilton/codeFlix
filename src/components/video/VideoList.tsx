import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import banner from "../../static/img/1-vid-banner-01.jpg";
import bannerThumb from "../../static/img/1-vid-thumb-01.jpg";
import { Video } from "../../util/model";
import VideoThumbnail from "./VideoThumbnail";

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumnGap: theme.spacing(1)
  }
}))

interface VideoListProps {
  videos: Video[];
}

const VideoList: React.FunctionComponent<VideoListProps> = (props) => {
  const classes = useStyles();
  const { videos } = props;
  const theme = useTheme();
  const isDown1200 = useMediaQuery(theme.breakpoints.down(1200));
  const thumbnails = isDown1200 ? bannerThumb : banner;
  return (
    <Grid className={classes.root} container justifyContent="center">
      {Array.from(new Array(5).keys())
        .map(() => thumbnails)
        .map((v) => (
          <Link to={`/videos/1/details`}>
            <VideoThumbnail key={v} ImgProp={{ src: thumbnails }} />
          </Link>
        ))}
    </Grid>
  );
};

export default VideoList;
