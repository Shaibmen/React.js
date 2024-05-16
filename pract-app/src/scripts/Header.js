import React from 'react';
import '../styles/App.css';
import Group3 from "../images/Group 3.png"


class Header extends React.Component {
    render() {
      return (
        <header>
          <div className="boba">
            <img className="preview" src={Group3} alt="#" />
          </div>
  
          <div className="Button_header">
            <a className="Home" href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#"> Case Studies</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </header>
      );
    }
  }

export default Header