// StartPage.tsx
import React, { useState } from "react";
import TriviaGame from "./TriviaGame";
import { AnswerData } from "./Card";
import { questions } from "./Questions";

const StartPage: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false); // Initialize to false

  const startGame = () => {
    // Function to start game
    setGameStarted(true);
    setCurrentQuestionIndex(0);
    setIsAnswered(false); // Reset isAnswered state
  };

  const handleAnswerSelect = (answer: AnswerData) => {
    // Funcation to handle user selecting an answer in TriviaGame
    if (!isAnswered) {
      setIsAnswered(true); // Set isAnswered state to true after selecting an answer
    }
  };

  const goToPreviousQuestion = () => {
    // Function to handle going to previous question
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setIsAnswered(false); // Reset isAnswered state when moving to previous question
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setIsAnswered(false); // Reset isAnswered state when moving to next question
  };

  // Function to handle restarting the game
  const handleRestartGame = () => {
    setGameStarted(false);
    setCurrentQuestionIndex(0);
    setIsAnswered(false); // Reset isAnswered state
  };

  const isGameOver = (): boolean => {
    return currentQuestionIndex === questions.length - 1;
  };

  return (
    <div>
      {!gameStarted && (
        <div className="card text-center">
          <h1>Welcome to Marc's Trivia Game</h1>
          {}
          <button onClick={startGame} className="btn btn-primary">
            Start Game
          </button>
        </div>
      )}
      {gameStarted && (
        <TriviaGame
          currentQuestionIndex={currentQuestionIndex}
          onAnswerSelect={handleAnswerSelect}
          goToPreviousQuestion={goToPreviousQuestion}
          goToNextQuestion={goToNextQuestion}
          isAnswered={isAnswered}
        />
      )}
      {gameStarted && isGameOver()}{" "}
      {/* Display game over screen only if game started */}
      {isGameOver() && (
        <div>
          <button onClick={handleRestartGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default StartPage;
