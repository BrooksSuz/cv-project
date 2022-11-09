import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="school-name-container">
          <label htmlFor="school-name">School Name:</label>
          <input type="text" id="school-name" name="school-name"></input>
        </div>
        <div className="area-of-study-container">
          <label htmlFor="area-of-study">Area of Study:</label>
          <input type="text" id="area-of-study" name="area-of-study"></input>
        </div>
        <div className="date-of-study-container">
          <label htmlFor="date-of-study">Date of Study:</label>
          <input type="date" id="date-of-study" name="date-of-study"></input>
        </div>
      </div>
    );
  }
}

export default Education;
