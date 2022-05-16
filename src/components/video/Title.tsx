import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

interface TitleProps {
  children: any;
  className?: string;
}

const useStyles = makeStyles({
  root: {
    fontWeight: 300,
    textTransform: "uppercase",
  },
});
const Title: React.FunctionComponent<TitleProps> = (props) => {
  const { className, children } = props;
  const classes = useStyles();
  const classRoot = clsx(className, classes.root);

  return (
    <Typography component={"h3"} className={classRoot}>
      {children}
    </Typography>
  );
};

export default Title;
