import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryChoice } from "../feature/plats.slice";
let i = 0;
const NavMenu = () => {
  const onglets = ["Entree", "Brochette", "Viande", "Poisson", "Boisson"];
  const [menuCategory, setMenuCategory] = useState(onglets[0]);
  const dispatch = useDispatch();

  const handleClickLeft = () => {
    if (i === 0) {
      i = 4;
      setMenuCategory(onglets[i]);
    } else {
      i = i - 1;
      setMenuCategory(onglets[i]);
    }
    dispatch(getCategoryChoice(onglets[i]));
  };
  const handleClickRight = () => {
    if (i < onglets.length - 1) {
      i = i + 1;
      setMenuCategory(onglets[i]);
    } else {
      i = 0;
      setMenuCategory(onglets[i]);
    }
    dispatch(getCategoryChoice(onglets[i]));
  };
  return (
    <div className="menuContainer__main__menu--nav">
      <div
        className="menuContainer__main__menu--nav--left"
        onClick={() => {
          handleClickLeft();
        }}
      >
        <span>&#10092;</span>
      </div>
      <div className="menuContainer__main__menu--nav--affichage">
        <h2>{menuCategory && menuCategory}</h2>
      </div>
      <div
        className="menuContainer__main__menu--nav--right"
        onClick={() => {
          handleClickRight();
        }}
      >
        <span>&#10093;</span>
      </div>
    </div>
  );
};

export default NavMenu;
