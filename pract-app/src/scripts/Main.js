import React from 'react';
import '../styles/App.css';
import Group5 from "../images/Group 5.png"
import ScrollDown from "../images/Scroll Down.png"

class Main extends React.Component {
    render() {
      return (
        <main>
          <div className="Preview_main">
            <p className="big_text">We are fully-fledge <br /> desing solutions provider<em className="point">.</em></p>
          </div>
  
          <div className="xyi">
            <p className="small_text">We shape the future of brands <br /> Our expertise is add breathe of freshness into <br /> brandsand make them rule with their niche</p>
            <img className="group" src={Group5} alt="" />
          </div>
  
          <div className="govno_scroll">
            <img className="scroll" src={ScrollDown} alt="" />
          </div>
        </main>
      );
    }
  }

export default Main