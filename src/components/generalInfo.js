import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  render() {
    return (
      <div className="general-info-container">
        <div className="user-name-container">
          <label htmlFor="user-name">Name:</label>
          <input
          onChange={this.handleNameChange}
          value={this.name}
          type="text"
          id="user-name"
          name="user-name">
          </input>
        </div>
        <div className="user-email-container">
          <label htmlFor="user-email">Email:</label>
          <input
          onChange={this.handleEmailChange}
          value={this.email}
          type="email"
          id="user-email"
          name="user-email">
          </input>
        </div>
        <div className="user-phone-container">
          <label htmlFor="user-phone">Phone Number:</label>
          <input
          onChange={this.handlePhoneChange}
          value={this.phone}
          type="text"
          id="user-phone"
          name="user-phone">
          </input>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
