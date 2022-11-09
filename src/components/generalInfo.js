import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="general-info-container">
        <div className="user-name-container">
          <label htmlFor="user-name">Name:</label>
          <input type="text" id="user-name" name="user-name"></input>
        </div>
        <div className="user-email-container">
          <label htmlFor="user-email">Email:</label>
          <input type="email" id="user-email" name="user-email"></input>
        </div>
        <div className="user-phone-container">
          <label htmlFor="user-phone">Phone Number:</label>
          <input type="number" id="user-phone" name="user-phone"></input>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
