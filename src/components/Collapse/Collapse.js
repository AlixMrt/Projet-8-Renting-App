import "./_collapse.scss";

import { useState } from "react";

export default function Collapse({ data, keyword, layoutOption }) {
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive);
  };

  if (layoutOption === "text") {
    return (
      <div className="collapse">
        <div className="item">
          <div className="title" onClick={ToggleClass}>
            <h2>{keyword}</h2>
            <img
              src={require("../../assets/logo/arrow-bottom.png")}
              alt="bottom arrow"
              className={isActive ? "bottom-arrow active" : "bottom-arrow"}
            />
          </div>
          <div className={isActive ? "content show" : "content"}>
            <p> {data}</p>
          </div>
        </div>
      </div>
    );
  } else if (layoutOption === "list") {
    return (
      <div className="collapse">
        <div className="item">
          <div className="title" onClick={ToggleClass}>
            <h2>{keyword}</h2>
            <img
              src={require("../../assets/logo/arrow-bottom.png")}
              alt="bottom arrow"
              className={isActive ? "bottom-arrow active" : "bottom-arrow"}
            />
          </div>
          <div className={isActive ? "content show" : "content"}>
            <ul>
              {data.map((equipement, i) => {
                return <li key={i}>{equipement}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    console.log(layoutOption);
    console.log("Bugging !!!");
  }
}
