import { IconButton, IconButtonProps } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

interface SliderArrowUnstyledProps {
  dir: "left" | "right";
  iconButtonProps?: IconButtonProps;
  classes?: {
    arrow?: string;
  };
}
export const SliderArrowUnstyled: React.FunctionComponent<
  SliderArrowUnstyledProps
> = (props) => {
  const { dir, iconButtonProps = {}, classes = {} } = props;
  return (
    <IconButton size="small" {...iconButtonProps}>
      {dir === "left" ? (
        <KeyboardArrowLeft className={classes.arrow} />
      ) : (
        <KeyboardArrowRight className={classes.arrow} />
      )}
    </IconButton>
  );
};
