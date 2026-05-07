import "./Quiz.css";
import { data } from "../../assets/data";
import { useRef, useState } from "react";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);

  const [score, setScore] = useState(0);

  const [result, setResult] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const options = [option1, option2, option3, option4];

  const handleAnswer = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("success");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("fail");
        options[question.ans - 1].current.classList.add("success");
        setLock(true);
        setScore((prev) => prev);
      }
    }
  };

  const handleNextQuestion = () => {
    if (index + 1 === data.length) {
      setResult(true);
      return false;
    } else {
      setIndex(++index);
      setQuestion(data[index]);
      options.map((option) => {
        option.current.classList.remove("success");
        option.current.classList.remove("fail");
      });
      setLock(false);
    }
  };

  const reset = () => {
    setResult(false);
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(true);
  };

  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h2>
            You scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <></>
      )}

      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li onClick={(e) => handleAnswer(e, 1)} ref={option1}>
              {question.option1}
            </li>
            <li onClick={(e) => handleAnswer(e, 2)} ref={option2}>
              {question.option2}
            </li>
            <li onClick={(e) => handleAnswer(e, 3)} ref={option3}>
              {question.option3}
            </li>
            <li onClick={(e) => handleAnswer(e, 4)} ref={option4}>
              {question.option4}
            </li>
          </ul>
          <button onClick={() => handleNextQuestion()}>Next</button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
