import "./_about.scss";

import BannerAbout from "../../components/Banner-about/Banner-about";

import Accordion from "../../components/Accordion/Accordion";

import dataAbout from "../../utils/dataAbout.json";

const fiabiliteText = dataAbout[0].description;
const respectText = dataAbout[1].description;
const serviceText = dataAbout[2].description;
const securiteText = dataAbout[3].description;

export default function About() {
  return (
    <div className="about">
      <BannerAbout />

      <Accordion
        data={fiabiliteText}
        keyword={"Fiabilité"}
        layoutOption={"text"}
      />
      <Accordion data={respectText} keyword={"Respect"} layoutOption={"text"} />
      <Accordion data={serviceText} keyword={"Service"} layoutOption={"text"} />
      <Accordion
        data={securiteText}
        keyword={"Sécurité"}
        layoutOption={"text"}
      />
    </div>
  );
}
