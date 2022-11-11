import React, { Component } from "react";
import DisplayExperience from "./DisplayExperience";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      position: '',
      tasks: '',
      beginning: '',
      end: '',
      showComponent: false,
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
    const { name, position, tasks, beginning, end, showComponent } = this.state;
    return (
      <div className="experience-container">
        <div className="company-name-container">
          <label htmlFor="company-name">Company Name:</label>
          <input
          onChange={this.handleNameChange}
          value={name}
          type="text"
          id="company-name"
          name="company-name">
          </input>
        </div>
        <div className="position-title-container">
          <label htmlFor="position-title">Position Title:</label>
          <input
          onChange={this.handlePositionChange}
          value={position}
          type="text"
          id="position-title"
          name="position-title">
          </input>
        </div>
        <div className="main-tasks-container">
          <label htmlFor="main-tasks">Main Tasks:</label>
          <input
          onChange={this.handleTasksChange}
          value={tasks}
          type="text"
          id="main-tasks"
          name="main-tasks">
          </input>
        </div>
        <div className="time-worked-container">
          <label htmlFor="beginning-date">Beginning Date:</label>
          <input
          onChange={this.handleBeginningDateChange}
          value={beginning}
          type="date"
          id="beginning-date"
          name="beginning-date">
          </input>
          <label htmlFor="end-date">End Date:</label>
          <input
          onChange={this.handleEndDateChange}
          value={end}
          type="date"
          id="end-date"
          name="end-date">
          </input>
        </div>
        <button type="button" onClick={this.onButtonClick}>Submit</button>
        {showComponent ?
        <DisplayExperience
          name={name}
          position={position}
          tasks={tasks}
          beginning={beginning}
          end={end} 
        /> :
          null
        }
      </div>
    );
  }
}

export default Experience;
