import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Erreur from "./pages/Erreur";
import Menu from "./pages/Menu";
import { useDispatch, useSelector } from "react-redux";
import { scrollPosition } from "./feature/general.slice";

const App = () => {
  const dispatch = useDispatch();
  // Genere l'etat du state pour la position de la scrollbar
  window.addEventListener("scroll", () => {
    let windowScrollPourcent =
      (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (windowScrollPourcent >= 0.5 && windowScrollPourcent < 0.6) {
      dispatch(scrollPosition("reduceNav"));
    } else if (windowScrollPourcent >= 0.6 && windowScrollPourcent < 0.75) {
      dispatch(scrollPosition("biographySlice"));
    } else if (windowScrollPourcent >= 0.75) {
      dispatch(scrollPosition("chefSlice"));
    } else {
      dispatch(scrollPosition("initial"));
    }
  });
  // Utilisation du state scrollPosition pour faire apparaitre la nav fixed

  const positionScroll = useSelector((state) => state.general.scrollPosition);
  const classFixed = document.querySelector(".fixedHeaderContainer");
  useEffect(() => {
    if (positionScroll && positionScroll !== "initial" && classFixed) {
      classFixed.style.opacity = 1;
      classFixed.style.transform = "none";
    }
  }, [classFixed, positionScroll]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
