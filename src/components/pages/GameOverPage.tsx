import React, { useState } from "react";

interface GameOverPageProps {
  currentQuestionIndex: number;
  score: number;
  questions: any[];
  handleRestartGame: () => void;
}

const GameOverPage: React.FC<GameOverPageProps> = ({
  currentQuestionIndex,
  score,
  questions,
  handleRestartGame,
}) => {
  //   const calculateScore = (): number => {
  //     let correctAnswers = 0;
  //     const answerKeys = Object.keys(score); // Array of answer keys
  //     for (let i = 0; i < answerKeys.length; i++) {
  //       const key = answerKeys[i];
  //       if (score[key]) {
  //         correctAnswers++;
  //       }
  //     }
  //     return correctAnswers;
  //   };

  return (
    <div>
      <h2>Game Over!</h2>
      <p>
        You answered {score} out of {questions.length} questions correctly.
      </p>
      <p>Percentage Correct: {Math.round((score / questions.length) * 100)}%</p>
      <button onClick={handleRestartGame}>Restart Game</button>
    </div>
  );
};

export default GameOverPage;
