import { makeStyles } from "@material-ui/core"
import clsx from "clsx"
import { Link, LinkProps } from "react-router-dom"

interface VideoLinkProps extends LinkProps{
    className?: any
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        fontSize: '1em',
        fontWeight:300,
        alignItems: "center",
        color: theme.palette.text.primary,
        marginRight: 5,
        textDecoration: 'none',

        [theme.breakpoints.up("sm")] : {
            fontSize: '1.2em',
           marginRight: 30,
        },

         [theme.breakpoints.up("lg")] : {
            fontSize: '1.5em',
             marginRight: 50,
        }

    }
}))

const VideoLink: React.FunctionComponent<VideoLinkProps> = (props) => {
    const classes = useStyles();
    const {className , ...other} = props;
    return <Link {...other} className={clsx(className, classes.root)}/>
}

export default VideoLink;