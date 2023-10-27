import "./_rented-property.scss";

import properties from "../../utils/logements.json";
import Accordion from "../../components/Accordion/Accordion";

import Stars from "../../components/Stars/Stars";
import Carousel from "../../components/Carousel/Carousel";

import { useParams } from "react-router-dom";

export default function RentedProperty() {
  const { id } = useParams().id;

  let property = properties[id];

  // Ici j'essaye de recuperer l'id du logement grace a useParams
  // Cela ne fonctionne pas :

  console.log({ id });
  console.log(property);

  const equipmentsArray = property.equipments;
  const descriptionText = property.description;
  const tagsArray = property.tags;

  const Equipements = "Equipements";
  const Description = "Description";
  return (
    <div className="rentedProperty">
      <Carousel picturesArray={property.pictures} />

      <div className="info-container">
        <div className="property-info">
          <h1>{property.title}</h1>
          <h2>{property.location}</h2>
          <div className="tags">
            {" "}
            {tagsArray.map((tag, i) => {
              return (
                <span key={i} className="tag">
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        <div className="host-info">
          <div className="infos-rating">
            <Stars rating={property.rating} />
          </div>

          <div className="infos-profile">
            <p>{property.host.name}</p>
            <img src={property.host.picture} alt="host" />
          </div>
        </div>
      </div>

      <div className="property-description">
        <Accordion
          data={equipmentsArray}
          keyword={Equipements}
          layoutOption={"list"}
        />
        <Accordion
          data={descriptionText}
          keyword={Description}
          layoutOption={"text"}
        />
      </div>
    </div>
  );
}
