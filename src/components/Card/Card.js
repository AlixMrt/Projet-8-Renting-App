import { Link, useParams } from "react-router-dom";
import "./_card.scss";

export default function Card(property) {
  const { id } = useParams();
  property = property.property;
  return (
    <Link
      to={`./rentedProperty/${property.id}`}
      className="card"
      key={property.id}
      property={property}
    >
      <h2>
        {property.title} {id}
      </h2>
      <img src={property.cover} className={"card-img"} alt="property" />
    </Link>
  );
}
