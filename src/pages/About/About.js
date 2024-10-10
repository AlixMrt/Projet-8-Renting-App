import "./_about.scss";
import Banner from "../../components/Banner/Banner";
import HomeBackgroundImg from "../../assets/images/about_banner-img.webp";
import Collapse from "../../components/Collapse/Collapse";
import dataAbout from "../../utils/dataAbout.json";

const fiabiliteText = dataAbout[0].description;
const respectText = dataAbout[1].description;
const serviceText = dataAbout[2].description;
const securiteText = dataAbout[3].description;

export default function About() {
  return (
    <div className="about">
      <Banner backgroundImage={HomeBackgroundImg} />

      <Collapse
        data={fiabiliteText}
        keyword={"Fiabilité"}
        layoutOption={"text"}
      />
      <Collapse data={respectText} keyword={"Respect"} layoutOption={"text"} />
      <Collapse data={serviceText} keyword={"Service"} layoutOption={"text"} />
      <Collapse
        data={securiteText}
        keyword={"Sécurité"}
        layoutOption={"text"}
      />
    </div>
  );
}
