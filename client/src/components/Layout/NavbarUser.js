import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../css/styles.css';
import Logo from './Logo.svg';
//import ContactUsLink from './ContactUsLink';
//import FavListLink from './FavListLink';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


import { Navbar, NavItem, Nav } from "reactstrap";



class NavbarUser extends Component {
 onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
 
 
    //const { user } = this.props.auth;

  render(){
  
    return(
    <div>

      <Navbar light expand="md">
      <a className="navbar-brand" >
      <img src={Logo} height="55" class="d-inline-block align-left"
     			alt="spartan logo" />
           <Link className="Logo " to="/">
             SpiritWorld      
        </Link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
   				aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
   			 		<span class="navbar-toggler-icon"></span>
  				</button>
  				
  					<div class="collapse navbar-collapse" id="navbarSupportedContent-555">
          <Nav navbar className="ml-auto">
            <NavItem>
              <Link className="nav-link"  to="/fav-list">
                Favorite List
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </NavItem>
            <NavItem>
            
            <button 
            style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
               
              }}
            className="btn btn-sm waves-effect waves-light hoverable blue accent-3" onClick={this.onLogoutClick}>Log out</button>
    
        </NavItem>
          </Nav>
          </div>
      </Navbar>
    </div>
    
    
	
    );
    }
};

NavbarUser.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavbarUser);