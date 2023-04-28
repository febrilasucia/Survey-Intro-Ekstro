import React, { useState } from "react";
import StartPage from "./component/StartPage";
import QuestionPage from "./component/QuestionPage";
import ResultPage from "./component/ResultPage";
import { questions } from "./data";

const Survey = () => {
  const [currentPage, setCurrentPage] = useState("start");
  const [answers, setAnswers] = useState([]);
  const [introvertCount, setIntrovertCount] = useState(0);
  const [extrovertCount, setExtrovertCount] = useState(0);

  const handleStart = () => {
    setCurrentPage("question1");
  };

  const handleNext = (answer) => {
    setAnswers([...answers, answer]);
    if (answer === "introvert") {
      setIntrovertCount(introvertCount + 1);
    } else {
      setExtrovertCount(extrovertCount + 1);
    }
    const questionIndex = parseInt(currentPage.replace("question", ""), 10);
    if (questionIndex < 5) {
      setCurrentPage(`question${questionIndex + 1}`);
    } else {
      setCurrentPage("result");
    }
  };

  return (
    <div className="flex flex-col items-center">
      {currentPage === "start" && <StartPage onStart={handleStart} />}
      {currentPage.includes("question") && (
        <QuestionPage
          question={
            questions[parseInt(currentPage.replace("question", ""), 10) - 1]
          }
          onNext={handleNext}
        />
      )}
      {currentPage === "result" && (
        <ResultPage
          introvertCount={introvertCount}
          extrovertCount={extrovertCount}
        />
      )}
    </div>
  );
};

export default Survey;
