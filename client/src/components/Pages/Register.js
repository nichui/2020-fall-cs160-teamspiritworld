
import React, {Component} from 'react';
import '../../css/styles.css';
import {Link, withRouter} from 'react-router-dom';
import {Formik} from 'formik';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";


/*
const RegisterSchema = Yup.object().shape({
	firstName: Yup.string().required('Required!!'),
	lastName: Yup.string().required('Required!!'),
	email: Yup.string().email('Invalid email :(').required('Required !!'),
	password: Yup.string().min(6,'Too short').required('Required !!'),
	confirmPassword: Yup.string().oneOf([Yup.ref('password'),null],'Passwords must match').required('Required !!'),})
	*/
	
class Register extends Component{
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
	  /*
	  static propTypes ={

		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		register: PropTypes.func.isRequired
	  }
	  */
	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
		  this.props.history.push("/home");
		}
	  }
	/*
	state = {
		success: false,
		validation:false
	}
	*/
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
		  this.setState({
			errors: nextProps.errors
		  });
		}
	  }
	
	
	  onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	  };
	
	  onSubmit = e => {
		e.preventDefault();
	
		const newUser = {
		  firstname: this.state.firstname,
		  lastname: this.state.lastname,
		  email: this.state.email,
		  password: this.state.password,
		  password2: this.state.password2
		};
	
		this.props.registerUser(newUser, this.props.history);
	  };
	
	
	render(){
		const{errors} = this.state;
	return(
		<div className="log">
			{/*<Formik
				initialValues={{firstName:"",lastName:"", email:"", password:"",confirmPassword:""}}
				validationSchema={RegisterSchema}
				onSubmit={values=>{
					this.props.dispatch(registerUser(values)).then(response => {
						if(!this.props.user.auth){
							this.setState({
								validation:true
							})
						}
					})    
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit
				})=>(

				*/}
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
			
				
			
    			<input   name="password" type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={this.onChange}  value={this.state.password} error={errors.password} id="password" required />
    			<small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
       			 At least 8 characters and 1 digit
    			</small>
				
				
					<input  name="confirm password" type="password" id="defaultRegisterPhonePassword" class="form-control" placeholder="Confirm Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={this.onChange}  value={this.state.password2} error={errors.password2} id="password2" required/>
    			<small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
       			Re-enter your password
    			</small>
				
					
   				<hr/>
    			<button class="btn btn-info my-4 btn-block" type="submit">Submit</button>

    
			

			</form>
				
				{/*</Formik>*/}

   </div>



	
	)
}
}
const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
})


/*
Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
  };
  */
 /*
  const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
  });
  */
  export default connect(
	mapStateToProps,
	{ registerUser }
  )(withRouter(Register));

