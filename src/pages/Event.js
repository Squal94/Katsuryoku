import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Event = () => {
  return (
    <div>
      <Header />
      <div className="events-container">
        <h2>Upcoming</h2>
        <h4>OUR EVENT</h4>
        <div className="event-grid">
          <div className="event-1 event-left">
            <div className="date">
              <div className="date-content">
                <h6>08</h6>
                <span>July</span>
              </div>
            </div>
            <div className="address">
              <h3>Night Inspirescu Party</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i>Restaurant Resto
                <i className="far fa-clock"></i>10:00pm - 6:00am
              </p>
              <h5>BUY TICKETS</h5>
            </div>
          </div>
          <div className="event-2 event-left">
            <div className="date">
              <div className="date-content">
                <h6>08</h6>
                <span>July</span>
              </div>
            </div>
            <div className="address">
              <h3>DJ RobagRuhme</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i>Restaurant Resto
                <i className="far fa-clock"></i>10:00pm - 6:00am
              </p>
              <h5>BUY TICKETS</h5>
            </div>
          </div>
          <div className="event-3">
            <div className="address">
              <div className="date">
                <div className="date-content">
                  <h6>08</h6>
                  <span>July</span>
                </div>
              </div>
              <h3>Thousands celebrities at Johnnie Night</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i>Restaurant Resto
                <i className="far fa-clock"></i>10:00pm - 6:00am
              </p>
              <h5>BUY TICKETS</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Event;
