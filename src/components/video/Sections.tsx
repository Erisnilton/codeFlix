import SectionSlider from "./SectionSlider";


interface SectionsProps {}
const Sections: React.FunctionComponent<SectionsProps> = (props) => {
  return (
    <>
      {/* <SectionSlider title="Top 10" video={[]} /> */}
      <SectionSlider title="Lançamentos" video={[]} />
    </>
  );
};

export default Sections;
