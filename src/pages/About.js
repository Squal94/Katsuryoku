import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import YoutubeEmbed from "../components/YoutubeEmbed";

const About = () => {
  return (
    <div className="aboutContainer">
      <Header />
      <main className="aboutContainer__main">
        <div className="aboutContainer__main--bannerImg">
          <img src="./aboutBanner2.png" alt=" banniere de sushi " />
        </div>
        <section className="aboutContainer__main__history">
          <div className="aboutContainer__main__history--content">
            <h1>Katsuryoku</h1>
            <hr />
            <h2>French and asian food fusion new generation!!!!</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit consectetur molestiae maxime dicta amet molestias
              nemo quia nesciunt? Deserunt voluptatum ullam nesciunt accusantium
              laudantium nemo placeat aspernatur a odio tempore? Nisi delectus
              minima omnis cumque ea veritatis, assumenda, mollitia soluta at
              quaerat dicta eveniet laboriosam quasi vero minus ipsa qui
              similique! Dicta ea neque, quidem repellendus excepturi minima
              veritatis dolore. Aspernatur nulla obcaecati facere ipsa ipsum
              deleniti, ut, et totam illo error quia beatae dolores ex
              cupiditate minus maiores esse aperiam praesentium. Adipisci
              dolorum ex minima rerum impedit. Iste, eius?
            </p>
            <img
              className="aboutContainer__main__history--content--img2"
              src="./logoMenu.png"
              alt="logo du menu Katsuryoku"
            />
          </div>
          <div className="aboutContainer__main__history--img">
            <img src="./pexels-lina-kivaka-1525236.jpg" alt=" plat " />
          </div>
        </section>
        <div className="aboutContainer__main__video">
          <YoutubeEmbed embedId="MgFCKdUtVD8?si=frNnPvB36q2j3Cqv" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
