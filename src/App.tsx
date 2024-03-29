import React, { useState } from "react";
import TriviaGame from "./components/pages/TriviaGamePage";
import { AnswerData } from "./components/ui/Card";
import { questions } from "./components/config/Questions";
import StartPage from "./components/pages/StartGamePage";
import GameOverPage from "./components/pages/GameOverPage";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.StartGame); // Initialize to false
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false); // Initialize to false
  const [score, setScore] = useState<number>(0); // Initialize as an empty object with string keys and boolean values

  const startGame = () => {
    // Function to start game
    setCurrentPage(Page.TriviaGame);
    setCurrentQuestionIndex(0);
    setIsAnswered(false); // Reset isAnswered state
  };

  const handleAnswerSelect = (answer: AnswerData) => {
    // Funcation to handle user selecting an answer in TriviaGame
    if (!isAnswered) {
      setIsAnswered(true); // Set isAnswered state to true after selecting an answer
    }
    if (currentQuestionIndex === questions.length - 1) {
      setCurrentPage(Page.GameOver);
    }
    if (answer.correct) {
      setScore(score + 1);
    }
  };

  const goToPreviousQuestion = () => {
    // Function to handle going to previous question
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setIsAnswered(false); // Reset isAnswered state when moving to previous question
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex !== questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false); // Reset isAnswered state
    } else {
      // Last question reached, go to GameOverPage
      setCurrentPage(Page.GameOver);
    }
  };

  // Function to handle restarting the game
  const handleRestartGame = () => {
    setCurrentPage(Page.StartGame);
    setCurrentQuestionIndex(0);
    setIsAnswered(false); // Reset isAnswered state
  };

  return (
    <div>
      {currentPage === Page.StartGame && (
        <StartPage clickedStartGame={startGame} />
      )}
      {currentPage === Page.TriviaGame && (
        <TriviaGame
          currentQuestionIndex={currentQuestionIndex}
          onAnswerSelect={handleAnswerSelect}
          goToPreviousQuestion={goToPreviousQuestion}
          goToNextQuestion={goToNextQuestion}
          isAnswered={isAnswered}
        />
      )}
      {currentPage === Page.GameOver && (
        <GameOverPage
          currentQuestionIndex={currentQuestionIndex}
          score={score}
          questions={questions}
          handleRestartGame={handleRestartGame}
        />
      )}
    </div>
  );
};

enum Page {
  StartGame,
  TriviaGame,
  GameOver,
}

export default App;
