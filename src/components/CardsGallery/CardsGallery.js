import "./_cards-gallery.scss";
import Card from "../Card/Card";

export default function CardGallery(properties) {
  properties = properties.properties;
  return (
    <div className="cards-gallery">
      {properties.map((property) => (
        <Card property={property} />
      ))}
    </div>
  );
}
