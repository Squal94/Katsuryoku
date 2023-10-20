import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FixedHeader from "../components/FixedHeader";
import logoMenu from "./../assets/img/logoMenu.png";
import menuBg from "./../assets/img/pexels-roman-odintsov-5338138.jpg";
import { getPlatsdata } from "../feature/plats.slice";
import NavMenu from "../components/NavMenu";
import Card from "../components/Card";

const Menu = () => {
  const positionScroll = useSelector((state) => state.general.scrollPosition);
  const selectedMenu = useSelector((state) => state.plats.plats);
  const category = useSelector((state) => state.plats.category);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://squal94.github.io/Katsuryoku/${category.toLowerCase()}`)
      .then((res) => dispatch(getPlatsdata(res.data)));
  }, [category, dispatch]);
  return (
    <div className="menuContainer">
      <Header />
      {positionScroll && positionScroll !== "initial" ? <FixedHeader /> : null}
      <main className="menuContainer__main">
        <div className="menuContainer__main--bg">
          <img src={menuBg} alt="fond d'ecran du menu" />
        </div>
        <img
          className="menuContainer__main--logo"
          src={logoMenu}
          alt=" Logo menu restaurant"
        />
        <h1>Discovery</h1>
        <div className="menuContainer__main__menu">
          <NavMenu />
          <div>
            {selectedMenu &&
              selectedMenu.map((card) => {
                return <Card key={card.id} data={card && card} />;
              })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
