import React, {Component} from 'react';
import '../../css/styles.css';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import {Formik} from 'formik';
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
/*
const LoginSchema = Yup.object().shape({

	password: Yup.string().min(6,'Too short').required('Required !!'),
	email: Yup.string().email('Invalid email :(').required('Required !!'),
})
*/
class Login extends Component {
	constructor(){
		super();
		this.state = {
			email: "",
			password: "",
			errors: {},
			//msg: null
		  };
	}
	/*
	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		login: PropTypes.func.isRequired,
		clearErrors: PropTypes.func.isRequired
	}
	componentDidUpdate(prevProps){
		const {error, isAuthenticated} = this.props;
		if(error !== prevProps.error){
			if(error.id === 'LOGIN_FAIL'){
				this.setState({msg: error.msg.msg});
			}else{
				this.setState({msg: null});
			}
		}
		
	}
*/

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
		  this.props.history.push("/home/resources");
		}
	  }
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
		  this.props.history.push("/home/resources"); // push user to dashboard when they login
		}
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
		
			const userData = {
			  email: this.state.email,
			  password: this.state.password
			};
		
			this.props.loginUser(userData);
		  };
	render(){
		const { errors } = this.state;

		return(
			<div className="log">


			
				
				<form onSubmit={this.onSubmit} className="text-center border border-light p-5" action="#!">
					{this.state.msg }
    			<p className="h4 mb-4 FormTitle">Sign in</p>

   		 	<input name="email" type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail"  onChange={this.onChange}  value={this.state.email} error={errors.email} id="email" required />
			
 
    		<input type="password" name="password"  id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"  onChange={this.onChange}  value={this.state.password} error={errors.password} id="password" required />
			
    
       
            <a href="">Forgot password?</a>
        

  
    	<button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

    
    	<p>Not a member? Please register below.
       
    	</p>

    	<button class="btn btn-info btn-block my-4" type="submit">Register</button>
   

		</form>

				

			
	<Link to={{
				pathname: `${this.props.match.url}/Register`
			}}></Link>
</div>


			)
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
  });
  export default connect(
	mapStateToProps,
	{ loginUser }
  )(withRouter(Login));

  