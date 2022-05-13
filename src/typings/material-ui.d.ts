import { BreakpointOverrides } from "@material-ui/core/styles/createBreakpoints";

declare module "@material-ui/core/styles/createBreackpoints" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    mobile: true;
    md: true;
    lg: true;
    xl: true;
  }
}
