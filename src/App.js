import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Answers from './Components/Answers';
import "./App.css";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz";

function App() {
  return (

    <Fragment>

      {/* header Components */}
        <Header />

      {/* Quiz Components */}
        <Quiz />
      
    </Fragment> 

  )
}

const rootElement = document.getElementById("root");
// reader method for react 
ReactDOM.render(<App />, rootElement);
export default App;