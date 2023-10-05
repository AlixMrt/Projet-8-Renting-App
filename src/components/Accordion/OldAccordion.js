import "./_accordion.scss";

import { useState } from "react";

export default function Accordion(data) {
  data = data.data;
  console.log(data);
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <div className="item" key={i}>
          <div className="title" onClick={() => toggle(i)}>
            <h2>{item.keyword}</h2>
            <img
              src={require("../../assets/logo/arrow-bottom.png")}
              alt="bottom arrow"
              className={
                selected === i ? "bottom-arrow active" : "bottom-arrow"
              }
            />
          </div>
          <div className={selected === i ? "content show" : "content"}>
            <p> {item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
