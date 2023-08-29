import React from "react";
import logo from "./../assets/img/LogoKatsuryoku.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <nav className="headerContainer__nav">
        <ul className="headerContainer__nav__ul">
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/events">Event</NavLink>
          </li>
          <li className="logoNav">
            <NavLink to="/">
              <img src={logo} alt="logo du restaurant Katsuryoku " />
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservation">Reservation</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
