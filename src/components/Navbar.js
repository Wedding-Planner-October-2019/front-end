import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Wedding Planner</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            
                <NavItem>
                <NavLink href="/">Home</NavLink>
                </NavItem>
              
              <NavItem>
                <NavLink href="/Login">Login</NavLink>
                </NavItem>
              <NavItem>
                <NavLink href="/UserForm">Register</NavLink>
                </NavItem> 
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 Featured Weddings
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="/Profile1">Andy and Latha's Wedding</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/Profile2">Sam and Simran's Wedding</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/Profile3">Ashish and Seema's Wedding</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/Profile4">Eric and Joy's Wedding</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}