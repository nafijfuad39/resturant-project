import { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar,NavbarBrand,NavbarToggler, Collapse,NavItem,Nav } from 'reactstrap';

class Navigation extends Component{

  constructor(props){
    super(props);
    this.state = {
      isNavOpen:false
    }
  }

  navToggle = () => {
    this.setState({
      isNavOpen:!this.state.isNavOpen
    })
  }
  render (){


    return (
      <div>
      <Navbar  color="dark" dark expand="sm">
        
         <NavbarToggler onClick={this.navToggle}></NavbarToggler>
         <NavbarBrand href="">My-Restaurant-App</NavbarBrand>
        <Collapse isOpen={this.state.isNavOpen} navbar>

        <Nav navbar>
            <NavItem>
               <Link to="/" className='nav-link active '>Home</Link>
            </NavItem>
            <NavItem>
               <Link to="/menu" className='nav-link'>Menu</Link>
            </NavItem>
            <NavItem>
               <Link to="/about" className='nav-link'>About</Link>
            </NavItem>
            <NavItem>
               <Link to="/contact" className='nav-link'>Contact</Link>
            </NavItem>
           
          </Nav>
        
        </Collapse>
       
   
      </Navbar>
    </div>
  );

  }
    
};

export default Navigation;