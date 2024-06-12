import React from "react";
import "./App.css";
import { texts } from "./utilities/constants";
import Form from "./components/Form";
import CardContainer from "./components/CardContainer";

const App: React.FC = () => {
  return (
    <div className="parentContainer">
      <div className="side1">
        <div className="imagecontainer">
          <img className="image" src="/assets/ez.png" alt="Example" />
        </div>
        <div className="heading1">{texts.pageTitle}</div>
        <div className="heading2">{texts.pageDescription}</div>
        <Form />
      </div>
      <CardContainer />
    </div>
  );
};

export default App;
