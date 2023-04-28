import React, { useState } from "react";

function QuestionPage(props) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextClick = () => {
    if (selectedAnswer === "") {
      alert("Please select an answer.");
      return;
    }
    props.onNext(selectedAnswer);
  };

  return (
    <div>
      <h2>Question {props.questionNumber}</h2>
      {/* <p>{props.question.text}</p> */}
      <button onClick={() => handleAnswerSelect("ekstrovert")}>
        {props.question.ekstrovertText}
      </button>
      {/* <p>{props.question.introvertText}</p> */}
      <button onClick={() => handleAnswerSelect("introvert")}>
        {props.question.introvertText}
      </button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default QuestionPage;
