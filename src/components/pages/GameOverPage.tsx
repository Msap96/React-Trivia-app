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
    <div
      className="card text-center"
      style={{
        width: "400px",
        margin: "auto",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        transition: "backdrop-filter 0.5s, background-color 0.5s",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
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
