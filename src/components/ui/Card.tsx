import React, { useState } from "react";

interface CardProps {
  // Interface to define props expected by the Card component
  category: string;
  question: string;
  answers: AnswerData[];
  onAnswerSelect: (answer: AnswerData) => void;
  isAnswered?: boolean;
}

export interface AnswerData {
  // Interface to define the structure of answer data objects
  label: string;
  selected: boolean;
  correct: boolean;
}

const Card: React.FC<CardProps> = ({
  category,
  question,
  answers,
  onAnswerSelect,
}) => {
  const [answered, setAnswered] = useState(false);

  const handleAnswerSelection = (answer: AnswerData) => {
    // Assuming onAnswerSelect updates the selected property for answers
    onAnswerSelect(answer);
    setAnswered(true); // Mark as answered
  };
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
      <div className="card-body">
        <h5
          className="card-title"
          style={{ fontFamily: "Arial", fontSize: "24px" }}
        >
          {category}
        </h5>
        <p className="card-text">{question}</p>
      </div>
      <ul className="list-group list-group-flush custom-list">
        {answers.map((choice, index) => (
          <button
            key={index}
            type="button"
            className="list-group-item btn"
            onClick={() => handleAnswerSelection(choice)}
            style={{
              padding: "10px",
              margin: "10px",
              backgroundColor:
                choice.selected && !choice.correct
                  ? "red" // Incorrect and selected answer
                  : choice.selected
                  ? "lightgreen" // Correct answer
                  : "white", // Unselected answer
              color: choice.selected ? "white" : "black",
            }}
          >
            {String.fromCharCode(65 + index)}. {choice.label}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Card;
