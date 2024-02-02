// QuizApp.js
import React, { useState } from 'react';

const QuizApp = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
      userAnswer: null,
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
      userAnswer: null,
    },
    // Add more questions as needed
  ]);

  const [score, setScore] = useState(0);

  const handleAnswer = (questionIndex, selectedOption) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].userAnswer = selectedOption;
    setQuestions(newQuestions);
  };

  const calculateScore = () => {
    const newScore = questions.reduce(
      (accumulator, question) =>
        question.userAnswer === question.correctAnswer
          ? accumulator + 1
          : accumulator,
      0
    );
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
                    onChange={() => handleAnswer(index, option)}
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
