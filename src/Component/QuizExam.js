import React, { useState } from "react";

export default function QuizExam() {
  const [Quizs, setQuiz] = useState([
    {
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      Options: ["Python", "C", "Jakarta", "Java"],
    },
    {
      question:
        "The numbering system with a radix of 16 is more commonly referred to as ",
      correct_answer: "Hexidecimal",
      Options: ["Binary", "Hexidecimal", "Duodecimal", "Octal"],
    },
    {
      question: "What does LTS stand for in the software market?",
      correct_answer: "Long Term Support",
      Options: [
        "Long Taco Service",
        "Ludicrous Transfer Speed",
        "Long Term Support",
        "Ludicrous Turbo Speed",
      ],
    },
    {
      question: "What language does Node.js use?",
      correct_answer: "JavaScript",
      Options: ["JavaScript", "Java", "Java Source", "Joomla Source Code"],
    },
    {
      question: "This mobile OS held the largest market share in 2012.",
      correct_answer: "iOS",
      Options: ["iOS", "Android", "BlackBerry", "Symbian"],
    },
    {
      question: "How many values can a single byte represent?",
      correct_answer: "256",
      Options: ["8", "1", "256", "1024"],
    },
    {
      question: "On what medium was &quot;Clannad&quot; first created?",
      correct_answer: "Visual novel",
      Options: ["Anime", "Manga", "Light novel", "Visual novel"],
    },
  ]);
  const [Count, setCount] = useState(0);
//   const [Score, setScore] = useState(0);

  const handlePrev = () => {
    if (Count > 0) {
      setCount(Count - 1);
    }
  };
  const handleNext = (event) => {
    if (Count < Quizs.length - 1) {
      setCount(Count + 1);
    }
  };
//   const handleAnswer = (event) => {
//     if (event.target.value === Quizs[Count].correct_answer) {
//       setScore(Score + 1);
//     }
//   };

//   handleAnswer();
  return (
    <>
      <br />
      <h3>{Quizs[Count].question}</h3>
      <br />
      <input type="radio" name="option" value={Quizs[Count].Options[0]} />
      <label> {Quizs[Count].Options[0]}</label>
      <br />
      <input type="radio" name="option" value={Quizs[Count].Options[1]} />
      <label> {Quizs[Count].Options[1]}</label>
      <br />
      <input type="radio" name="option" value={Quizs[Count].Options[2]} />
      <label> {Quizs[Count].Options[2]}</label>
      <br />
      <input type="radio" name="option" value={Quizs[Count].Options[3]} />
      <label> {Quizs[Count].Options[3]}</label>
      <br />
        {/* <h1>{Score}</h1> */}
      <br />

      <button className="handlenon" onClick={handlePrev} disabled={Count == 0}>
        Prev
      </button>
      <button className="handlenon" onClick={handleNext} disabled={Count == Quizs.length - 1}>
        Next
      </button>
    </>
  );
}
