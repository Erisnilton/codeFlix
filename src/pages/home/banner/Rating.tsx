import { makeStyles } from "@material-ui/core";
import BannerRating, { BannerRatingProps } from "./BannerRating";

const useStyle = makeStyles((theme) => ({
    root: {
        position: "absolute",
        bottom: 0,
        marginBottom: 30,
        right: 4,
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',

        [theme.breakpoints.up("lg")]: {
            width: 212,
            padding: "5px 5px 5px 15px",
            borderLeft: "5px solid #999999"
        }
    }
  
}));
interface Rating extends BannerRatingProps {}

const Rating: React.FunctionComponent<Rating> = (props) => {
  const classes = useStyle(props);
  return (
    <div className={classes.root}>
        <BannerRating
         {...props}/>
    </div>
  );
};

export default Rating;
