import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="experience-container">
        <div className="company-name-container">
          <label htmlFor="company-name">Company Name:</label>
          <input type="text" id="company-name" name="company-name"></input>
        </div>
        <div className="position-title-container">
          <label htmlFor="position-title">Position Title:</label>
          <input type="text" id="position-title" name="position-title"></input>
        </div>
        <div className="main-tasks-container">
          <label htmlFor="main-tasks">Phone Number:</label>
          <input type="text" id="main-tasks" name="main-tasks"></input>
        </div>
        <div className="amount-worked-container">
          <label htmlFor="beginning-date">Beginning Date:</label>
          <input type="date" id="beginning-date" name="beginning-date"></input>
          <label htmlFor="end-date">End Date:</label>
          <input type="date" id="end-date" name="end-date"></input>
        </div>
      </div>
    );
  }
}

export default Experience;
