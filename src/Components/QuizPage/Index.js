import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const [ref, setRef] = useState(1);
  const [progressPercentage, setProgressPercentage] = useState(2);
  const [showError, setShowError] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "I easily organize myself",
      category: "Administrator",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 2,
      question: "I love excellence and diligence ",
      category: "Administrator",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 3,
      question: "I am analytical and deep",
      category: "Administrator",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 4,
      question: "I am extremely thorough and accurate",
      category: "Administrator",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 5,
      question: "I am intelligent and creative ",
      category: "Administrator",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 6,
      question: "I love traditions",
      category: "Administrator",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 7,
      question: "I have a sensitivity toward others",
      category: "Administrator",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 8,
      question: "I contribute to the community",
      category: "Administrator",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 9,
      question: "I am a perfectionist ",
      category: "Administrator",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 10,
      question: "I can get moody",
      category: "Administrator",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 11,
      question: "I am goal-oriented",
      category: "Visionary",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 12,
      question: "I am a natural leader",
      category: "Visionary",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 13,
      question: "I can easily handle significant tasks ",
      category: "Visionary",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 14,
      question: "I am self-confident",
      category: "Visionary",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 15,
      question: "I can handle opposition",
      category: "Visionary",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 16,
      question: "I am a logical and systematic thinker",
      category: "Visionary",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 17,
      question: "I enjoy a good debate",
      category: "Visionary",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 18,
      question: "I will not back down from arguments",
      category: "Visionary",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 19,
      question: "I can get angry when frustrated",
      category: "Visionary",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 20,
      question: "I finish tasks easily",
      category: "Visionary",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 21,
      question: "I am lively and carefree",
      category: "Voyager",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 22,
      question: "I get bored with everyday tasks",
      category: "Voyager",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 23,
      question: "	I love adventure",
      category: "Voyager",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 24,
      question: "I have an elevated risk tolerance",
      category: "Voyager",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 25,
      question: "I can easily connect with people",
      category: "Voyager",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 26,
      question: "I am a creative ",
      category: "Voyager",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 27,
      question: "I am colorful and artistic ",
      category: "Voyager",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },

    {
      id: 28,
      question: "I easily express myself",
      category: "Voyager",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 29,
      question: "I prefer being outside with people ",
      category: "Voyager",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 30,
      question: "I am the life of the party ",
      category: "Voyager",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },

    {
      id: 31,
      question: "I enjoy interpersonal harmony ",
      category: "Explorer",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 32,
      question: "I have long-term loyalty ",
      category: "Explorer",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 33,
      question: "I easily keep old relationships ",
      category: "Explorer",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 34,
      question: "I easily play the background",
      category: "Explorer",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 35,
      question: "I am mostly calm and relaxed",
      category: "Explorer",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 36,
      question: "I'm not too fond of arguments",
      category: "Explorer",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 37,
      question: "I easily procrastinate",
      category: "Explorer",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 38,
      question: "I avoid conflict",
      category: "Explorer",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 39,
      question: "I mediate peace with others",
      category: "Explorer",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
    {
      id: 40,
      question: "I can scheme my way and get away with it",
      category: "Explorer",
      options: [
        { id: 1, op: "Yes", isSelected: false, score: 1 },
        { id: 2, op: "SomeWhat", isSelected: false, score: 0.5 },
        { id: 3, op: "No", isSelected: false, score: 0 },
      ],
    },
  ]);
  const [count, setCount] = useState(0);
  const inputElement = useRef("1");
  function nextHandler() {
    // console.log(
    //   "idxcheck",
    //   questions[count].options.findIndex((v) => v.isSelected === true),
    //   questions[count].options
    // );
    if (
      questions[count].options.findIndex((v) => v.isSelected === true) !== -1
    ) {
      setShowError(false);
      if (count < questions.length - 1) {
        setCount(count + 1);
      }
    } else setShowError(true);
  }
  const handleClick = (op, topG) => {
    console.log(op, topG);
    setShowError(false);
    console.log(topG.options.findIndex((val) => val.id == op.id));
    let idx = topG.options.findIndex((val) => val.id == op.id);
    questions[count].options.forEach((op) => (op.isSelected = false));
    questions[count].options[idx].isSelected = true;
    console.log("category", topG.category, op.score);
    // op.isSelected = true;

    // console.log(e.currentTarget.textContent);
    // console.log(e.currentTarget);
    // if (e.currentTarget.textContent == "No") {
    //   console.log("BIG NO");
    // } else if (e.currentTarget.textContent == "Yes") {
    //   console.log("BIG YES");
    // } else {
    //   console.log("BIG SW");
    // }
    if (count < questions.length - 1) {
      setCount(count + 1);
      setProgressPercentage(progressPercentage + 2.4);
    } else {
      navigate("/form");
      console.log("elseeeeeeeee");
      let filteredFirst = questions.filter(
        (val) => val.category === "Administrator"
      );
      let filteredSecond = questions.filter(
        (val) => val.category === "Visionary"
      );
      let filteredThird = questions.filter((val) => val.category === "Voyager");
      let filteredFourth = questions.filter(
        (val) => val.category === "Explorer"
      );
      //   let reduced = filteredFirst.filter(
      //     (val) => val.options.findIndex((itm) => itm.isSelected === true) !== -1);
      //.reduce((total = 0, curr) => total + curr.score);
      //   let reduced = filteredFirst.filter((op) =>
      //     op.options.find((v) => v.isSelected === true)
      //   );
      let score1 = 0;
      let score2 = 0;
      let score3 = 0;
      let score4 = 0;
      for (let i = 0; i < filteredFirst.length; i++) {
        for (let j = 0; j < filteredFirst[i].options.length; j++) {
          if (filteredFirst[i].options[j].isSelected) {
            score1 = score1 + filteredFirst[i].options[j].score;
          }
        }
      }
      for (let i = 0; i < filteredSecond.length; i++) {
        for (let j = 0; j < filteredSecond[i].options.length; j++) {
          if (filteredSecond[i].options[j].isSelected) {
            score2 = score2 + filteredSecond[i].options[j].score;
          }
        }
      }
      for (let i = 0; i < filteredThird.length; i++) {
        for (let j = 0; j < filteredThird[i].options.length; j++) {
          if (filteredThird[i].options[j].isSelected) {
            score3 = score3 + filteredThird[i].options[j].score;
          }
        }
      }
      for (let i = 0; i < filteredFourth.length; i++) {
        for (let j = 0; j < filteredFourth[i].options.length; j++) {
          if (filteredFourth[i].options[j].isSelected) {
            score4 = score4 + filteredFourth[i].options[j].score;
          }
        }
      }
      localStorage.setItem("Type", "First");
      localStorage.setItem("score1", score1);
      localStorage.setItem("score2", score2);
      localStorage.setItem("score3", score3);
      localStorage.setItem("score4", score4);
      // console.log("score1", score1, (score1 / 40) * 100);
      // console.log("score2", score2, (score2 / 40) * 100);
      // console.log("score3", score3, (score3 / 40) * 100);
      // console.log("score4", score4, (score4 / 40) * 100);
    }
    // console.log(inputElement.current.innerText, "ref");
  };
  const previousHandler = () => {
    setShowError(false);
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="text-center ">
      <div className="flex flex-col justify-center items-start m-auto w-7/12 ">
        {/* {questions.map((ques) => {
          return ( */}
        <div id="custom-animation" className="w-full">
          {/* question */}

          <div className="text-start m-3 flex flex-row">
            {questions[count].question} &nbsp;
            {showError ? (
              <p className="text-red-500">'Select an option'</p>
            ) : (
              ""
            )}
            {/* {ques.question} */}
          </div>
          {/* top     ref={inputElement}*/}
          <div className="flex flex-row flex-wrap justify-center items-center m-auto  w-full">
            {questions[count].options.map((op) => {
              return (
                <div
                  key={op.id}
                  onClick={() => handleClick(op, questions[count])}
                  className={
                    op.isSelected
                      ? "bg-yellow-300 bg-opacity-30 block p-6 w-full md:w-3/12 m-3  rounded-lg border border-gray-200 shadow-md  cursor-pointer"
                      : "block p-6 w-full md:w-3/12 m-3 bg-white rounded-lg border border-gray-200 shadow-md  cursor-pointer "
                  }
                >
                  <p className="font-normal text-gray-900 ">{op.op}</p>
                </div>
              );
            })}
            {/* <div
                  onClick={handleClick}
                  className="block p-6  w-full md:w-3/12 m-3 bg-white rounded-lg border border-gray-200 shadow-md cursor-pointer"
                >
                  <p className="font-normal text-gray-900 ">Some what</p>
                </div>
                <div
                  onClick={handleClick}
                  className="block p-6 w-full md:w-3/12 m-3 bg-white rounded-lg border border-gray-200 shadow-md cursor-pointer"
                >
                  <p className="font-normal text-gray-900 ">No</p>
                </div> */}
          </div>
          <br />
        </div>
        {/* );
        })} */}

        {/* bottom */}
        <div className="flex flex-row w-full justify-between items-center m-auto ">
          {/* left-arrow */}
          <div
            onClick={previousHandler}
            className="w-3/12 md:w-1/12 p-2 m-2 bg-yellow-300 rounded-full bg-opacity-20 cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          {/* progress-bar */}
          <div className="w-6/12 md:w-9/12 bg-yellow-300 bg-opacity-30 rounded-full h-1.5 mb-1 ">
            <div
              className="bg-primary h-1.5 rounded-full "
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          {/* right-arrow */}
          <div
            onClick={nextHandler}
            className="w-3/12 md:w-1/12 p-2 m-2 bg-yellow-300 rounded-full bg-opacity-20 cursor-pointer"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
