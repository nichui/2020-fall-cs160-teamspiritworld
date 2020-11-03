
import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Landingpage from './components/Pages/LandingPage';
import Login from './components/Pages/Signin';
import Registerpage from './components/Pages/Register';
import {Provider} from "react-redux";
import store from "./store/store";
import Profilepage from './components/Pages/Profile';
import FavListpage from './components/Pages/FavList';
import Contactpage from './components/Pages/Contact';

import PrivateRoute from "./components/private-route/privateRoute";
import Home from "./components/Pages/Home";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
	  // Logout user
	  store.dispatch(logoutUser());    // Redirect to login
	  window.location.href = "./signin";
	}
  }

class App extends Component {
	render() {
 		return (
            <Provider store={store}>
  			<Router>
    			<div className="App">
    				<Route path="/" exact component={Landingpage} />            		
					<Route path="/register" component={Registerpage} />
    				<Route path="/signin" component={Login} />
					<Route path="/profile" component={Profilepage} />
					<Route path="/favlist" component={FavListpage} />
                    <Route path="/contactus" component={Contactpage} />
					<Switch>
              				<PrivateRoute exact path="/home" component={Home} />
            		</Switch>
    				
    				
    			</div>
    		</Router>
            </Provider>
    
  		);
	}
}

export default App;
