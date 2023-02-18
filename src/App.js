import React from "react";
import "./Assets/main.css";
import List from "./components/List/List";
import Buttons from "./components/Buttons/Buttons";
import Box from "./components/Box/Box";
// Pictures
import SiteLogo from "./Assets/Images/site-logo.svg";

function App() {
  function btnCLick() {
    console.log("Salom");
  };
  return (
    <>
    <header className="site-header">
      <div className="container">
        <div className="header__inner">
          <img src={SiteLogo} width = {100} height = {100} alt="Site logo"></img>
          <div className="header__right">
             <List title1={"Home"} title2={"Schedule"} title3={"Quota"} title4={"Information"}/>
             <Buttons handleClick={btnCLick} title={"Call Center"} />
          </div>
        </div>
      </div>
    </header>
    <main className="site-main">
      <section className="hero-section">
        <div className="container">
          <div className="hero">
            <div className="hero__inner">
              <h2 className="hero__title">Get Your Vaccine, Get Your Health</h2>
              <p className="hero__text">
                There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, 
                by injected humour
              </p>
              <div className="hero__btns">
                <Buttons title={"Get Your Vaccine"}/>
                <Buttons title={"Learn More"}/>
              </div>
            </div>
            <div className="hero__right">
              <div className="hero__boxes">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
              </div>
              <div className="hero__box__right"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default App;