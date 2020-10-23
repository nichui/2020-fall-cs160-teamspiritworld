import React, {Component} from 'react';
import '../../css/styles.css';
import {Link} from 'react-router-dom';
import {Formik} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({

	password: Yup.string().min(6,'Too short').required('Required !!'),
	email: Yup.string().email('Invalid email :(').required('Required !!'),
})

class Signin extends Component {
	constructor(props){
		super()
		this.props = this.props
	}
	state = {
		success: false,
		validation:false
	}

	handleChange=(e) => {
		console.log(e)
	}
	handleSubmit=(e) => {
		console.log(e)
	}
	render(){

		return(
			<div className="log">


			
			<Formik
				initialValues={{email:'john.doe@sjsu.edu',password:'password123'}}
				validationSchema={LoginSchema}
				onSubmit={values=>{
					console.log(values)
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

				
				<form onSubmit={handleSubmit} className="text-center border border-light p-5" action="#!">

    			<p className="h4 mb-4 FormTitle">Sign in</p>

   		 	<input onChange={handleChange} onBlur={handleBlur} value={values.email} name="email" type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail"/>
			{errors.email && touched.email ?
				<div className="error_label">{errors.email}</div>/*come from Yup*/
		
		:null}
 
    		<input onChange ={handleChange} type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"/>
			{errors.password && touched.password?
				<div className="error_label">{errors.password}</div>/*come from Yup*/
		
		:null}
    
       
            <a href="">Forgot password?</a>
        

  
        <div>
		<a class="nav-link" href="/Welcome">
            <button type="button" class="btn btn-info btn-block my-4 ">Sign in</button>
        </a>         

        </div>

    
    	<p>Not a member? Please register below.
       
    	</p>

        <div>
            <a class="nav-link" href="/Register">
                <button type="button" class="btn btn-info btn-block my-4 ">Register</button>
            </a>         

        </div>

   

		</form>

				)}

			</Formik>
			
	<Link to={{
				pathname: `${this.props.match.url}/Register`
			}}></Link>
</div>


			)
	}
}
export default Signin