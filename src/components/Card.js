import React from "react";

const Card = ({ data }) => {
  return (
    <div className="cardContainer">
      <div className="cardContainer__img">
        <img src={data && data.img} alt={` plat + ${data.nom}`} />
      </div>
      <div className="cardContainer__info">
        <div className="cardContainer__info--content">
          <h2>{data && data.nom}</h2>
          <p>{data && data.description}</p>
        </div>
        <div className="cardContainer__info--price">
          <p>{data && data.prix}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
