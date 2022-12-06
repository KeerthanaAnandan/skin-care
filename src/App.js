import logo from "./logo.svg";
import "./App.css";
import Index from "./Components/Index/Index";
import Nav from "./Components/Nav/Index";
import Q1HomePage from "./Components/HomePage/Index";
// import Q2HomePage from "./Components/Quiz2/Home";
// import Q3HomePage from "./Components/Quiz3/Home";
import Quiz from "./Components/QuizPage/Index";
// import Quiz2 from "./Components/Quiz2/Quiz";
// import Quiz3 from "./Components/Quiz3/Quiz";
import Form from "./Components/Form/Index";
import Results from "./Components/Results/Index";
import Footer from "./Components/Footer/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  console.log(Number.isInteger(2), "checking");
  // const changeHandler = (e) => {
  //   console.log(e.target.value);
  //   localStorage.setItem("lan", e.target.value);
  // };
  return (
    <div className="bg-gray-100 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Index />
              </>
            }
          />
          <Route
            path="/form"
            element={
              <>
                <Nav />
                <Form />{" "}
              </>
            }
          />
          {/* <Route
            path="/form"
            element={
              <>
                <Nav />
                <Form />{" "}
              </>
            }
          />
          <Route
            path="/actualize-languages-assessment"
            element={
              <>
                <Nav />

                <Q1HomePage />
              </>
            }
          />
          <Route
            path="/actualize-leadership-assessment"
            element={
              <>
                <Nav />
                <Q2HomePage />
              </>
            }
          /> */}
          {/* <Route
            path="/actualize-purpose-assessment"
            element={
              <>
                <Nav />
                <Q3HomePage />
              </>
            }
          /> */}
          {/* <Route path="/" element={<Q1HomePage />} /> */}
          <Route
            path="/quiz"
            element={
              <>
                <Nav />
                <Quiz />
              </>
            }
          />
          {/* <Route
            path="/actualize-leadership-assessment/quiz"
            element={
              <>
                <Nav />
                <Quiz2 />
              </>
            }
          />
          <Route
            path="/actualize-purpose-assessment/quiz"
            element={
              <>
                <Nav />
                <Quiz3 />
              </>
            }
          /> */}
          {/* <Route path="results" element={<Results />} /> */}
          {/* <Route
          exact
          path="/results"
          render={() => {
            window.location.href = "results.html";
          }}
        /> */}
          <Route
            exact
            path="/results"
            element={
              <>
                <Nav />
                <Results />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
