import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/styles.css';
import Logo from './Logo.svg';
//import ContactUsLink from './ContactUsLink';
//import FavListLink from './FavListLink';



const Navbar = () => {

	return (
	<div>
	
<nav class="mb-1 navbar navbar-expand-lg navbar-light white lighten-1 justify-content-between">
 
  <a className="navbar-brand" href="#">
				<img src={Logo} height="55" class="d-inline-block align-left"
     			alt="spartan logo" /> <span className="Logo">SpiritWorld </span>			
</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item ">
        <a class="nav-link" href="#">
           Favorite List
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
           Contact Us</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0"
            alt="avatar image" height="35"></img> Anna </a>
			
        <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
          <a class="dropdown-item" href="#">My account</a>
          <a class="dropdown-item" href="#">Log out</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

</div>

	)
	
}

export default Navbar;
