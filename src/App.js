import React, { Component } from "react";
import AddGeneralInfo from "./components/generalInfo/AddGeneralInfo";
import AddEducation from "./components/education/AddEducation";
import AddExperience from "./components/experience/AddExperience";
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
          <AddGeneralInfo />
          <AddEducation />
          <AddExperience />
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
