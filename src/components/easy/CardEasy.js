
import React, { useState } from 'react';
import questions from './AnswersEasy';
import easy from '../../style/easy.css';
import swal from 'sweetalert';
import { FaHome, FaSmileBeam, FaGlasses, FaCrown } from "react-icons/fa";
import logo from '../../img/logo.png';



function CardEasy() {
  

  
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [corretos, setCorretos] = useState(false);

  const [score, setScore] = useState(0);

  
  const newAnswer = (isCorrect) => {
    if(isCorrect === true){
      swal("Parabéns!", "Você acertou!");
      setScore(score + 1);
      
    }else {
      swal("Errou a respostas correta é : " + questions[currentQuestion].repost);
      
    }
   
    const randomQuestion = Math.floor(Math.random() * questions.length);
    var newQuestions = randomQuestion

    const nextQuestions = currentQuestion + newQuestions;
    if (nextQuestions < questions.length) {
      setCurrentQuestion(randomQuestion);
    }
    // soma de acertos e erros
    if(score === questions.length){
      setCorretos(true);
    } else {
      setCorretos(false);
    }

   
  }
  

  return (
    
    <div className="backG">
      
      <header className="headerr">
      			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
		
				<>
        <img className="logo" src={logo} alt="logo"  /> 

          <span className='Border'>
					<div className='card'>
          <span className='scoreborder'>
          <div className='score'><FaCrown/> SCORE: {score}
          
         
           </div>
          
          </span>
						<div >
						
             
						</div>
             <img className='imgQuestions' src={questions[currentQuestion].questionsImg} />
					</div>
					<div className='buttonBak'>
            {questions[currentQuestion].answerOpc.map((answerOpc)=> (
              <button className='buttonQuestion' onClick={()=> newAnswer(answerOpc.isCorrect)}>{answerOpc.answerText}</button>
            ) )}
					</div>
          <div className='icons'>
           <span><a  href="/"> <FaHome/></a></span>
          <span><a  href="/menu"><FaSmileBeam/></a></span>
          <span><a  href="/about"><FaGlasses/></a></span>
          </div>
          </span>
				</>
			
         
            	
    
      </header>
    </div>
  );
}

export default CardEasy;
