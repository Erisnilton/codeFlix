import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import ReactSlider, { Settings } from "react-slick";

const useStyles = makeStyles({
  div: {
    overflow: "visible"
  },

  root: {      
    "&:hover .slick-left, &:hover .slick-rigth": {
      opacity: 1,
    },
  },
});

export interface SliderProps extends Settings {}

const Slider: React.FunctionComponent<SliderProps> = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;
  const className = clsx(classes.root, other.className)
  return (
      <ReactSlider   { ...other }  className={className}>
        {children}
      </ReactSlider>
  );
};

export default Slider;
