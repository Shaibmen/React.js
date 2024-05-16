import React from 'react';
import '../styles/App.css';
import imagess from "../images/image.png"

class Zalupa extends React.Component {
    render() {
      return (
        <div className="zalupa">
          <div className="daynizm">
            <p className="pupa">Our Work Is Deverse. <br /> Take A Look.</p>
            <a href="#"><img src={imagess} alt="" width="300" height="100" /></a>
          </div>
          <p className="pipisu">This is not just a peice of our work, these are the different shades of our creativety. </p>
        </div>
      );
    }
  }


  export default Zalupa