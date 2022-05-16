import { Box, makeStyles, Theme } from "@material-ui/core";
import { ReactNode } from "react";

export interface VideoThumbnailProps {
  classes?: {
    root?: any;
    image?: any;
  };
  ImgProp: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  children?: ReactNode
}

export function getImageSizes(theme: Theme) {
  return {
        [theme.breakpoints.down(400)]: {
            width: "103px",
            height: "144px",
        },

        [theme.breakpoints.up(400)]: {
            width: "137px",
            height: "182px",
        },

        [theme.breakpoints.up(700)]: {
            width: "153px",
            height: "212px",
        },

        [theme.breakpoints.up(1200)]: {
            width: "303px",
            height: "172px",
        },

        [theme.breakpoints.up("xl")]: {
            width: "393px",
            height: "223px"
        }
    }

}

const useStyle = makeStyles((theme) => ({
    image: getImageSizes(theme)
}));

const VideoThumbnail: React.FunctionComponent<VideoThumbnailProps> = (props) => {
  const classes = useStyle();
  const { classes: classesProp = {}, ImgProp } = props;
  const imgAlt = ImgProp.alt || "";

  return (
    <Box className={classesProp.root}>
      <img
        className={classesProp.image || classes.image}
        {...ImgProp}
        alt={imgAlt}
      />
      {props.children}
    </Box>
  );
};

export default VideoThumbnail;
