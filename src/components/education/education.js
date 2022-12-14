import React, { Component } from "react";
import DisplayEducation from "./DisplayEducation";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      aos: '',
      dos: '',
      showComponent: false,
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleAOSChange = (e) => {
    this.setState({
      aos: e.target.value,
    });
  };

  handleDOSChange = (e) => {
    this.setState({
      dos: e.target.value,
    });
  };

  onButtonClick = () => {
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

  render() {
    const { name, dos, aos, showComponent } = this.state;

    return (
      <div>
        <div className="school-name-container">
          <label htmlFor="school-name">School Name:</label>
          <input
          onChange={this.handleNameChange}
          value={name}
          type="text"
          id="school-name"
          name="school-name">
          </input>
        </div>
        <div className="area-of-study-container">
          <label htmlFor="area-of-study">Area of Study:</label>
          <input
          onChange={this.handleAOSChange}
          value={aos}
          type="text"
          id="area-of-study"
          name="area-of-study">
          </input>
        </div>
        <div className="date-of-study-container">
          <label htmlFor="date-of-study">Date of Study:</label>
          <input
          onChange={this.handleDOSChange}
          value={dos}
          type="date"
          id="date-of-study"
          name="date-of-study">
          </input>
        </div>
        <button type="button" onClick={this.onButtonClick}>Submit</button>
        {showComponent ?
        <DisplayEducation
          name={name}
          aos={aos}
          dos={dos}
        /> :
          null
        }
      </div>
    );
  }
}

export default Education;
