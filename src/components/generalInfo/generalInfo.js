import React, { Component } from "react";
import DisplayGeneralInfo from "./DisplayGeneralInfo";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
      showComponent: false,
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
    const { name, email, phone, showComponent } = this.state;
    return (
      <div className="general-info-container">
        <div className="user-name-container">
          <label htmlFor="user-name">Name:</label>
          <input
          onChange={this.handleNameChange}
          value={name}
          type="text"
          id="user-name"
          name="user-name">
          </input>
        </div>
        <div className="user-email-container">
          <label htmlFor="user-email">Email:</label>
          <input
          onChange={this.handleEmailChange}
          value={email}
          type="email"
          id="user-email"
          name="user-email">
          </input>
        </div>
        <div className="user-phone-container">
          <label htmlFor="user-phone">Phone Number:</label>
          <input
          onChange={this.handlePhoneChange}
          value={phone}
          type="text"
          id="user-phone"
          name="user-phone">
          </input>
        </div>
        <button type="button" onClick={this.onButtonClick}>Submit</button>
        {showComponent ?
        <DisplayGeneralInfo name={name} email={email} phone={phone} /> : 
        null
        }
      </div>
    );
  }
}

export default GeneralInfo;
