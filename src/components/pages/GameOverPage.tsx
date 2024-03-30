import React, { useState } from "react";

interface GameOverPageProps {
  score: number;
  questions: any[];
  handleRestartGame: () => void;
}

const GameOverPage: React.FC<GameOverPageProps> = ({
  score,
  questions,
  handleRestartGame,
}) => {
  const percentageScore = Math.round((score / questions.length) * 100);

  return (
    <div>
      <h2>Game Over!</h2>
      <p>
        You answered {score} out of {questions.length} questions correctly.
      </p>
      <p>Percentage Correct: {percentageScore}%</p>
      <button onClick={handleRestartGame}>Restart Game</button>
    </div>
  );
};

export default GameOverPage;
