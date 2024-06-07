import React from "react";
import pao from "../img/pao.jpg"
import "../Home.css"
//import TitlebarBelowMasonryImageList from "src/componentes/

function Home() {
  return (
    <div>
      <h2>Esta é a página principal</h2>
      <img src={pao} alt="Pão de Queijo" id="pao"/>
    </div>
  );
}

export default Home;