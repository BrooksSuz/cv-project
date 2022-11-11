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

  onSubmitForm = (e) => {
    e.preventDefault();
    if (!this.state.showComponent) {
      this.setState({
        showComponent: true,
      });
    } else if (this.state.showComponent) {
      this.setState({
        showComponent: false,
      });
    }
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
            <button type="submit" onClick={this.onSubmitForm}>Submit CV</button>
          </div>
        </form>

      </div>
    );
  }
};

export default App;
