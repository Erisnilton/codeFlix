import { makeStyles } from "@material-ui/core";
import { useMemo } from "react";
import Slider, { SliderProps } from "../../../components/slider/Slider";
import { SliderArrow } from "../../../components/slider/SliderArrow";
import VideoThumbnail from "../../../components/video/VideoThumbnail";
import useIsSmallWindows from "../../../hooks/useIsSmallWindows";
import banner from "../../../static/img/1-vid-banner-01.jpg";
import bannerHalf from "../../../static/img/1-vid-banner-half-01.jpg";
import Rating from "./Rating";
import VideoActionsMobile from "./VideoActions/VideoActionsMobile";
import VideoContent from "./VideoContent";

const useStyles = makeStyles((theme) => ({
  rootImage: {
    position: "relative",
    marginRight: "4px",
    "&:focus": {
      outlineColor: theme.palette.text.primary,
    },
  },
  image: {
    [theme.breakpoints.down(400)]: {
      width: "300px",
      height: "169px",
    },

    [theme.breakpoints.up(400)]: {
      width: "350px",
      height: "197px",
    },

    [theme.breakpoints.up(700)]: {
      width: "650px",
      height: "366px",
    },

    [theme.breakpoints.up(1200)]: {
      width: "1150px",
      height: "647px",
    },
  },
  get slider() {
    return Object.fromEntries(
      Object.entries(this.image).map((size) => [
        size[0],
        {
          "& .slick-list & .slick-track": {
            height: size[1].height,
          },
        },
      ])
    );
  },
}));
const Banner: React.FunctionComponent = () => {
  const classes = useStyles();
  const classesSlider = classes.slider;
  const isSmallWindows = useIsSmallWindows();
  const sliderProps: SliderProps = useMemo(
    () => ({
      className: classesSlider,
      dots: false,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: !isSmallWindows,
      prevArrow: <SliderArrow dir="left" />,
      nextArrow: <SliderArrow dir="right" />,
    }),
    [isSmallWindows, classesSlider]
  );
  const thumbnails = isSmallWindows ? banner : bannerHalf;
  return (
    <div>
      <Slider {...sliderProps}>
        {Array.from(new Array(6).keys())
          .map(() => thumbnails)
          .map((v) => (
            <div>
              <VideoThumbnail
                key={v}
                classes={{ root: classes.rootImage, image: classes.image }}
                ImgProp={{ src: thumbnails }}
              >
                <VideoContent
                  video={{
                    id: "000",
                    title: "Epitafos",
                    categories: [
                      { id: "111", name: "Documentários", is_active: true },
                    ],
                  }}
                />
                <Rating rating="14" />
              </VideoThumbnail>
            </div>
          ))}
      </Slider>
      <VideoActionsMobile />
    </div>
  );
};

export default Banner;
