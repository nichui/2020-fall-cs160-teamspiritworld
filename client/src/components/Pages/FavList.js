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
					
    				<h1><center>Favorites List</center></h1>
                    
    				<div class="grid-container">
                        <div class="grid-item">
                            <h3>KLEVR Lab</h3>
                            <img src={Logo} height="200" width="400" class="d-inline-block align-left"
     			            alt="KLEVR" />
                             <h5>Description</h5>
                             </div>
                             
                        <div class="grid-item">
                            <h3>SCE Club</h3>
                            <img src={Logo1} height="200" width="400" class="d-inline-block align-left"
     			            alt="SCE" />
                             <h5>Description</h5>
                             </div>
                        <div class="grid-item">
                            <h3>Wellness Center</h3>
                            <img src={Logo2} height="200" width="400" class="d-inline-block align-left"
     			            alt="wellness center" />
                             <h5>Description</h5>
                             </div>
                        <div class="grid-item">
                            <h3>Sound Studio</h3>
                            <img src={Logo3} height="200" width="400" class="d-inline-block align-left"
     			            alt="sound studio" />
                             <h5>Description</h5>
                             </div>
                        <div class="grid-item">
                            <h3>MLK Study Rooms</h3>
                            <img src={Logo4} height="200" width="400" class="d-inline-block align-left"
     			            alt="sound studio" />
                             <h5>Description</h5>
                             </div>
                    </div>
    			</div>
    		</BrowserRouter>
        );
    }
}

export default FavListpage
