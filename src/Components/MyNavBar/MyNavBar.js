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
        <Navbar color="blue" dark expand="md">
          <NavbarBrand href="/"><strong>GPCSite</strong></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/pageA"><strong>A</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/pageB"><strong>B</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/pageC"><strong>C</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/pageD"><strong>D</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/pageE"><strong>E</strong></NavLink>
              </NavItem>
            </Nav>

          </Collapse>

        </Navbar>

      </div>
    );
  }
}

export default MyNavbar;
