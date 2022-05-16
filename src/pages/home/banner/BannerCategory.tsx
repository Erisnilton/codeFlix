import { makeStyles } from "@material-ui/core";
import Category, { CategoryProps } from "../../../components/video/Category";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        bottom: 0,
        marginBottom: 40,
        left: 4,
        fontWeight: 600,
        textTransform: 'uppercase',
        borderBottom: "solid #ffde39",
        width: "fit-content",

        [theme.breakpoints.down('sm')]: {
            marginBottom: 35,
        }
    }
}))

interface BannerCategoryProps extends CategoryProps{
    classeName?: any,
    children?: any
}
const BannerCategory: React.FunctionComponent<BannerCategoryProps> = (props) => {
    const classes = useStyles();
    const {children, classeName} = props;
    return(
        <div>
            <Category {...props} />
        </div>
    )
}

export default BannerCategory;