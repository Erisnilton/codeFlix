import Page from "../../components/Page";
import Banner from "./banner";
import Sections from "../../components/video/Sections";

const Home: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner />
      <Sections />
    </Page>
  );
};

export default Home;
