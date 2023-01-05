import React, { useEffect, useState } from "react";
// import img1 from "../../Images/q1.png";
// import img2 from "../../Images/q2.png";
// import img3 from "../../Images/q3.png";
import { Link } from "react-router-dom";
import img1 from "../../Assets/Phyisical.jpg";
import img2 from "../../Assets/spi.jpg";
import img3 from "../../Assets/emotional.jpg";
import img4 from "../../Assets/social.jpg";
import img5 from "../../Assets/mental.jpg";
import img6 from "../../Assets/practical.jpg";

export default function Index() {
  const [data, setData] = useState([]);
  const [type, setType] = useState(localStorage.getItem("Type"));
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
  const [lan, setLan] = useState(localStorage.getItem("lan"));
  const [idx, setIdx] = useState(Number(localStorage.getItem("idx")));

  const [resultsData, setResultsData] = useState([
    {
      id: 1,
      type: "Physical",
      typeG: "Körperlich",
      text1:
        "Physical type of selfcare refers to any activities you deliberately engage in to enhance your physical well-being. ",
      text2:
        "You prefer Taking a walk during lunch breaks, sleeping eight hours a day, staying hydrated, etc.",
      text1G:
        "Die körperliche Art der Selbstfürsorge bezieht sich auf alle Aktivitäten, die du bewusst ausübst, um dein körperliches Wohlbefinden zu steigern. ",
      test2G:
        "Du gehst lieber in der Mittagspause spazieren, schläfst acht Stunden am Tag und bleibst hydriert, um deine körperliche Gesundheit zu fördern.",
      img: img1,
    },

    {
      id: 3,
      type: "Emotional",
      typeG: "Emotional",
      text1:
        "Emotional selfcare the actions we take to connect with our emotions and process them in a healthy way. ",
      text2:
        "You prefer Seeing a therapist, writing in a journal, creating art, playing music etc.",
      text1G:
        "Emotionale Selbstfürsorge bezieht sich auf die Maßnahmen, die wir ergreifen, um uns mit unseren Emotionen zu verbinden und sie auf gesunde Weise zu verarbeiten. ",
      test2G:
        "Du gehst lieber zu einem Therapeuten, schreibst in ein Tagebuch, erschaffst Kunst oder spielst Musik, um deine emotionalen Bedürfnisse zu pflegen.",
      img: img3,
    },
    {
      id: 4,
      type: "Social",
      typeG: "Sozial",
      text1:
        " Social selfcare encompasses activities that nurtures and deepens the relationships with people in your life.",
      text2:
        "You prefer Brunch with friends, going on a date, making time to call your mom regularly, etc.",
      text1G:
        "Soziale Selbstfürsorge umfasst Aktivitäten, die die Beziehungen zu Menschen in deinem Leben pflegen und vertiefen. ",
      test2G:
        "Du bevorzugst Brunch mit Freunden, gehst auf ein Date, nimmst dir Zeit, um deine Mutter regelmäßig anzurufen, um deine sozialen Bindungen zu stärken.",
      img: img4,
    },
    {
      id: 5,
      type: "Mental",
      typeG: "Geistig",
      text1:
        " Mental selfcare encompasses anything you do specifically to stimulate your mind and cultivate a healthy psyche.It’s not about reaching a mental state of nirvana, it’s about understanding and developing a loving relationship with your mind.",
      text2:
        "You prefer Reading a book, solving a puzzle, playing chess, going to a museum, etc.",
      text1G:
        "Mentale Selbstfürsorge umfasst alles, was du tust, um deinen Geist zu stimulieren und eine gesunde Psyche zu kultivieren. Es geht nicht darum, einen mentalen Zustand des Nirvana zu erreichen, sondern darum, deinen Geist zu verstehen und eine liebevolle Beziehung zu ihm aufzubauen.",
      test2G:
        " Du liest lieber ein Buch, löst ein Rätsel, spielst Schach oder gehst ins Museum, um deine mentale Fitness zu fördern.",
      img: img5,
    },
    {
      id: 6,
      type: "Practical",
      typeG: "Praktisch",
      text1:
        " Any actions you take to fulfill your core needs and reduce stress can be catalogued as practical selfcare.",
      text2:
        "Yes, even mundane, everyday activities. Think of how much better you feel when you clean your room or stick to a workout routine; these forms of selfcare are admittedly less exciting than others, but not to be underestimated. They are huge sanity-savers and help create a greater sense of calm and control in our busy lives.You prefer Creating a budget, taking professional development classes, organizing your closet, etc. ",
      text1G:
        "Alle Maßnahmen, die du ergreifst, um deine Kernbedürfnisse zu erfüllen und Stress abzubauen, können als praktische Selbstfürsorge katalogisiert werden. Ja, sogar banale, alltägliche Aktivitäten. Denke daran, wie viel besser du dich fühlst, wenn du dein Zimmer aufräumst oder dich an eine Trainingsroutine hältst. Diese Formen der Selbstfürsorge sind zwar weniger spannend als andere, aber nicht zu unterschätzen. Sie sind enorme Vernunftsparer und tragen dazu bei, ein größeres Gefühl der Ruhe und Kontrolle in unserem beschäftigen Leben zu schaffen. ",
      test2G:
        "Als Praktische Selfcaretyp ziehst du es vor, ein Budget zu erstellen, professionelle Entwicklungskurse zu besuchen oder deinen Kleiderschrank zu organisieren, um deine praktischen Bedürfnisse zu pflegen.",
      img: img6,
    },
    {
      id: 2,
      type: "Spiritual",
      typeG: "Spirituell",
      text1:
        "Spiritual selfcare encompasses any activities you engage in to connect with and nurture your soul. This practice is fundamentally about connecting with your inner spirit. For some this may include activities that honor a belief in a higher power (God, the universe or whatever guides you). ",
      text2:
        "You prefer Meditation, yoga, going to a place of worship, be in nature, dedicate time for self-reflection, etc.",
      text1G:
        "Spirituelle Selbstfürsorge umfasst alle Aktivitäten, an denen du teilnimmst, um dich mit deiner Seele zu verbinden und sie zu pflegen. Bei dieser Praxis geht es im Wesentlichen darum, dich mit deinem inneren Geist zu verbinden. Für manche kann dies Aktivitäten beinhalten, die den Glauben an eine höhere Macht (Gott oder das Universum) ehren.",
      test2G:
        "Du bevorzugst Meditation, einen Gottesdienst zu besuchen, in der Natur zu sein oder dir Zeit für Selbstreflexion zu nehmen, um deine spirituellen Bedürfnisse zu pflegen.",
      img: img2,
    },
  ]);
  const [successData, setSuccessData] = useState();
  useEffect(() => {
    // if (localStorage.getItem("Type")) {
    //   setCategory(localStorage.getItem("Type"));
    // }
    let idxL = localStorage.getItem("idx");
    console.log(localStorage.getItem("Type"));
    console.log(localStorage.getItem("idx"), typeof idxL, Number(idxL));
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
    console.log(cat, "catcakses");
    console.log(cat);
    if (cat == "Physical") {
      setSuccessData(resultsData[0]);
    }
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
      <br />

      <div className="w-11/12 m-auto flex flex-col md:flex-row flex-wrap justify-around items-center p-7 ">
        <div className="flex bg-primary flex-col flex-wrap p-2 w-10/12 md:w-6/12  mx-1 mb-5 justify-between items-center rounded-lg">
          <p className="text-3xl decoration-8 font-bold m-1">
            {lan == "German"
              ? `Gut gemacht🎉, Ihr selfcare Typ ist ${resultsData[idx].typeG}`
              : `Well done🎉 , You’re Selfcare type is ‘${resultsData[idx].type}’`}
          </p>
          <br />
          <img src={resultsData[idx].img} alt="no" className="md:w-10/12 " />

          <div className=" flex flex-col flex-wrap h-full w-full md:w-11/12 m-auto rounded-lg justify-center items-center  md:p-2">
            <br />

            <p className="text-md m-1 font-medium">
              {lan == "German"
                ? resultsData[idx].text1G
                : resultsData[idx].text1}
            </p>
            <p>
              {lan == "German"
                ? resultsData[idx].test2G
                : resultsData[idx].text2}
            </p>
            {/* <Link to="/quiz" className="w-full text-center">
              <button className="p-3 m-1 w-full text-white text-center  capitalize font-bold  custom-btn-transistion-primary">
                {lan == "English" ? "TAKE QUIZ !" : "MACHEN SIE QUIZ !"}
              </button>
            </Link> */}
            <br />
            {lan == "German" ? (
              <p>
                Wenn es um Selfcare-Typen geht, kann es je nach Situation
                variieren. Es ist auch möglich, dass du eine Mischung aus mehr
                als einem Selfcare-Typ bist. Was völlig normal ist. Ich hoffe,
                dass dir dies einen besseren Einblick in deinen Selfcare-Typ und
                die Aktivitäten gibt, die du für dich selbst zum Entspannen tun
                kannst. Folge mir auf Instagram oder besuche meinen Blog für
                weitere Einblicke.
              </p>
            ) : (
              <p>
                When it comes to selfcare types, it may vary depending on the
                situation. It is also possible that you are a mixture of more
                than one selfcare type. Which is totally normal, I hope this
                gives you a better glimpse of your selfcare type and the
                activities you can do for yourself to relax. Follow me on
                Instagram or visit my blog for more insights.{" "}
              </p>
            )}

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
