import { alpha, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { CustomArrowProps } from "react-slick";
import { SliderArrowUnstyled } from "./SliderArrowUnstyled";

const useStyles = makeStyles((theme) => ({
  root: (props: SliderArrowProps) => {
    const style = {
      display: "flex",
      height: "100%",
      position: "absolute" as any,
      opacity: 0,
      zIndex: 999
    };
    if (props.dir === "right") {
      (style as any).right = 0;
      (style as any).top = 0;
    }
    return style;
  },
  iconButtonRoot: {
    borderRadius: 0,
    "&:hover": {
      backgroundColor: alpha(theme.palette.background.default, 0.35),
    }
  },
  arrow: {
    fontSize: 31,
    color: theme.palette.common.white,

    [theme.breakpoints.up("sm")]: {
      fontSize: 50,
    },
  },
}));

interface SliderArrowProps extends CustomArrowProps {
  dir: "left" | "right";
}

export const SliderArrow: React.FunctionComponent<SliderArrowProps> = (
  props
) => {
  const classes = useStyles(props);
  const { dir, className  , onClick } = props;
  return (
    <div
      className={clsx(
        classes.root,
        dir === "left" ? "slick-left" : "slick-rigth"
      )}
    >
      <SliderArrowUnstyled
        dir={dir}
        classes={{ arrow: classes.arrow }}
        iconButtonProps={{
          classes: { root: classes.iconButtonRoot },
          onClick,
          disabled: className?.includes("disabled"),
        }}
      />
    </div>
  );
};
