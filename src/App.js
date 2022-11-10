import React, { Component } from "react";
import GeneralInfo from "./components/generalInfo";
import Education from "./components/education";
import Experience from "./components/experience";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: {
        name: '',
        email: '',
        phone: '',
      },

      education: {
        name: '',
        aos: '',
        dos: '',
      },

      experience: {
        name: '',
        position: '',
        tasks: '',
        beginning: '',
        end: '',
      },
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
          <GeneralInfo></GeneralInfo>
          <Education></Education>
          <Experience></Experience>
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
