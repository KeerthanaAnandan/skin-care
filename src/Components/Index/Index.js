import React, { useEffect, useState } from "react";
import img from "../../Images/main-img.jpg";

import { Link } from "react-router-dom";
export default function Index() {
  const [lan, setLan] = useState("English");
  useEffect(() => {
    console.log(localStorage.getItem("lan"), "loco");
  }, []);
  const changeHandler = (e) => {
    console.log(e.target.value);
    localStorage.setItem("lan", e.target.value);
    setLan(e.target.value);
  };
  return (
    <div className=" text-center ">
      <div className="flex justify-between m-1">
        {/* <Link to="https://www.actualizecenter.com/"> */}
        <div>
          {" "}
          <a
            href="https://miacosa.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {/* <img src={logo} alt="" className="w-2/12" /> */}
            <h3 className="p-3 text-bold text-2xl">Miacosa</h3>
          </a>
        </div>
        {/* <div className="p-1">
        <label className="toggle">
          <input className="toggle-checkbox" type="checkbox" checked />
          <div className="toggle-switch"></div>
          <span className="toggle-label">Bluetooth</span>
        </label>
      </div> */}
        <div className="container">
          <div className="switches-container">
            <input
              type="radio"
              id="switchEnglish"
              name="switchPlan"
              value="English"
              checked="checked"
              onChange={changeHandler}
            />
            <input
              type="radio"
              id="switchGerman"
              name="switchPlan"
              value="German"
              onChange={changeHandler}
            />
            <label htmlFor="switchEnglish">English</label>
            <label htmlFor="switchGerman">German</label>
            <div className="switch-wrapper">
              <div className="switch">
                <div>English</div>
                <div>German</div>
              </div>
            </div>
          </div>
        </div>
        {/* <img onClick={clickHandler} src={logo} alt="" className="w-2/12" /> */}
        {/* </Link> */}
      </div>
      <div className="w-11/12 m-auto flex flex-col md:flex-row flex-wrap justify-around items-center p-7 ">
        <div className="flex bg-primary flex-col flex-wrap p-2 w-10/12 md:w-6/12  mx-1 mb-5 justify-between items-center rounded-lg">
          <p className="text-3xl decoration-8 font-bold m-1">
            {lan == "English"
              ? "What is your self care type ?"
              : "Was ist Ihr Self-Care-Typ?"}
          </p>
          <br />
          <img src={img} alt="" className="md:w-10/12 " />

          <div className=" flex flex-col flex-wrap h-full w-full md:w-11/12 m-auto rounded-lg justify-center items-center  md:p-2">
            <br />

            <p className="text-md m-1 font-medium">
              {lan == "English"
                ? "It is important to take time htmlFor yourself and find clarity. The most important relationship is the one you have with yourself."
                : "Es ist wichtig, sich Zeit für sich selbst zu nehmen und Klarheit zu finden. Das Die wichtigste Beziehung ist die zu sich selbst."}
            </p>
            <p>
              {lan == "English"
                ? "Take this quick quiz to find out what type of self-care you need and make the most use of it."
                : "Nehmen Sie an diesem kurzen Quiz teil, um herauszufinden, welche Art von Selbstfürsorge Sie benötigen und das Beste daraus machen."}
            </p>
            <Link to="/quiz" className="w-full text-center">
              <button className="p-3 m-1 w-full text-white text-center  capitalize font-bold  custom-btn-transistion-primary">
                {lan == "English" ? "TAKE QUIZ !" : "MACHEN SIE QUIZ !"}
              </button>
            </Link>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
