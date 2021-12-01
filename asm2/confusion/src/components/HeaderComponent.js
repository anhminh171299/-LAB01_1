import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import "./staff.css";  
import { NavLink } from 'react-router-dom';
import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            search: ''
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleLogin() {
          console.log(this.state.search)
        // this.toggleModal();
        // window.location.href = '/staff/:staffId'
      

    }

    render() {
        return(
            <div>
                <Navbar white expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/staff'><span className="fa fa-home fa-lg"></span> Nhân viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> Phòng Ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Bảng lương</NavLink>
                            </NavItem>
                            
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Tìm kiếm nhân viên</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Tìm kiếm nhsssân viên</ModalHeader>
                    <ModalBody>
                    <Form >
                            <FormGroup>
                                <Label htmlFor="username">Tên nhân viên</Label>
                                <Input type="text" id="username" name="username" onchange={e=>this.setState(e.target.value)} />
                            </FormGroup>
                            <Button onClick={this.handleLogin()} color="primary">Tìm kiếm</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;