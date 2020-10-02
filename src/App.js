import React, {Component} from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";

import Landingpage from './components/Pages/LandingPage';
import Loginpage from './components/Pages/Signin'
import Registerpage from './components/Pages/Register'
import Welcomepage from './components/Pages/WelcomePage'


class App extends Component {
	render() {
 		return (
  			<Router>
    			<div className="App">
    				<Route path="/" exact component={Landingpage} />
    				<Route path="/Signin" component={Loginpage} />
                    <Route path="/Register" component={Registerpage} />
                    <Route path="/Welcome" component={Welcomepage} />
    				
    				
    			</div>
    		</Router>
    
  		);
	}
}

export default App;
