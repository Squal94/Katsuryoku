import React from "react";
import logo from "./../assets/img/LogoKatsuryoku.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <nav className="headerContainer__nav">
        <div className="headerContainer__nav__logoResponsive">
          <img src={logo} alt="logo du restaurant Katsuryoku " />
        </div>
        <ul className="headerContainer__nav__ul">
          <li className="accueil">
            <NavLink to="/Katsuryoku/">
              <p>Accueil</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Katsuryoku/about">
              <p>About us</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Katsuryoku/events">
              <p>Event</p>
            </NavLink>
          </li>
          <li className="logoNav">
            <NavLink to="/Katsuryoku/">
              <img src={logo} alt="logo du restaurant Katsuryoku " />
            </NavLink>
          </li>
          <li>
            <NavLink to="/Katsuryoku/menu">
              <p>Menu</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Katsuryoku/reservation">
              <p>Reservation</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
