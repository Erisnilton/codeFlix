import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import {  useMemo } from "react";
import useIsSmallWindows from "../../hooks/useIsSmallWindows";
import banner from "../../static/img/1-vid-banner-01.jpg";
import bannerThumb from "../../static/img/1-vid-thumb-01.jpg";
import { Video } from "../../util/model";
import Slider, { SliderProps } from "../slider/Slider";
import { SliderArrow } from "../slider/SliderArrow";
import Title from "../Title";
import VideoThumbnail from "./VideoThumbnail";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0,3),
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]:{
      margin: theme.spacing(0,1)
    }
  },
  videoThumbnailRoot: {
    marginRight: "4px",
    cursor: "pointer",
    transition: "transform 0.15s ease-in",
    // "&:hover": {
    //   transform: "scale3d(1.5, 1.5, 2)",
    // },
  },
}));

interface SectionSliderProps {
  title: string;
  video: Video[];
}

const SectionSlider: React.FunctionComponent<SectionSliderProps> = (props) => {
  const classes = useStyles();
  const { title } = props;
  const isSmallWindows = useIsSmallWindows();
  const sliderProps: SliderProps = useMemo(
    () => ({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 3,
      variableWidth: true,
      arrows: !isSmallWindows,
      prevArrow: <SliderArrow dir="left" />,
      nextArrow: <SliderArrow dir="right" />,
    }),
    [isSmallWindows]
  );
  const theme = useTheme();
  const isDown1200 = useMediaQuery(theme.breakpoints.down(1200))
  const thumbnails = isDown1200 ? bannerThumb : banner;
  return (
    <div>
      <Title>{title}</Title>
      <div className={classes.root}>
        <Slider {...sliderProps}>
          {Array.from(new Array(6).keys())
            .map(() => thumbnails)
            .map((v) => (
              <VideoThumbnail
                key={v}
                ImgProp={{ src: thumbnails }}
                classes={{ root: classes.videoThumbnailRoot }}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionSlider;
