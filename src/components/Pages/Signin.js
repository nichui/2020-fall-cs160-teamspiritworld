import React, {Component} from 'react';
import '../../css/styles.css';
import {Link} from 'react-router-dom';

class Signin extends Component {
	constructor(props){
		super()
		this.props = this.props
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


			<form onSubmit={this.handleSubmit} className="text-center border border-light p-5" action="#!">

    			<p className="h4 mb-4 FormTitle">Sign in</p>

  
   		 <input onChange={this.handleChange} type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail"/>

 
    <input onChange ={this.handleChange} type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password"/>

    
       
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
export default Signin