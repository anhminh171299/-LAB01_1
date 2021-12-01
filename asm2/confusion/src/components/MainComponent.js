import React, { Component } from "react";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import DishDetail from "./DishDetailComponent";
import StaffList from './HomeComponent';
import DetailStaff from './DetailStaff';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { DEPARTMENTS, ROLE, STAFFS } from "../shared/staffs";

const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        comments: state.comments,
        departments: state.departments,
    }
}

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
             };
    }
 render() {
        const HomePage = () => {
            return (
                <StaffList staffs={this.state.staffs}
                    
                />
            )
        }

        const AboutUs = () => {
            return (
                <About  departments={this.state.departments} />
            )
            
        }
        const Contact = () => {
            return (
                <Menu  staffs={this.state.staffs} />
            )
        }

        const staffwithId = ({ match }) => {
            return (
                <DetailStaff   staff={this.state.staffs.filter((staff) =>
                    staff.id === parseInt(match.params.staffId, 10))[0]}
                />
            )

        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/staff' component={() => <StaffList staffs={this.state.staffs} />} />
                    <Route path='/staff/:staffId' component={staffwithId} />
                    <Route path='/menu' component={Contact} />
                    <Route path='/aboutus' component={AboutUs} />
                    <Redirect to='/staff' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));