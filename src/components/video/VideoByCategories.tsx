import { Grid } from "@material-ui/core";
import MenuGere from "../MenuGere";
import Page from "../Page";
import Title from "../Title";
import VideoList from "./VideoList";

const VideoByCategories: React.FunctionComponent = (props) => {
    return(
        <Page margin="large">
            <Grid container>
                <Grid item xs={7} sm={9}>
                    <Title>Filmes</Title>
                </Grid>
                <Grid item xs={5} sm={3}>
                   <MenuGere />
                </Grid>
            </Grid>
            <VideoList videos={[]} />
        </Page>
    )
}

export default VideoByCategories;