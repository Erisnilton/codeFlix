import Page from "../../components/Page";
import Sections from "../../components/video/Sections";
import Banner from "./banner";

const Home: React.FunctionComponent = () => {
  return (
    <Page>
      <Banner />
      <Sections />
    </Page>
  );
};

export default Home;
