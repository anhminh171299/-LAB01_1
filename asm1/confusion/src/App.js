import { Navbar, NavbarBrand , Button, ButtonGroup} from "reactstrap";
import "./App.css";
import Menu from "./components/MenuComponent";
import { STAFFS } from "./shared/staffs";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Ứng dụng quản lý nhân sự v1 .0 </NavbarBrand>
          </div>
        </Navbar>
        <Menu staffs={this.state.staffs} />
      </div>
    );
  }
}
export default App;
