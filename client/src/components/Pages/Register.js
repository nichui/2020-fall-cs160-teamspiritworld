import React from 'react';
import '../../css/styles.css';

const Register = () => {

	return(
		<div className="log">
			
			<form class="text-center border border-light p-5" action="#!">
    			<p class="h4 mb-4 FormTitle">Sign up</p>

    			<div class="form-row mb-4">
        			<div class="col">
            
            			<input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name" />
        			</div>
        			<div class="col">
            
            			<input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" />
        			</div>
    			</div>

    
    			<input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" />

    
    			<input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
    			<small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
       			 At least 8 characters and 1 digit
    			</small>

    
    			<input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Confirm Password" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
    			<small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
       			Re-enter your password
    			</small>

   				<hr/>
    			<button class="btn btn-info my-4 btn-block" type="submit">Submit</button>

    
 

			</form>
			

   </div>



	)
}

export default Register