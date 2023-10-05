import { Link } from "react-router-dom";
import "./_card.scss";

export default function Card(property) {
  property = property.property;
  return (
    <Link
      to="./rentedProperty"
      className="card"
      key={property.id}
      property={property}
    >
      <h2>{property.title}</h2>
      <img src={property.cover} className={"card-img"} alt="property" />
    </Link>
  );
}
