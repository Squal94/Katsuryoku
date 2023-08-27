import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PathReseau = ({ data }) => {
  const [dataReseaux, setDataReseaux] = useState([]);
  useEffect(() => {
    setDataReseaux(data);
  }, [data]);

  return (
    <div className="pathReseau">
      <ul className="pathReseau__list">
        {dataReseaux.map((reseau) => {
          return (
            <li
              className="pathReseau__list--item"
              key={reseau.title}
              id={reseau.title}
            >
              <NavLink to={reseau.url}>
                <img src={reseau.img} alt={reseau.title} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PathReseau;
