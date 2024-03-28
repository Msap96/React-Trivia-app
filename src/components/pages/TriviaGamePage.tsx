import React, { useState } from "react";
import Card from "../ui/Card";
import { AnswerData } from "../ui/Card";
import { questions } from "../config/Questions";

interface TriviaGameProps {
  currentQuestionIndex: number;
  onAnswerSelect: (answer: AnswerData) => void;
  goToPreviousQuestion: () => void;
  goToNextQuestion: () => void;
  isAnswered?: boolean;
}

const TriviaGame: React.FC<TriviaGameProps> = ({
  currentQuestionIndex,
  onAnswerSelect,
  goToPreviousQuestion,
  goToNextQuestion,
  isAnswered,
}) => {
  const [userAnswers, setUserAnswers] = useState<
    Map<number, AnswerData | null>
  >(
    new Map() // Initialize an empty map to store user answers
  );

  const handleAnswerSelection = (answer: AnswerData) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = new Map(prevAnswers);
      updatedAnswers.set(currentQuestionIndex, answer);
      return updatedAnswers;
    });
    onAnswerSelect(answer); // Pass AnswerData to parent component
    //setIsAnswered(true);
  };

  const getSelectedAnswer = (): AnswerData | null => {
    return userAnswers.get(currentQuestionIndex) || null;
  };

  return (
    <div>
      <Card
        category={questions[currentQuestionIndex].category}
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers.map((answer) => ({
          label: answer,
          selected: answer === getSelectedAnswer()?.label,
          correct: answer === questions[currentQuestionIndex].correctAnswer,
        }))}
        onAnswerSelect={handleAnswerSelection}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          style={{ marginRight: "10px", marginTop: "10px" }}
        >
          Previous Question
        </button>
        <button
          onClick={goToNextQuestion}
          style={{ marginLeft: "10px", marginTop: "10px" }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default TriviaGame;
