import React, { Component } from "react";
import GeneralInfo from "./generalInfo";

class AddGeneralInfo extends Component {
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
        <button onClick={this.onButtonClick} type="button">Add General Info</button>
        {this.state.showComponent ?
          <GeneralInfo /> :
          null
        }
      </div>
    );
  }
}

export default AddGeneralInfo;
