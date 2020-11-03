import React, {Component} from 'react';
import '../../css/styles.css';
import {Link, withRouter} from 'react-router-dom';
import Navbar from '../Layout/NavbarLanding';
import {BrowserRouter} from 'react-router-dom';
import Logo from '../pics/KLEVRlab.jpg';
import Logo1 from '../pics/SCE.jpg';
import Logo2 from '../pics/WellnessCenter.jpg';
import Logo3 from '../pics/SoundStudio.jpg';
import Logo4 from '../pics/table.jpg';

class FavListpage extends Component {
    render() {
        return (
            <BrowserRouter>
    			<div className="Landingpage">
    				<Navbar />
					
    				<h1><center>Contact Us</center></h1>
                    
    				<div class="split left">
                      <div class="centered">
                        <h3>Phone Number:</h3>
                        <p>XXX-XXX-XXXX</p>
                        <h3>Email:</h3>
                        <p>spiritworld@gmail.com</p>
                        <h3>Social Media:</h3>
                        <p>Facebook</p>
                        <p>Twitter</p>
                      </div>
                    </div>

                    <div class="split right">
                      <div class="centered">
                        <h4>Write a message</h4>
                        <form>
                            <textarea rows="1" cols="57">
                                Subject
                            </textarea>
                            <textarea rows="10" cols="57">
                                Enter Message
                            </textarea>
                            <input type="submit" value="Submit"></input>
                        </form>
                      </div>
                    </div>
    			</div>
    		</BrowserRouter>
        );
    }
}

export default FavListpage
