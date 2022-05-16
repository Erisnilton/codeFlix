import { makeStyles } from "@material-ui/core";
import { AddCircleOutline, Info, PlayCircleOutline } from "@material-ui/icons";
import VideoLink from "../../../../components/video/VideoLink";
interface VideosActionsPropos {}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent:"flex-start",

  },
});

const VideosActions: React.FunctionComponent<VideosActionsPropos> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <VideoLink to={"#"}> <PlayCircleOutline/> Play</VideoLink>
      <VideoLink to={"#"}> <AddCircleOutline/> Minha Lista</VideoLink>
      <VideoLink to={"#"}> <Info/> Info</VideoLink>
    </div>
  );
};

export default VideosActions;
