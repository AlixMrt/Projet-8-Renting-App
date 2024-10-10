import { Link, useParams } from "react-router-dom";
import "./_card.scss";

export default function Card(props) {
  const { id } = useParams();
  let property = props.property;
  return (
    <Link
      to={`./rentedProperty/${property.id}`}
      className="card"
      key={property.id}
      property={property}
    >
      <div className="card_overlay"></div>
      <h2>
        {property.title} {id}
      </h2>
      <img
        src={property.cover}
        className={"card-img"}
        alt="property"
        loading="lazy"
      />
    </Link>
  );
}
