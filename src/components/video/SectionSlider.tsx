import { makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { ReactNode, useMemo } from "react";
import useIsSmallWindows from "../../hooks/useIsSmallWindows";
import { Video } from "../../util/model";
import Slider, { SliderProps } from "../slider/Slider";
import { SliderArrow } from "../slider/SliderArrow";
import VideoThumbnail from "./VideoThumbnail";

const images = import.meta.globEager('../../static/img/thumbs/*.webp')

const useSectionTitleStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1.4em",
    fontWeight: 600,
    textTransform: "uppercase",
    // borderBottom: `1px solid ${theme.palette.text.secondary}`,
    margin: theme.spacing(2, 3),

    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      margin: theme.spacing(2, 1),
    },
  },
}));

export const SectionTitle: React.FunctionComponent<{ children: ReactNode }> = (
  props
) => {
  const classes = useSectionTitleStyles();
  return (
    <Typography
      className={classes.root}
      component={"h2"}
      color={"textSecondary"}
    >
      {props.children}
    </Typography>
  );
};

const useSectionSliderStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0,3),
    [theme.breakpoints.down(theme.breakpoints.values.mobile)]:{
      margin: theme.spacing(0,1)
    }
  },
  videoThumbnailRoot: {
    overflow: 'visible',
    marginRight: "4px",
    cursor: "pointer",
    // transition: "transform 0.5s ease-in",
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
  const classes = useSectionSliderStyles();
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
  // const thumbnails = isDown1200 ? bannerThumb : banner;
  // const thumbnails = isDown1200 ? bannerThumb : banner;
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <div className={classes.root}>
        <Slider {...sliderProps}>
          {Object.values(images)
            .map((src, index) => (
              <VideoThumbnail
                key={index}
                ImgProp={{ src : src.default}}
                classes={{ root: classes.videoThumbnailRoot }}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionSlider;
