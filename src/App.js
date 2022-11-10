import React, { Component } from "react";
import GeneralInfo from "./generalInfo/generalInfo";
import Education from "./education/education";
import Experience from "./experience/experience";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
    });
  };

  editCV = () => {

  };

  render() {
    return (
      <div className="app-container">

        <h1>CV-Project</h1>

        <form onSubmit={this.onFormSubmit}>
          <GeneralInfo />
          <Education />
          <Experience />
          <div className="submit-button-container">
            <button type="button" onClick={this.editCV}>Edit CV</button>
            <button type="submit">Submit CV</button>
          </div>
        </form>

        <div className="cv-container"></div>
        
      </div>
    );
  }
};

export default App;
