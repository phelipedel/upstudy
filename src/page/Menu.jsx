import React from "react";
import menu from "../style/menu.css"
import logo from "../img/logo.png"
import easy from "../img/easy.png"
import medio from "../img/mediu.png"
import hard from "../img/hard.png"


function Menu() {
  return (
    <div className="back">
      <header className="headerapp">
      <img className="logo" src={logo} alt="logo"  />
      <div className="menu-Selec">


      <div className="Basic">
       <img  src={easy} alt="" />
       <h1 className="basic-1">Básico</h1>
       <p>Objetos, números, situações básicas do dia-dia</p>
       <a  type="button" href="/easy" className="ButtonN">COMECAR !</a> 
      </div>
    



      <div className="Inter">
       <img src={medio} alt="" />
       <h1 className="Inter-1">Médio</h1>
       <p>Objetos, lugares, situações e contextos </p>
       <a  type="button" href="/medium" className="ButtonN">COMECAR !</a> 
      </div>


      <div className="Hard">
       <img src={hard} alt="" />
       <h1 className="Hard-1">Avançado</h1>
       <p>Regras,  situações, lugares,contextos </p>
       <a  type="button" href="/hard" className="ButtonN">COMECAR !</a> 
      </div>

      </div>
      </header>
    </div>
  )
}

export default Menu;