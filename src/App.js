import React, { Component } from "react";
import AddGeneralInfo from "./components/generalInfo/AddGeneralInfo";
import AddEducation from "./components/education/AddEducation";
import AddExperience from "./components/experience/AddExperience";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      showComponent: false,
    };
  }

  render() {
    return (
      <div className="app-container">

        <h1>CV-Project</h1>

        <form onSubmit={this.onFormSubmit}>
          <AddGeneralInfo />
          <AddEducation />
          <AddExperience />
        </form>

      </div>
    );
  }
};

export default App;
