/*need
import React, {Component, useState} from 'react';
import '../../../css/styles.css';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { registerUser } from "../../../actions/authActions";
import {auth} from '../../../firebase'
import {toast} from 'react-toastify'
import dotenv from 'dotenv'

class Register extends Component{	 
	//_renderEmail =() =>() =>{
	 //const[email, setEmail] = useState('')
	// return <div>{email, setEmail}</div>
	//}
	constructor() {
		super();
		this.state = {
		  firstname: "",
		  lastname:"",
		  email: "",
		  password: "",
		  password2: "",
		  errors: {}
		};
	  }
	
	setEmail(){
		this.state.email = this.email
	}
	need*/
	  /*
	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
		  this.props.history.push("/home");
		}
	  }
	  
	
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
		  this.setState({
			errors: nextProps.errors
		  });
		}
	  }
	*/
	/*need
	  onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	  };
	  
	  onSubmit = async (e) => {
		e.preventDefault();//prevent page from reload
		//new
		//console.log(process.env.REACT_APP_REGISTER_REDIRECT_URL)
		const config = {
			
			url: "http://localhost:3000/register/complete",
			handleCodeInApp: true
		}
		 await auth.sendSignInLinkToEmail(this.state.email, config)
		toast.success(`Email is sent to ${this.state.email}. Click the link to complete registration`)
		//save user email in local storage
		window.localStorage.setItem("emailForRegistration",this.state.email)
		this.setEmail('')
		
		//new

		const newUser = {
		  firstname: this.state.firstname,
		  lastname: this.state.lastname,
		  email: this.state.email,
		 // password: this.state.password,
		  //password2: this.state.password2
		};
	
		//this.props.registerUser(newUser, this.props.history);
		
	};
	need*/
	/*need
	render(){
		const{errors} = this.state;
	return(
		<>
		
		<div className="log">
			
			<form onSubmit={this.onSubmit} class="text-center border border-light p-5">
    			<p class="h4 mb-4 FormTitle">Sign up</p>

    			<div class="form-row mb-4">
        			<div class="col">
            			<input  name="first name" type="text" id="validationCustom01" class="form-control" placeholder="First name"  onChange={this.onChange} value={this.state.firstname} error={errors.firstname} id="firstname" required />
						
        			</div>
        			<div class="col">
            
            			<input  name="last name" type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" onChange={ this.onChange}  value={this.state.lastname} error={errors.lastname} id="lastname" required/>
						
					</div>
				</div>

    
    			<input  name="email" type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" onChange={this.onChange} value={this.state.email} error={errors.email} id="email" required />
			
				
			{/*
    			<input   name="password" type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={this.onChange}  value={this.state.password} error={errors.password} id="password" required />
    			<small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
       			 At least 8 characters and 1 digit
    			</small>
				
				
					<input  name="confirm password" type="password" id="defaultRegisterPhonePassword" class="form-control" placeholder="Confirm Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={this.onChange}  value={this.state.password2} error={errors.password2} id="password2" required/>
    			<small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
       			Re-enter your password
    			</small>
			*///}
			/*need
					
   				<hr/>
    			<button class="btn btn-info my-4 btn-block" type="submit">Submit</button>

    
			

			</form>
				
				
   </div>

</>
need*/
	
	//)
//}
//}

/*
const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
})

*/
/*need
Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
  };
  
 
  const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
  });
  
  export default connect(
	mapStateToProps,
	{ registerUser }
  )(withRouter(Register));
need*/
//export default Register;
/*
import React, {useState} from 'react'

const Register = () => {
	const [email,setEmail] = useState("")
	const [lastname, setLastName] = useState("")
	const [firstname, setFirstName] = useState('')
	const [password, setPassword] = useState('')
	const [confirmedPassword, setConfirmedPassword] = useState('')
	const handleSubmit = () => {

	}
	const registerForm = () => 
	
	
	<form onSubmit={handleSubmit}>
			
			<input type="text" className="form-control" value={firstname} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} autoFocus required/>
			<br />
			<input type="text" className="form-control" value={lastname} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} autoFocus required/>
			<br />

			<input type="email" className="form-control" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} autoFocus required/>
			<br />

			<input type="password" className="form-control" value={password} placeholder="New Password" onChange={(e) => setPassword(e.target.value)} autoFocus required/>
			<br />

			<input type="password" className="form-control" value={confirmedPassword} placeholder="Confirm Your Password" onChange={(e) => setConfirmedPassword(e.target.value)} autoFocus required/>
			<br />

			<button type="submit" className='btn btn-raised'>Register</button>
	</form>

	return (
		<div className="container p-5">
			<div className='row'>
				<div className="col-md-6 offset-md-3">
						<h4>Register</h4>
						{registerForm()}
				</div>


			</div>
			
		</div>
	)
}
export default Register;
*/
import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("ENV --->", process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    // clear state
    setEmail("");
  };

  const registerForm = () => (	

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        autoFocus
      />

      <br />
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>	

  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4 className="h4 mb-4 FormTitle">Register</h4>
          {registerForm()}
        </div>
      </div>
    </div>

  );
};

export default Register;