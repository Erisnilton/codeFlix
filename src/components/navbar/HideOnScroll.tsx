import { Slide, useScrollTrigger } from "@material-ui/core";
import { ReactNode } from "react";
import useIsSmallWindows from "../../hooks/useIsSmallWindows";

const HideOnScroll: React.FunctionComponent<{children: ReactNode}> = (props) => {
  const { children } = props;
  const isSmallWindows = useIsSmallWindows();
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!isSmallWindows || !trigger}>
      {children as any}
    </Slide>
  );
};

export default HideOnScroll;
