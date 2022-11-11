import React, { Component } from "react";
import Education from "./education";

class AddEducation extends Component {
  constructor() {
    super();

    this.state = {
      showComponent: false,
    };
  }

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
    return (
      <div>
        <button onClick={this.onButtonClick} type="button">Add Education</button>
        {this.state.showComponent ?
          <Education /> :
          null
        }
      </div>
    );
  }
}

export default AddEducation;
