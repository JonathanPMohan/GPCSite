import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import engSmall from '../../Images/eng_header_logo.png';

import './MyNavBar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="nav-bar">
        <Navbar color="" dark expand="md">
          <NavbarBrand href="/"><img src={engSmall} alt="small_logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/AboutUs"><strong>ABOUT US</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/OurWines"><strong>OUR WINES</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/VisitUs"><strong>VISIT US</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/Events"><strong>EVENTS</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/Weddings"><strong>WEDDINGS</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/Awards"><strong>AWARDS</strong></NavLink>
              </NavItem>
            </Nav>

          </Collapse>

        </Navbar>

      </div>
    );
  }
}

export default MyNavbar;
