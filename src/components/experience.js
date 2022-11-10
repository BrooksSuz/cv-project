import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      position: '',
      tasks: '',
      beginning: '',
      end: '',
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handlePositionChange = (e) => {
    this.setState({
      position: e.target.value,
    });
  };

  handleTasksChange = (e) => {
    this.setState({
      tasks: e.target.value,
    });
  };

  handleBeginningDateChange = (e) => {
    this.setState({
      beginning: e.target.value,
    });
  };

  handleEndDateChange = (e) => {
    this.setState({
      end: e.target.value,
    });
  };

  render() {
    return (
      <div className="experience-container">
        <div className="company-name-container">
          <label htmlFor="company-name">Company Name:</label>
          <input
          onChange={this.handleNameChange}
          value={this.name}
          type="text"
          id="company-name"
          name="company-name">
          </input>
        </div>
        <div className="position-title-container">
          <label htmlFor="position-title">Position Title:</label>
          <input
          onChange={this.handlePositionChange}
          value={this.position}
          type="text"
          id="position-title"
          name="position-title">
          </input>
        </div>
        <div className="main-tasks-container">
          <label htmlFor="main-tasks">Main Tasks:</label>
          <input
          onChange={this.handleTasksChange}
          value={this.tasks}
          type="text"
          id="main-tasks"
          name="main-tasks">
          </input>
        </div>
        <div className="time-worked-container">
          <label htmlFor="beginning-date">Beginning Date:</label>
          <input
          onChange={this.handleBeginningDateChange}
          value={this.beginning}
          type="date"
          id="beginning-date"
          name="beginning-date">
          </input>
          <label htmlFor="end-date">End Date:</label>
          <input
          onChange={this.handleEndDateChange}
          value={this.end}
          type="date"
          id="end-date"
          name="end-date">
          </input>
        </div>
      </div>
    );
  }
}

export default Experience;
