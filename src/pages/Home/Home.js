import "./_home.scss";

import properties from "../../utils/logements.json";
import BannerHome from "../../components/Banner-home/Banner-home";
import CardGallery from "../../components/CardsGallery/CardsGallery";

export default function Home() {
  return (
    <div className="home">
      <BannerHome />
      <CardGallery properties={properties} />
    </div>
  );
}
