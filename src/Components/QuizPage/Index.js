import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const [ref, setRef] = useState(1);
  const [progressPercentage, setProgressPercentage] = useState(2);
  const [showError, setShowError] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question:
        "What is the first thing that comes to your mind when you hear ‘selfcare” ?",
      quesAlt:
        "Was kommt Ihnen als erstes in den Sinn, wenn Sie „Selfcare“ hören?",
      category: "Common",
      options: [
        {
          id: 1,
          op: "Doing Skin care",
          opAlt: "Hautpflege machen",
          isSelected: false,
          score: 1,
          type: "Physical",
        },
        {
          id: 2,
          op: "Doing yoga",
          opAlt: "Yoga machen",
          isSelected: false,
          score: 0.5,
          type: "Spiritual",
        },
        {
          id: 3,
          op: "Reading books",
          opAlt: "Bücher lesen",
          isSelected: false,
          score: 0,
          type: "Mental",
        },
      ],
    },
    {
      id: 2,
      question:
        "If you were given a chance to do any one of the following activities what would you choose ?",
      quesAlt:
        "Wenn Sie die Möglichkeit hätten, eine der folgenden Aktivitäten zu machen, was würden Sie wählen?",

      category: "Common",
      options: [
        {
          id: 1,
          op: "Journal",
          opAlt: "Tagebuch",
          isSelected: false,
          score: 1,
          type: "Emotional",
        },
        {
          id: 2,
          op: "Take a walk / workout",
          opAlt: "Machen Sie einen Spaziergang / trainieren Sie",
          isSelected: false,
          score: 0.5,
          type: "Physical",
        },
        {
          id: 3,
          op: "Spend time with friends ",
          opAlt: "Verbringen Sie Zeit mit Freunden",
          isSelected: false,
          score: 0,
          type: "Social",
        },
      ],
    },
    {
      id: 3,
      question: "If you were given a 100$ , what would you spend it on ?",
      quesAlt: "Wenn du 100€ bekommen würdest, wofür würdest du sie ausgeben?",
      category: "Common",
      options: [
        {
          id: 1,
          op: "Host a party/brunch with loved ones ",
          opAlt: "Veranstalten Sie eine Party/einen Brunch mit Ihren Lieben",
          isSelected: false,
          score: 1,
          type: "Social",
        },
        {
          id: 2,
          op: "buy a course/ go to development class ",
          opAlt: "einen Kurs kaufen/zu einem Entwicklungskurs gehen",
          isSelected: false,
          score: 0.5,
          type: "Practical",
        },
        {
          id: 3,
          op: "See a therapist / buy a journal",
          opAlt:
            "Suchen Sie einen Therapeuten auf / kaufen Sie eine Zeitschrift",
          isSelected: false,
          score: 0,
          type: "Emotional",
        },
      ],
    },
    {
      id: 4,
      question: "What do you do on weekends ?",
      quesAlt: "Was machst du am Wochenende?",
      category: "Common",
      options: [
        {
          id: 1,
          op: "Tidy up living space ",
          opAlt: "Wohnraum aufräumen ",
          isSelected: false,
          score: 1,
          type: "Practical",
        },
        {
          id: 2,
          op: "Visit the museum",
          opAlt: "Besuchen Sie das Museum",
          isSelected: false,
          score: 0.5,
          type: "Mental",
        },
        {
          id: 3,
          op: "Yoga/meditate ",
          opAlt: "Yoga/meditate",
          isSelected: false,
          score: 0,
          type: "Spiritual",
        },
      ],
    },
    //emotional
    {
      id: 5,
      question: "Do you practise Gratitude?",
      quesAlt: "Praktizierst du Dankbarkeit?",
      category: "Emotional",
      options: [
        { id: 1, op: "Yes", opAlt: "Jawohl", isSelected: false, score: 1 },
        {
          id: 2,
          op: "SomeWhat",
          opAlt: "Etwas",
          isSelected: false,
          score: 0.5,
        },
        { id: 3, op: "No", opAlt: "Nein", isSelected: false, score: 0 },
      ],
    },
    //social
    {
      id: 6,
      question: "I spend most of my free time with loved ones",
      quesAlt:
        "Ich verbringe den größten Teil meiner Freizeit mit meinen Lieben",
      category: "Social",
      options: [
        { id: 1, op: "Yes", opAlt: "Jawohl", isSelected: false, score: 1 },
        {
          id: 2,
          op: "SomeWhat",
          opAlt: "Etwas",
          isSelected: false,
          score: 0.5,
        },
        { id: 3, op: "No", opAlt: "Nein", isSelected: false, score: 0 },
      ],
    },
    //mental
    {
      id: 7,
      question:
        "I would rather go to museum/ exhibition than spend time on unproductive things ",
      quesAlt:
        "Ich gehe lieber ins Museum/Ausstellung, als Zeit mit unproduktiven Dingen zu verbringen",
      category: "Mental",
      options: [
        { id: 1, op: "Yes", opAlt: "Jawohl", isSelected: false, score: 1 },
        {
          id: 2,
          op: "SomeWhat",
          opAlt: "Etwas",
          isSelected: false,
          score: 0.5,
        },
        { id: 3, op: "No", opAlt: "Nein", isSelected: false, score: 0 },
      ],
    },
    //physical
    {
      id: 8,
      question:
        "How well you you agree “I do exercise/yoga/dance on daily basics “",
      quesAlt:
        "Wie gut stimmen Sie zu „Ich mache Sport/Yoga/Tanz zu den täglichen Grundlagen“",
      category: "Physical",
      options: [
        { id: 1, op: "Yes", opAlt: "Jawohl", isSelected: false, score: 1 },
        {
          id: 2,
          op: "SomeWhat",
          opAlt: "Etwas",
          isSelected: false,
          score: 0.5,
        },
        { id: 3, op: "No", opAlt: "Nein", isSelected: false, score: 0 },
      ],
    },
    //emotional
    {
      id: 9,
      question: "Do you journal?",
      quesAlt: "Tagebuchst du?",
      category: "Emotional",
      options: [
        { id: 1, op: "Yes", opAlt: "Jawohl", isSelected: false, score: 1 },
        {
          id: 2,
          op: "SomeWhat",
          opAlt: "Etwas",
          isSelected: false,
          score: 0.5,
        },
        { id: 3, op: "No", opAlt: "Nein", isSelected: false, score: 0 },
      ],
    },
    //practical
    {
      id: 10,
      question: "I meal prep / set out  clothes for the week in advance",
      quesAlt:
        "Ich bereite Mahlzeiten vor / lege Kleidung für die Woche im Voraus bereit",
      category: "Practical",
      options: [
        { id: 1, op: "Yes", opAlt: "Jawohl", isSelected: false, score: 1 },
        {
          id: 2,
          op: "SomeWhat",
          opAlt: "Etwas",
          isSelected: false,
          score: 0.5,
        },
        { id: 3, op: "No", opAlt: "Nein", isSelected: false, score: 0 },
      ],
    },
    //social
    {
      id: 11,
      question: "I often find myself talking on the phone / hosting events ",
      quesAlt: "Ich spreche oft am Telefon / moderiere Veranstaltungen",
      category: "Social",
      options: [
        { id: 1, op: "Yes", opAlt: "Jawohl", isSelected: false, score: 1 },
        {
          id: 2,
          op: "SomeWhat",
          opAlt: "Etwas",
          isSelected: false,
          score: 0.5,
        },
        { id: 3, op: "No", opAlt: "Nein", isSelected: false, score: 0 },
      ],
    },
    //physical
    {
      id: 12,
      question: "I like to take bubble bath / nap during my free/personal time",
      quesAlt: "In meiner Freizeit mache ich gerne Schaumbad / Schläfchen",
      category: "Physical",
      options: [
        { id: 1, op: "Yes", opAlt: "Jawohl", isSelected: false, score: 1 },
        {
          id: 2,
          op: "SomeWhat",
          opAlt: "Etwas",
          isSelected: false,
          score: 0.5,
        },
        { id: 3, op: "No", opAlt: "Nein", isSelected: false, score: 0 },
      ],
    },
    //mental
    {
      id: 13,
      question: "I read a lot of books ",
      quesAlt: "Ich lese viele Bücher",
      category: "Mental",
      options: [
        { id: 1, op: "Yes", opAlt: "Jawohl", isSelected: false, score: 1 },
        {
          id: 2,
          op: "SomeWhat",
          opAlt: "Etwas",
          isSelected: false,
          score: 0.5,
        },
        { id: 3, op: "No", opAlt: "Nein", isSelected: false, score: 0 },
      ],
    },
    //practical
    {
      id: 14,
      question:
        "I tidy up the space / spend time on organizing my schedule on my free time",
      quesAlt:
        "Ich räume den Raum auf / verbringe Zeit damit, meinen Zeitplan in meiner Freizeit zu organisieren",
      category: "Practical",
      options: [
        { id: 1, op: "Yes", opAlt: "Jawohl", isSelected: false, score: 1 },
        {
          id: 2,
          op: "SomeWhat",
          opAlt: "Etwas",
          isSelected: false,
          score: 0.5,
        },
        { id: 3, op: "No", opAlt: "Nein", isSelected: false, score: 0 },
      ],
    },
  ]);
  const [count, setCount] = useState(0);
  const inputElement = useRef("1");
  const [lan, setLan] = useState(localStorage.getItem("lan"));
  useEffect(() => {
    console.log(localStorage.getItem("lan"), "locoq");
  }, []);
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
        (val) => val.category === "Physical"
      );
      let filteredSecond = questions.filter((val) => val.category === "Social");
      let filteredThird = questions.filter((val) => val.category === "Voyager");
      let filteredFourth = questions.filter((val) => val.category === "Mental");
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
      <br />
      {lan == "German" ? "germy" : "english"}
      <div className="flex flex-col justify-center items-center m-auto w-7/12 h-100">
        {/* {questions.map((ques) => {
          return ( */}
        <div id="custom-animation" className="w-full">
          {/* question */}

          <div className="text-start m-3 flex flex-col">
            {/* {questions[count].question} &nbsp; */}
            {lan == "German"
              ? questions[count].quesAlt
              : questions[count].question}
            &nbsp;
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
                  {/* <p className="font-normal text-gray-900 ">{op.op}</p> */}
                  <p className="font-normal text-gray-900 ">
                    {lan == "German" ? op.opAlt : op.op}
                  </p>
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
