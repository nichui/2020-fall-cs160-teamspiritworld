import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/styles.css';
import Logo from './Logo.svg';
import AboutUsLinks from './AboutUsLink';
import FAQLinks from './FAQLink';
import LoginLinks from './LoginLink';


const Navbar = () => {

	return (
		<nav className="mb-1 navbar navbar-expand-lg navbar-light white
		 lighten-1 justify-content-between">

			<a className="navbar-brand" >
				<img src={Logo} height="55" class="d-inline-block align-left"
     			alt="spartan logo" /> <span className="Logo"><Link to="/" className="Logo">SpiritWorld </Link></span>			
			</a>
			
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
   				aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
   			 		<span class="navbar-toggler-icon"></span>
  				</button>
  				
  					<div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    					 <form class="form-inline my-2 my-lg-0">
    						<ul class="navbar-nav mr-auto">
      						
      							<li class="nav-item ">
        				
        							<AboutUsLinks />
        				
      							</li>
      							<li class="nav-item">
      								<FAQLinks />
        				
     							</li>
      							<li class="nav-item">
      				
        							<LoginLinks />

     							</li>
     						
    					</ul>
    					</form>

   					</div>
			
  					

		</nav>


	)
	
}

export default Navbar
