import React from "react";
import img from "../../Images/q1.png";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <div className=" text-center ">
      <div className="flex bg-primary flex-row flex-wrap p-2 w-7/12 m-auto justify-between items-center rounded-lg">
        <img src={img} alt="" className="md:w-5/12 p-2" />

        <div className="bg-white flex flex-col flex-wrap h-full w-full md:w-6/12 m-auto rounded-lg justify-center items-center  md:p-2">
          <br />
          <p className="text-xl decoration-8 font-bold m-1">
            The Actualize 4 Languages Assessment
          </p>
          <p className="text-md m-1 font-medium">
            Discover your unique make-up. Actualize your life by discovering
            your Actualize Language for personal and leadership development.
          </p>
          <Link to="/actualize-languages-assessment/quiz">
            <button className="p-3 m-1 bg-primary rounded-lg text-white capitalize font-bold custom-single-page-btn-transition">
              START THE QUIZ!
            </button>
          </Link>

          <br />
        </div>
      </div>
    </div>
  );
}
