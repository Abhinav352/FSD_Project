import React, { Component } from "react";
import './Style.css'
class CustomDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeElementType: "dropdown"
    };
  }

  dropDownChanged(e) {
    if (e.target.value === "custom") {
      this.setState({ activeElementType: "input" });
    }
  }

  dropDownComp() {
    return (
      <select onChange={e => this.dropDownChanged(e)} >
        <option value="1">Donor</option>
        <option value="2">Receiver</option>
       
      </select>
    );
  }

  inputFieldComp() {
    return <input />;
  }

  render() {
    return (
      <div>
        
        {this.state.activeElementType === "dropdown"
          ? this.dropDownComp()
          : this.inputFieldComp()}
      </div>
    );
  }
}

export default CustomDropDown;
