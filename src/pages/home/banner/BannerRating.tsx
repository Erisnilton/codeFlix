import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
const useStyle = makeStyles((theme) => ({
  root: (props : BannerRatingProps) => ({
    width: props.size ? props.size.width : "36px",
    height: props.size ? props.size.height :  "36px",
    fontSize: "1.2em",
    fontWeight: 400,
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down('sm')]: {
        width: "24px",
        height: "24px",
        fontSize: "1em",
    },
    [theme.breakpoints.up('lg')]: {
        width: "36px",
        height: "36px",
        fontSize: "1.6em",
    }
  }),
}));
export interface BannerRatingProps {
  rating: "L" | "10" | "12" | "14" | "16" | "18";
  className?: string;
  size?: { width: string; height: string };
}

const backgroundColors = {
    "L": "#39B549",
    "10": "#20A3D4",
    "12": "#E79738",
    "14": "#E35E00",
    "16": "#D00003",
    "18": "#000000"
}
const BannerRating: React.FunctionComponent<BannerRatingProps> = (props) => {
  const classes = useStyle(props);
  return (
    <Typography className={clsx(classes.root, props.className)} style={
        {
            backgroundColor: backgroundColors[props.rating]
        }
    }>
      {props.rating}
    </Typography>
  );
};

export default BannerRating;
