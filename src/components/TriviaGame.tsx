import React, { useState } from "react";
import Card from "./Card";
import { AnswerData } from "./Card";
import { questions } from "./Questions";

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

  const calculateScore = (): number => {
    let correctAnswers = 0;
    for (const answer of userAnswers.values()) {
      if (answer?.correct) {
        correctAnswers++;
      }
    }
    return correctAnswers;
  };

  const isGameOver = (): boolean => {
    return currentQuestionIndex === questions.length - 1;
  };
  return (
    <div>
      {isGameOver() ? (
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
        </div>
      ) : (
        <>
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
              disabled={
                currentQuestionIndex === questions.length - 1 || !isAnswered
              }
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              Next Question
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TriviaGame;
