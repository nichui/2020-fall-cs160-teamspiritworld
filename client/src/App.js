
import React, {Component} from 'react';
import Login from './components/Users/login'
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";

import Landingpage from './components/Pages/LandingPage';
import Loginpage from './components/Pages/Signin'
import Registerpage from './components/Pages/Register'


class App extends Component {
	render() {
 		return (
  			<Router>
    			<div className="App">
    				<Route path="/" exact component={Landingpage} />
    				<Route path="/Signin" component={Loginpage} />
            <Route path="/Register" component={Registerpage} />
    				
    				
    			</div>
    		</Router>
    
  		);
	}
}

export default App;
