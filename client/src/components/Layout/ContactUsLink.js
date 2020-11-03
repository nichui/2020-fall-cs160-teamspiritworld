import React from 'react';
import {NavLink} from 'react-router-dom'
import '../../css/styles.css';

const ContactUsLinks = () => {

	return(
		<a className="nav-link" href="/ContactUs">
          <button type="button" className="btn btn-info btn-primary  btn-sm my-0 ">Contact Us</button>
          

        </a>



	)
}

export default ContactUsLinks