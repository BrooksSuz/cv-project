import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      aos: '',
      dos: '',
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

  render() {
    return (
      <div>
        <div className="school-name-container">
          <label htmlFor="school-name">School Name:</label>
          <input
          onChange={this.handleNameChange}
          value={this.name}
          type="text"
          id="school-name"
          name="school-name">
          </input>
        </div>
        <div className="area-of-study-container">
          <label htmlFor="area-of-study">Area of Study:</label>
          <input
          onChange={this.handleAOSChange}
          value={this.aos}
          type="text"
          id="area-of-study"
          name="area-of-study">
          </input>
        </div>
        <div className="date-of-study-container">
          <label htmlFor="date-of-study">Date of Study:</label>
          <input
          onChange={this.handleDOSChange}
          value={this.dos}
          type="date"
          id="date-of-study"
          name="date-of-study">
          </input>
        </div>
      </div>
    );
  }
}

export default Education;
