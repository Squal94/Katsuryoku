import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getReseauData } from "../feature/reseaux.slice";
import PathReseau from "./PathReseau";
import logo from "./../assets/img/LogoKatsuryoku.png";
import label from "./../assets/img/Label-Rouge_image_full.png";
import green from "./../assets/img/GRA_3S.png";
import michelin from "./../assets/img/E-label_Red-1080x675.png";
import bg from "./../assets/img/pexels-ivan-samkov-8951176.jpg";

const Footer = () => {
  const disptach = useDispatch();
  const reseauxData = useSelector((state) => state.reseaux.reseaux);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reseaux")
      .then((res) => disptach(getReseauData(res.data)));
  }, [disptach]);
  return (
    <div className="footerContainer">
      <img className="footerContainer--bg" src={bg} alt="Fond d'ecran Sushi" />
      <div className="footerContainer__logo">
        <img src={logo} alt="Logo du restaurant Katsuryoku" />
      </div>
      <div className="footerContainer__content">
        <div className="footerContainer__content__contact">
          <a href="mailto:Katsuryoku@fake.com">Par email </a>
          <p>
            Par Telephone : <br />
            06 07 08 09 09
          </p>
          <p>
            Adresse : <br />
            51 avenue du restaurant 75003
          </p>
        </div>
        <div className="footerContainer__content__certification">
          <h4>Certifications</h4>
          <ul>
            <li>
              <img src={green} alt="certification green restaurant" />
            </li>
            <li>
              <img src={michelin} alt="certification guide michelin" />
            </li>
            <li>
              <img src={label} alt="certification viande label rouge" />
            </li>
          </ul>
        </div>
        <div className="footerContainer__content__reseau">
          {reseauxData && <PathReseau data={reseauxData} />}
        </div>
      </div>
    </div>
  );
};

export default Footer;
