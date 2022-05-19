import { makeStyles } from "@material-ui/core"
import { ReactNode } from "react"
import clsx from 'clsx';

export interface PagesProps {
    classes?:{
        root?: any
    },
    margin?: "normal" | "large",
    children?: ReactNode
}

const useStyle = makeStyles((theme) => ({
    root: (props: PagesProps) => ({
        height: "inherit",
        paddingTop: props.margin === "normal" ? 48 : 62,

        [theme.breakpoints.up("md")] : {
            paddingTop: props.margin === "normal" ? 64 : 80
        },
        '&::after': {
            [theme.breakpoints.down(theme.breakpoints.values.mobile)] : {
                content: '""',
                display: "block",
                paddingTop: 100
            }
        }
    })
}))
const Page: React.FunctionComponent<PagesProps> = (props) => {

    const { classes: propsClasses = {}, margin = 'normal'} = props;
    const classes = useStyle({ classes: propsClasses, margin });
    const classRoot = clsx(classes.root, propsClasses.root);

    return (
        <div className={classRoot}>{props.children}</div>
    )

}

export default Page;