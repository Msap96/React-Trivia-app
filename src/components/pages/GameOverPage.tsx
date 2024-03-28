import React, { useState } from "react";

interface GameOverPageProps {
  currentQuestionIndex: number;
  userAnswers: { [key: string]: boolean };
  questions: any[];
  handleRestartGame: () => void;
}

const GameOverPage: React.FC<GameOverPageProps> = ({
  currentQuestionIndex,
  userAnswers,
  questions,
  handleRestartGame,
}) => {
  const calculateScore = (): number => {
    let correctAnswers = 0;
    const answerKeys = Object.keys(userAnswers); // Array of answer keys
    for (let i = 0; i < answerKeys.length; i++) {
      const key = answerKeys[i];
      if (userAnswers[key]) {
        correctAnswers++;
      }
    }
    return correctAnswers;
  };

  return (
    <div>
      <h2>Game Over!</h2>
      <p>
        You answered {calculateScore()} out of {questions.length} questions
        correctly.
      </p>
      <p>
        Percentage Correct:{" "}
        {Math.round((calculateScore() / questions.length) * 100)}%
      </p>
      <button onClick={handleRestartGame}>Restart Game</button>
    </div>
  );
};

export default GameOverPage;
