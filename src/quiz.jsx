import { useState } from 'react';
import { ques }   from './question';

const QuizApp = () => {
  const [questions, setQuestions] = useState(ques);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionIndex, selectedOption) => {
    console.log("questionIndex --->", questionIndex);
    console.log("selectedOption --->", selectedOption);
    const newQuestions = [...questions];
    console.log("newQuestions --->", newQuestions);
    newQuestions[questionIndex].userAnswer = selectedOption;
    setQuestions(newQuestions);
  };

const calculateScore = () => {
  const newScore = questions.reduce((accumulator, question) => {
    if (question.userAnswer === question.correctAnswer) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
  setScore(newScore);
};

  return (
    <div>
      <h1>Quiz App</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={question.userAnswer === option}
                    onChange={() => {
                      // console.log(`question-${index}`);
                      // console.log(option);
                      handleAnswer(index, option);
                    }}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={calculateScore}>Submit Answers</button>
      {score !== null && (
        <div>
          <h2>Your Score: {score}/{questions.length}</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question.userAnswer === question.correctAnswer ? (
                  <span style={{ color: 'green' }}>Correct</span>
                ) : (
                  <span style={{ color: 'red' }}>Incorrect</span>
                )}
                : {question.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
