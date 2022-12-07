import './index.css';
import React from 'react'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
    index: 1,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
    index: 2,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
    index: 3,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}<br></br>Вы молодец!</h2>
      <button onClick={reload}>Попробовать снова</button>
    </div>
  );
}

function reload(){
  window.location.reload();
}

function Game({step,question, onClickVariant}) {
  const percentage = Math.round((step / questions.length) * 100);



  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text,index) => (
          <li onClick={function(){
            onClickVariant(index)
          }} 
          key={text}>{text}</li>))
        }

      </ul>
      <div className='num'>{question.index}</div>
    </>
  );
}

function App() {
  // Хук
  const [step,setstep] = React.useState(0);

  // Хук - Номер корректного ответа
  const [correct,setCorrect] = React.useState(0);

  // Номер карточки
  const question = questions[step];

  console.log(step)
  

  const onClickVariant = function(index){
    console.log(step, index);
    setstep(step + 1);

    if (index === question.correct){
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {(step != questions.length) ? 
      (<Game question={question} onClickVariant={onClickVariant} step={step}/>) 
      : (<Result correct={correct}/> )}
    </div>
  );
}

export default App;
