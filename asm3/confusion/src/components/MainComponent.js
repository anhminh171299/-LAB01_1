import React, { Component } from "react";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import DishDetail from "./DishDetailComponent";
import StaffList from "./HomeComponent";
import DetailStaff from "./DetailStaff";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { DEPARTMENTS, ROLE, STAFFS } from "../shared/staffs";
import Search from "./SearchComponent";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    comments: state.comments,
    departments: state.departments,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
    this.onAddStaff = this.onAddStaff.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("staffs")) {
      var staffs = JSON.parse(localStorage.getItem("staffs"));
      this.setState({ staffs: staffs });
    } else {
      this.setState({ staffs: STAFFS });
      localStorage.setItem("staffs", JSON.stringify(STAFFS));
    }
  }

  onAddStaff(staff) {
    staff.department = this.state.departments.filter(
      (x) => x.id === staff.department
    )[0];
    staff.id = this.state.staffs.length;
    var newStaffs = this.state.staffs.concat([staff]);
    this.setState({ staffs: this.state.staffs.concat([staff]) });
    localStorage.setItem("staffs", JSON.stringify(newStaffs));
  }

  render() {
    const HomePage = () => {
      return <StaffList staffs={this.state.staffs} />;
    };

    const AboutUs = () => {
      return <About departments={this.state.departments} />;
    };
    const Contact = () => {
      return <Menu staffs={this.state.staffs} />;
    };

    const staffwithId = ({ match }) => {
      return (
        <DetailStaff
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/staff"
            component={() => (
              <StaffList
                onAddStaff={this.onAddStaff}
                staffs={this.state.staffs}
              />
            )}
          />
          <Route path="/staff/:staffId" component={staffwithId} />
          <Route path="/search" component={Search} />
          <Route path="/menu" component={Contact} />
          <Route path="/aboutus" component={AboutUs} />
          <Redirect to="/staff" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
