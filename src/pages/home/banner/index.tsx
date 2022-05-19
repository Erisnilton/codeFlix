import { makeStyles } from "@material-ui/core";
import { useMemo, useState } from "react";
import Slider, { SliderProps } from "../../../components/slider/Slider";
import { SliderArrow } from "../../../components/slider/SliderArrow";
import VideoContent from "../../../components/video/VideoContent";
import VideoThumbnail from "../../../components/video/VideoThumbnail";
import useIsSmallWindows from "../../../hooks/useIsSmallWindows";
import banner from "../../../static/img/1-vid-banner-02.jpg";
import bannerHalf from "../../../static/img/1-vid-banner-half-01.jpg";
import Rating from "./Rating";
import SliderStepper from "./VideoActions/SliderStepper";
import VideoActionsMobile from "./VideoActions/VideoActionsMobile";

const useStyles = makeStyles((theme) => ({
  
  rootImage: {
    width: "100%",
    position: "relative",
    "&:focus": {
      outlineColor: theme.palette.text.primary,
    },
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(1.125)",
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
  const [activeIndex, setActiveIndex] = useState(0);
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
      beforeChange: (oldIndex, nextIndex) => {
        setActiveIndex(nextIndex);
      },
    }),
    [isSmallWindows, classesSlider]
  );

  const arrayImage = [
    {
      image: banner,
      video: {
        id: "000",
        title: "Os Vingadores",
        categories: [{ id: "111", name: "Filmes", is_active: true }],
      },
    },
    {
      image: bannerHalf,
      video: {
        id: "0001",
        title: "Epitafios",
        categories: [{ id: "112", name: "Documentários", is_active: true }],
      },
    },
  ];

  return (
    <div>
      <Slider {...sliderProps}>
        {arrayImage.map((thumbnail, index) => {
          const show = index === activeIndex;
          return (
            <div>
              <VideoThumbnail
                key={thumbnail.video.id}
                classes={{ root: classes.rootImage, image: classes.image }}
                ImgProp={{ src: thumbnail.image }}
              >
                {show && (
                  <VideoContent
                  key={thumbnail.video.id}
                    video={{
                      id: thumbnail.video.id,
                      title: thumbnail.video.title,
                      categories: thumbnail.video.categories
                    }}
                  />
                )}
                {show && <Rating rating="14" />}
              </VideoThumbnail>
            </div>
          );
        })}
      </Slider>
      {!isSmallWindows && (
        <SliderStepper maxSteps={2} activeStep={activeIndex} />
      )}
      <VideoActionsMobile />
    </div>
  );
};

export default Banner;
