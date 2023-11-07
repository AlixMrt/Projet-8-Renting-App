import "./_home.scss";

import properties from "../../utils/logements.json";

import Banner from "../../components/Banner/Banner";
import CardGallery from "../../components/CardsGallery/CardsGallery";
import HomeBackgroundImg from "../../assets/images/home_banner-img.png";

export default function Home() {
  return (
    <div className="home">
      <Banner
        backgroundImage={HomeBackgroundImg}
        firstText="Chez vous,"
        secondText="partout et ailleurs"
      />

      <CardGallery properties={properties} />
    </div>
  );
}
