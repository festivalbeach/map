import React from 'react';
import Filter from './Filter.js'
import PlantInfo from './PlantInfo.js'
//import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Navbar color="faded" light expand="md">
	      <NavbarBrand href="/">Festival Beach Food Forest Map</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
	      <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
	            <NavItem>
	              <Filter />
	            </NavItem>
              <NavItem>
                <NavLink href="https://festivalbeach.org/">Food Forest Website</NavLink> 
	            </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
	            <DropdownItem>
	              Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
	            <DropdownItem>
                  Reset
              </DropdownItem>
	        </DropdownMenu>
	      </UncontrolledDropdown> */}
	    </Nav>
	  </Collapse>
	</Navbar>
      </div>
    );
  }
}
	

