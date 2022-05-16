import { useMediaQuery, useTheme } from "@material-ui/core";

const useIsSmallWindows = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.mobile))

}

export default useIsSmallWindows;