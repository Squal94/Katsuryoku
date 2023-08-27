import React from "react";
import logo from "./../assets/img/LogoKatsuryokuWhite.png";
import { NavLink } from "react-router-dom";

const FixedHeader = () => {
  return (
    <div className="fixedHeaderContainer">
      <nav className="fixedHeaderContainer__nav">
        <ul className="fixedHeaderContainer__nav__ul">
          <li>
            <NavLink to="/">
              <img src={logo} alt="logo du restaurant Katsuryoku " />
            </NavLink>
          </li>
          <li>
            <NavLink to="#">About us</NavLink>
          </li>
          <li>
            <NavLink to="#">Event</NavLink>
          </li>

          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="#">Reservation</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FixedHeader;
