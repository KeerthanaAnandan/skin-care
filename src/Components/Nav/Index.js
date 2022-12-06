import React from "react";
import logo from "../../Images/lo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ({ isTrue }) {
  // const navigate = useNavigate();
  // const clickHandler = () => {
  //   navigate("/");
  // }
  const changeHandler = (e) => {
    console.log(e.target.value);
    localStorage.setItem("lan", e.target.value);
  };
  return (
    <div className="flex justify-between m-1">
      {/* <Link to="https://www.actualizecenter.com/"> */}
      <div>
        {" "}
        <a href="/" rel="noopener noreferrer">
          {" "}
          {/* <img src={logo} alt="" className="w-2/12" /> */}
          <h3 className="p-3 text-bold text-2xl">Miacosa Cosmetics</h3>
        </a>
      </div>
      {/* <div className="p-1">
        <label class="toggle">
          <input class="toggle-checkbox" type="checkbox" checked />
          <div class="toggle-switch"></div>
          <span class="toggle-label">Bluetooth</span>
        </label>
      </div> */}
      {/* <div class="container">
        <div class="switches-container">
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
          <label for="switchEnglish">English</label>
          <label for="switchGerman">German</label>
          <div class="switch-wrapper">
            <div class="switch">
              <div>English</div>
              <div>German</div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <img onClick={clickHandler} src={logo} alt="" className="w-2/12" /> */}
      {/* </Link> */}
    </div>
  );
}
