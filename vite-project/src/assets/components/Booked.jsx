import React from 'react';
import "../components/Booked.css"
import home from "../home.jpg"
import download from "../download.jpg"
import logo from "../logo.jpg"
const Booked = () => {
  return (
    <div>
      <div className='header'>
        <div><img src={logo} alt="logo" className='logo'/></div>
        <div className='heading'><h1>Booked Slots</h1></div>
      </div>
      <div className="boxes-container">
        <div className="box">
          <img src={download} alt="image" className="box-image" />
          <p>Laundry<br/>Vazhekulam House<br/>vazhakala<br/>3pm-6pm</p>
        </div>
        <div className="box">
          <img src={download} alt="image" className="box-image" />
          <p>Laundry<br/>Pavithram<br/>Kanjiramattom<br/>4pm-6pm</p>
        </div>
        <div className="box">
          <img src={home} alt="image" className="box-image" />
          <p>Mess Food<br/>Biju Nivas<br/>aluva<br/>8am-10am</p>
        </div>
      </div>
    </div>
  );
}

export default Booked;
