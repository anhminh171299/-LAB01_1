import React, { Component } from 'react';
import Home from './HomeComponent';
import StaffList from './HomeComponent';
import DetailStaff from './DetailStaff';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from "./DishDetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import { DEPARTMENTS, ROLE, STAFFS } from "../shared/staffs";
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }
    }
    render() {
        const HomePage = () => {
            return (
                <Home staffs={this.state.staffs}
                    
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
                    <Route exact path='/staff' component={HomePage} />
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

export default Main;