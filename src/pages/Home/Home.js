import "./_home.scss";

import properties from "../../utils/logements.json";
// import BannerHome from "../../components/Banner-home/Banner-home";
import Banner from "../../components/Banner/Banner";
import CardGallery from "../../components/CardsGallery/CardsGallery";

export default function Home() {
  return (
    <div className="home">
      <Banner
        backgroundImage="(../../assets/images/IMG.png)"
        firstText="Chez vous,"
        secondText="partout et ailleurs"
      />

      <CardGallery properties={properties} />
    </div>
  );
}
