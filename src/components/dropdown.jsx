import React, { Component } from "react";
import { Dropdown } from "primereact/dropdown";

class DropDownMain extends Component {
  state = {
    menu: { name: "Product", code: "PRD" },
  };
  menu = [
    { name: "Product", code: "PRD" },
    { name: "Vendor", code: "VND" },
    { name: "Brands", code: "BND" },
  ];
  render() {
    return (
      <div className="MainDropdown ">
        <Dropdown
          value={this.state.menu}
          options={this.menu}
          style={{
            width: "12em",
            height: "3em",
            textAlign: "center",
            fontWeight: "1em",
          }}
          onChange={(e) => {
            this.setState({ menu: e.value });
          }}
          optionLabel="name"
          placeholder="SELECT ME"
        />
      </div>
    );
  }
}

export default DropDownMain;
