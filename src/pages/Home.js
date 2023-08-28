import React from "react";
import Header from "../components/Header";
import mainBg from "./../assets/img/pexels-furkanfdemir-8286766.jpg";
import sallePic from "./../assets/img/pexels-volkan-vardar-3887985.jpg";
import chefPic from "./../assets/img/pexels-ron-lach-8879620.jpg";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import FixedHeader from "../components/FixedHeader";

const Home = () => {
  const positionScroll = useSelector((state) => state.general.scrollPosition);

  const textAppearing = (positionScroll) => {
    const biography = document.querySelector(".home__biography");
    const chef = document.querySelector(".home__chef");
    switch (positionScroll) {
      case "biographySlice":
        biography.style.opacity = 1;
        biography.style.transform = "none";
        break;
      case "chefSlice":
        chef.style.opacity = 1;
        chef.style.transform = "none";
        break;
      default:
    }
  };

  textAppearing(positionScroll);

  return (
    <div className="home">
      <Header />
      {positionScroll && positionScroll !== "initial" ? <FixedHeader /> : null}
      <div className="home__main">
        <div className="home__main__bg">
          <img src={mainBg} alt="" />
        </div>
        <h1 className="home__main__title">
          Découvrez le japonais contemporain
        </h1>
        <p className="home__main__text">
          Une expérience culinaire innovante ancrée dans la tradition japonaise.
        </p>
        <NavLink to="/reservation" className="home__main__btnResa">
          Reservation
        </NavLink>
      </div>
      <div className="home__biography">
        <div className="home__biography__text">
          <h2>Restaurant</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            delectus atque quod facilis molestiae, hic, non at dolorem modi vero
            incidunt perspiciatis fugiat! Ad, tenetur? Doloribus provident
            libero a ab. Quibusdam doloribus alias enim eaque doloremque vero
            esse eveniet. Cum nesciunt fugit amet nam provident! Eveniet eaque
            sint ab iure commodi nostrum inventore quae delectus sapiente amet,
            molestias autem consequuntur? Corrupti magnam earum tenetur natus
            sunt aliquid ratione nulla? Repellendus necessitatibus autem dolore
            fugit ipsum non veniam sapiente pariatur nihil magnam, culpa
            assumenda rerum possimus doloribus laudantium at quia illum. Nulla
            consectetur, veritatis enim quia nesciunt quidem perferendis
            mollitia minima assumenda a culpa distinctio quibusdam reprehenderit
            velit aspernatur qui quas quod? Qui tenetur veritatis rem voluptatem
            quas excepturi eaque eos.
          </p>
        </div>
        <div className="home__biography__img">
          <img src={sallePic} alt="salle du restaurant" />
        </div>
      </div>
      <div className="home__chef">
        <div className="home__chef__text">
          <h2>Chef</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            delectus atque quod facilis molestiae, hic, non at dolorem modi vero
            incidunt perspiciatis fugiat! Ad, tenetur? Doloribus provident
            libero a ab. Quibusdam doloribus alias enim eaque doloremque vero
            esse eveniet. Cum nesciunt fugit amet nam provident! Eveniet eaque
            sint ab iure commodi nostrum inventore quae delectus sapiente amet,
            molestias autem consequuntur? Corrupti magnam earum tenetur natus
            sunt aliquid ratione nulla? Repellendus necessitatibus autem dolore
            fugit ipsum non veniam sapiente pariatur nihil magnam, culpa
            assumenda rerum possimus doloribus laudantium at quia illum. Nulla
            consectetur, veritatis enim quia nesciunt quidem perferendis
            mollitia minima assumenda a culpa distinctio quibusdam reprehenderit
            velit aspernatur qui quas quod? Qui tenetur veritatis rem voluptatem
            quas excepturi eaque eos.
          </p>
        </div>
        <div className="home__chef__img">
          <img src={chefPic} alt="Chef Kotetsu" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
