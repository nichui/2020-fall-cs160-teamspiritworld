import React from 'react';
import {NavLink} from 'react-router-dom'
import '../../css/styles.css';

const ProfileLinks = () => {

	return(
		<a className="nav-link" href="/Profile">
          <button type="button" className="btn btn-info btn-primary  btn-sm my-0 ">Profile</button>
          

        </a>



	)
}

export default ProfileLinks