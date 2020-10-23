import React from 'react';
import {Link} from 'react-router-dom'
import '../../css/styles.css';
import Signin from '../Pages/Signin'


const LoginLinks = () => {

	return(
		<div>
		<a class="nav-link" href="/Signin">
            <button type="button" class="btn btn-info btn-primary  btn-sm my-0 ">Login</button>
        </a>         

        </div>



	)
}

export default LoginLinks