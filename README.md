

# **UpStudy**



## Up Study is a project I did to facilitate the memorization of some everyday English words, bringing 3 levels of user choice, I didn't want to use a bunch since it was a project just for simple memories, I decided to use a randomization.

###### the project uses the following dependencies

> ```json
>     "@testing-library/jest-dom": "^5.16.4",
>     "@testing-library/react": "^13.3.0",
>     "@testing-library/user-event": "^13.5.0",
>     "audit": "^0.0.6",
>     "fix": "^0.0.6",
>     "react": "^18.2.0",
>     "react-dom": "^18.2.0",
>     "react-icons": "^4.4.0",
>     "react-router-dom": "^6.3.0",
>     "react-scripts": "5.0.1",
>     "sweetalert": "^2.1.2",
>     "using": "^1.0.0-alpha-1",
>     "web-vitals": "^2.1.4",
>     "yarn": "^1.22.19"
> ```



# **Your randomization body:**

`

```javascript
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
```

`



-  The code starts by declaring a variable called randomQuestion.

-  This is the number of questions that will be asked in the quiz.

-  The next line declares a new question, which is randomly generated and added to the end of the list of questions.

-  The next line sets up an if statement that checks whether or not there are any more correct answers left in the current question.

-  If there are no more correct answers, then it sets true for corretos, otherwise it sets false for corretos.

-  The code sets the current question to a random number, and then adds that question to the end of the list.

-  If there are less than 10 questions in the list, it will set the current question to be a new random number.

  

![mobile](https://cdn.discordapp.com/attachments/968186886055137351/1004842442530500658/mobile.png)

##       *The architecture of the questions is very simple*

```javascript
const questions = [
  {
    questionsImg: 'https://cdn.discordapp.com/attachments/968187282010042388/1004042534667948162/1.png',
    answerOpc: [
      { answerText: 'quase', isCorrect: false },
      { answerText: 'uma', isCorrect: true },
      { answerText: 'e', isCorrect: false },
      { answerText: 'nenhum', isCorrect: false },
    ],
    repost: 'uma',
  },
```

![mobile](https://cdn.discordapp.com/attachments/968186886055137351/1004842440554983534/mobile_2.png)

![mobile](https://cdn.discordapp.com/attachments/968186886055137351/1004842440890535986/mobile_3.png)

![mobile](https://media.discordapp.net/attachments/968186886055137351/1004842441175736442/mobile_4.png?width=310&height=628)

![mobile](https://media.discordapp.net/attachments/968186886055137351/1004842441498701956/mobile_5.png?width=310&height=628)