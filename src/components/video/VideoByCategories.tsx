import Page from "../Page";
import VideoList from "./VideoList";

const VideoByCategories: React.FunctionComponent = (props) => {
    return(
        <Page>
            <VideoList videos={[]} />
        </Page>
    )
}

export default VideoByCategories;