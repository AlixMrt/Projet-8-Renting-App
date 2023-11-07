import "./_rented-property.scss";

import properties from "../../utils/logements.json";
import Collapse from "../../components/Collapse/Collapse";

import Stars from "../../components/Stars/Stars";
import SlideShow from "../../components/SlideShow/SlideShow";

import { useParams } from "react-router-dom";

export default function RentedProperty() {
  const { id } = useParams();

  function getIndex(value, arr, prop) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  }
  const currIndex = getIndex(id, properties, "id");
  const property = properties[currIndex];

  const equipmentsArray = property.equipments;
  const descriptionText = property.description;
  const tagsArray = property.tags;

  const Equipements = "Equipements";
  const Description = "Description";
  return (
    <div className="rentedProperty">
      <SlideShow picturesArray={property.pictures} />
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
        <Collapse
          data={equipmentsArray}
          keyword={Equipements}
          layoutOption={"list"}
        />
        <Collapse
          data={descriptionText}
          keyword={Description}
          layoutOption={"text"}
        />
      </div>
    </div>
  );
}
