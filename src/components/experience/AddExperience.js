import React, { Component } from "react";
import Experience from "./experience";

class AddExperience extends Component {
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
        <button onClick={this.onButtonClick} type="button">Add Experience</button>
        {this.state.showComponent ?
          <Experience /> :
          null
        }
      </div>
    );
  }
}

export default AddExperience;
