import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Reservation = () => {
  return (
    <div className="reservation">
      <Header />
      <main className="reservationContainer">
        <div className="form-content">
          <div className="hours">
            <div className="hours-content">
              <h3>Time</h3>
              <h4>OPEN</h4>
              {/* <img src="./assets/img/ic-plate.png" alt="icon-plate" /> */}
              <h5>monday - friday</h5>
              <p>7AM - 11AM (Breakfast)</p>
              <p>11AM - 10PM (Lunch/Dinner)</p>
              <h5>saturday / sunday</h5>
              <p>8AM - 1PM (Brunch)</p>
              <p>1PM - 9PM (Lunch/Dinner)</p>
              <h5>+3 7 58 59 56 55</h5>
            </div>
          </div>
          <div className="form-infos">
            <div className="form-infos-container">
              <h2>Reservation</h2>
              <h3>ONLINE BOOKING</h3>
              {/* <img src="./assets/img/ic-plate.png" alt="icon-plate" /> */}
              <div className="form-inputs">
                <select name="" id="people">
                  <option value="">People</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                <input type="date" id="booking-date" name="booking-date" />
                <input
                  type="time"
                  id="booking-time"
                  name="booking-time"
                  min="07:00"
                  max="21:00"
                />
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
                <input type="email" placeholder="Email" />
              </div>
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reservation;
