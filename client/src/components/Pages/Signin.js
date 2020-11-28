import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {createOrUpdateUser} from '../../../functions/auth'




const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));


  useEffect(() => {
    let intended = history.location.state;
    if (intended) {
      return;
    } else {
      if (user && user.token) history.push("/");
    }
  }, [user, history]);

  let dispatch = useDispatch();

  const roleBasedRedirect = (res) => {
    // check if intended
    let intended = history.location.state;
    if (intended) {
      history.push(intended.from);
    } else {
      if (res.data.role === "admin") {
        history.push("/admin/dashboard");
      } else {
        history.push("/user/history");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      // console.log(result);
      const { user } = result;
	  const idTokenResult = await user.getIdTokenResult();
	  console.log('user', user)
	  
      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          roleBasedRedirect(res);
        })
        .catch((err) => console.log(err));

      //history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
	  
		
		createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            roleBasedRedirect(res);
          })
          .catch((err) => console.log(err));
		//history.push("/");
		
	  })
	  
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
	  });
	  
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          autoFocus
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
      </div>

      <br />
      <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </Button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="h4 mb-4 FormTitle">Login</h4>
          )}
          {loginForm()}

          <Button
            onClick={googleLogin}
            type="danger"
            className="mb-3"
            block
            shape="round"
            icon={<GoogleOutlined />}
            size="large"
          >
            Login with Google
          </Button>

          <Link to="/forgot/password" className="float-right text-danger">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
/*need
import React, {Component} from 'react';
import '../../../css/styles.css';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
//import {Formik} from 'formik';
import { connect } from "react-redux";
import {toast} from 'react-toastify'
import {auth } from '../../../firebase'
import {Button} from 'antd'
import { MailOutlined} from '@ant-design/icons';

need*/

//import { loginUser } from "../../actions/authActions";
/*need
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
	setEmail(){
		this.state.email = this.email
	}
	  
	setPassword(){
		this.state.password = this.password
	}
	  need*/
	/*
	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
		  this.props.history.push("/home");
		}
	  }
	*/
	/*
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
		  this.props.history.push("/home"); // push user to dashboard when they login
		}
		if (nextProps.errors) {
			this.setState({
			  errors: nextProps.errors
			});
		  }
		}
		*/
		/*need
		onChange =  (e) => {
			this.setState({ [e.target.id]: e.target.value });
		  };
		
		  onSubmit = async(e) => {
			e.preventDefault();
			//new
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
			const userData = {
			  email: this.state.email,
			  password: this.state.password
			};
		
			//this.props.loginUser(userData);
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
			
    
       need*/
        

  
    	{/*<button class="btn btn-info btn-block my-4" type="submit">Sign in</button>*/}
		/*need
		<Button onClick={this.onSubmit}
		type="primary"
		className="mb-3"
		block
		shape="round"
		icon={<MailOutlined/>}
		size="large"
		disabled={!this.state.email || this.state.password.length < 8}>
			Login with Email/Password
		</Button>

    
       

		</form>

				

			
	
</div>

need*/
			//)
	//}
//}
/*need
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
*need*/
//export default Login;

  /*need
import React from 'react'

const Signin = () => {

	return (
		<div>
			<p>
				Login
			</p>
		</div>
	)
}
export default Signin;
*need*/
