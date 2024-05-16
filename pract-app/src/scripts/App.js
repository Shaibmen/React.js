import React from 'react';
import "../styles/App.css";
import Header from './Header';
import Main from './Main';
import Zalupa from './Zalupa';
import linia from "../images/Rectangle 2.png"


class App extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <Main />
        <div className="govno_linia">
          <img className="linia" src={linia} alt="" />
        </div>
        <Zalupa />
      </div>
    );
  }
}

export default App