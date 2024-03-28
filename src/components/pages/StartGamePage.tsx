import React, { useState } from "react";

interface StartPageProps {
  clickedStartGame: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ clickedStartGame }) => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    clickedStartGame();
  };
  return (
    <div>
      {!gameStarted && (
        <div className="card text-center">
          <h1>Welcome to Marc's Trivia Game</h1>
          <p className="card-text">
            You will be tested on your knowledge of Art, History, Geography and
            Science. Good luck!
          </p>
          {}
          <button onClick={startGame} className="btn btn-primary">
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

export default StartPage;
