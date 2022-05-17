import SectionSlider from "../../components/video/SectionSlider";


interface SectionsProps {}
const Sections: React.FunctionComponent<SectionsProps> = (props) => {
  return (
    <>
      <SectionSlider title="Top 10" video={[]} />
      <SectionSlider title="Documentários" video={[]} />
    </>
  );
};

export default Sections;
