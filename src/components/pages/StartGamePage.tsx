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
    <div
      className="card text-center"
      style={{
        width: "auto",
        margin: "auto",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        transition: "backdrop-filter 0.5s, background-color 0.5s",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
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
