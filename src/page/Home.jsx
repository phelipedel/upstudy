import React from "react";
import backpage from "../img/backpage.png"
import home from "../style/home.css"
import logo from "../img/logo.png"






function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="logo"  />
        <selection  >
          <div className="container">
            
            <div className="info">
            
              <span className="info-img">
              <h1>Memorise e aumente seu vocabulário </h1><br />
             
              </span>
              <p>O vocabulário desempenha um papel vital enquanto você estuda a língua inglesa e especialmente durante o período de preparação para exames. Com isso separamos diversas palavras para você aumentar seu  vocabulário e também ajudar a entender as diferentes palavras e frases do idioma.</p>
              <a type="button" href="/menu" className="Button">VAMOS LA </a>
            </div>
            <img src={backpage} alt="logo" className="backpage" />
            <a  type="button" href="/about" className="buttonabout">Sobre</a> 
            
          </div>
        </selection>
      </header>
    </div>
  );

}

export default Home;
