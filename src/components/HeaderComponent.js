import React, { Component } from 'react';
import styles from '../../src/App.css';

import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this); //binds the method so that we can use in JSX
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

render() {
    return(
        <div>
            <Navbar navbar expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='' height="30" width="41" alt='Someshwar Enterprises' /></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav>
                        <NavItem navlink>
                            <NavLink className="nav-link navlink"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link navlink" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link navlink"  to='/print'><span className="fa fa-list fa-lg"></span>Print</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link navlink" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Someshwar Enterprises</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}
}

export default Header;