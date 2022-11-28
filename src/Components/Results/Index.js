import React, { useEffect, useState } from "react";
import img1 from "../../Images/q1.png";
import img2 from "../../Images/q2.png";
import img3 from "../../Images/q3.png";
import { Link } from "react-router-dom";
export default function Index() {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([
    "Administrator",
    "Visionary",
    "Voyager",
    "Explorer",
  ]);
  const [types2, setTypes2] = useState([
    "Transformative Leader",
    "Administrative Leader",
    "Emerging Leader",
  ]);
  const [types3, setTypes3] = useState([
    "Master Actualizer",
    "Transitional Actualizer",
    "Emerging Actualizer",
  ]);
  const [successType, setSuccessType] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // if (localStorage.getItem("Type")) {
    //   setCategory(localStorage.getItem("Type"));
    // }

    console.log(localStorage.getItem("Type"));
    setCategory(localStorage.getItem("Type"));
    // if (category === "Second") {

    // } else setTypes(["Administrator", "Visionary", "Voyager", "Explorer"]);
    // console.log(localStorage.getItem("score1"));
    // console.log(localStorage.getItem("score2"));
    // console.log(localStorage.getItem("score3"));
    // console.log(localStorage.getItem("score4"));
    // for (let i = 1; i < 5; i++) {
    //   // setTheArray((prevArray) => [...prevArray, newValue]);
    //   setData((data) => [...data, localStorage.getItem(`score${i}`)]);
    //   console.log("arr", localStorage.getItem(`score${i}`));
    // }
    // console.log(data);
    // const arr = [3, 5, 8, 100, 20];

    // const max = Math.max(...arr);

    // const index = arr.indexOf(max);
    // console.log(index); // 👉️ 3
    let one = Number(localStorage.getItem("score1"));
    let two = Number(localStorage.getItem("score2"));
    let three = Number(localStorage.getItem("score3"));
    let four = Number(localStorage.getItem("score4"));

    let data1 = [one, two, three, four];
    setData(data1);
    console.log(data1);
    const maxi = Math.max(...data1);
    console.log(maxi, "max");
    const idx = data1.indexOf(maxi);
    console.log(types[idx], "type");
    console.log(category);
    let cat = localStorage.getItem("Type");
    console.log(cat);
    if (cat == "First") {
      setSuccessType(types[idx]);
    } else if (cat == "Second") {
      setSuccessType(types2[idx].trim());
    } else setSuccessType(types3[idx]);
    // setSuccessType("Emerging Actualizer");
    console.log(successType);
  }, []);
  return (
    <div className=" text-center ">
      <Link to="/">
        <h1 className="color-secondary underline text-xl">Take Quiz again!</h1>
      </Link>
      <br />
      {category == "First" ? (
        <>
          <p className="font-bold underline">
            Your Primary Actualize Language is '{successType}'
          </p>
          <div className="flex items-center justify-center m-5">
            {successType ? (
              <img
                src={require(`../../Images/${successType}.png`)}
                className="w-6/12 cursor-pointer"
                alt="noo"
              />
            ) : (
              ""
            )}
          </div>
          <br />
          <div className="flex bg-primary flex-row flex-wrap p-2 w-7/12 m-auto justify-between items-center rounded-lg">
            <img src={img1} alt="" className="md:w-5/12 p-2" />

            <div className="bg-white flex flex-col flex-wrap h-full w-full md:w-6/12 m-auto rounded-lg justify-center items-center  md:p-2">
              <br />
              {}
              <p className="text-xl decoration-8 font-bold m-1">
                {types[0]} {data[0] * 25}%
              </p>
              <p className="text-xl decoration-8 font-bold m-1">
                {types[1]} {data[1] * 25}%
              </p>{" "}
              <p className="text-xl decoration-8 font-bold m-1">
                {types[2]} {data[2] * 25}%
              </p>{" "}
              <p className="text-xl decoration-8 font-bold m-1">
                {types[3]} {data[3] * 25}%
                {/* {types[3]} {localStorage.getItem("score4") * 10}% */}
              </p>
              <br />
            </div>
          </div>
        </>
      ) : category == "Second" ? (
        <>
          <p className="font-bold underline">
            Your Primary Actualize Leadership is '{successType}'
          </p>
          <div className="flex items-center justify-center m-5">
            {successType ? (
              <img
                src={require(`../../Images/${successType
                  .split(" ")
                  .join("")}.jpg`)}
                className="w-4/12 cursor-pointer"
                alt="noo"
              />
            ) : (
              ""
            )}
          </div>
          <br />
          <div className="flex bg-secondary flex-row flex-wrap p-2 w-7/12 m-auto justify-between items-center rounded-lg">
            <img src={img2} alt="" className="md:w-5/12 p-2" />

            <div className="bg-white flex flex-col flex-wrap h-full w-full md:w-6/12 m-auto rounded-lg justify-center items-center  md:p-2">
              <br />
              {}
              <p className="text-xl decoration-8 font-bold m-1">
                {types2[0]} {data[0] * 25}%
              </p>
              <p className="text-xl decoration-8 font-bold m-1">
                {types2[1]} {data[1] * 25}%
              </p>{" "}
              <p className="text-xl decoration-8 font-bold m-1">
                {types2[2]} {data[2] * 25}%
              </p>{" "}
              <br />
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="font-bold underline">
            Your Primary Actualize Purpose is '{successType}'
          </p>
          <div className="flex items-center justify-center m-5">
            {successType ? (
              <img
                src={require(`../../Images/${successType
                  .split(" ")
                  .join("")}.jpg`)}
                className="w-3/12 cursor-pointer"
                alt="noo"
              />
            ) : (
              ""
            )}
          </div>
          <br />
          <div className="flex bg-purple flex-row flex-wrap p-2 w-7/12 m-auto justify-between items-center rounded-lg">
            <img src={img3} alt="" className="md:w-5/12 p-2" />

            <div className="bg-white flex flex-col flex-wrap h-full w-full md:w-6/12 m-auto rounded-lg justify-center items-center  md:p-2">
              <br />
              {}
              <p className="text-xl decoration-8 font-bold m-1">
                {types3[0]} {data[0] * 25}%
              </p>
              <p className="text-xl decoration-8 font-bold m-1">
                {types3[1]} {data[1] * 25}%
              </p>{" "}
              <p className="text-xl decoration-8 font-bold m-1">
                {types3[2]} {data[2] * 25}%
              </p>{" "}
              <br />
            </div>
          </div>
        </>
      )}
      <br />
      <Link to="/">
        <h1 className="color-secondary underline text-xl">Take Quiz again!</h1>
      </Link>
      <br />
    </div>
  );
}
