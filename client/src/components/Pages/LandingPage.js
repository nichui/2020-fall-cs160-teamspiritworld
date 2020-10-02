import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Signin from './Signin';

class Landingpage extends Component {
	render() {
 		return (
  			<BrowserRouter>
    			<div className="Landingpage">
    				<Navbar />
    				
    				
    			</div>
    		</BrowserRouter>
    
  		);
	}
}

export default Landingpage;