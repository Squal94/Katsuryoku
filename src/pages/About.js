import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="aboutContainer">
      <Header />
      <main className="aboutContainer__main">
        <div className="aboutContainer__main--bannerImg">
          <img src="" alt="" />
        </div>
        <section className="aboutContainer__main__history">
          <div className="aboutContainer__main__history--img"></div>
          <div className="aboutContainer__main__history--content"></div>
        </section>
        <div className="aboutContainer__main__video"></div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
