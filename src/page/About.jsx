import React from "react";
import logo from "../img/logo.png"
import backpageCat from "../img/backpageCat.png"

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="logo"  />
        <selection  >
          <div className="container">
            
            <div className="info">
            
              <h1>Sobre o projeto</h1><br />
              <p>O vocabulário desempenha um papel vital enquanto você estuda a língua inglesa e especialmente durante o período de preparação para exames. Aumentar o tamanho do seu vocabulário é realmente essencial, para que, se surgir algum tipo de dúvida, você as resolva facilmente devido ao seu grande tamanho de vocabulário em inglês. Alguns alunos podem ter dificuldade em relação à palavra que os deixa confusos, portanto, decidimos fornecer a lista de mais de 2500 palavras para voce praticar . Então, comece a verificar essas listas que incluem uma variedade de itens de nomes de animais, cores, lugares, comida e etc., Isso ajudará você a aumentar seu tamanho de vocabulário em inglês.</p>
              <br /><h1>Por quê?</h1><br />
              <p>Eu criei essa plataforma com o intuito de melhorar o meu ingles e programacao, assim como varias tambem tenho dificuldade em decorar algumas palavras com essa necessidade esse projeto foi desemvolvido para me ajudar e ajudar a outroas pessoas.</p>
              <a type="button" href="/" className="Button">Voltar</a>
            </div>
            <img src={backpageCat} alt="logo" className="backpage" />
          </div>
        </selection>
      </header>
    </div>
    );
}

export default About;