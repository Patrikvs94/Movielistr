import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <div >
        <Navbar style={{backgroundColor: '#640D14'}} dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand style={{fontWeight: 'bold', color: '#FFFFFF'}} href="/">MovieListr</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink style={{color: '#FFFFFF'}}href="https://www.google.com/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: '#FFFFFF'}}href="https://www.google.com/">My movie decks</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: '#FFFFFF'}}href="https://www.google.com/">Sign in</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}


export default AppNavbar;
