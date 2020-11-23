import React, {Component} from 'react';
import '../../css/styles.css';
import Navbar from '../Layout/NavbarLanding';
import {BrowserRouter} from 'react-router-dom';
import Navbaruser from "../Layout/NavbarUser";


class Profilepage extends Component {
    // mongoDB fetch data (?) WIP
    /*
    constructor(props) {
        super(props);
    
        this.AddName = this.AddName.bind(this);
        this.AddEmail = this.AddEmail.bind(this);
    
        this.state = {
          name: "",
          email: ""
        };
      }
      */
     constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('Password was submitted');
        event.preventDefault();
      }
     
    render() {
        return (
            <BrowserRouter>
    			<div className="Landingpage">
          <div>
<Navbaruser />
</div>
					<div className="ProfilePage">
                        <h2>Name</h2>
                        <p>John Doe</p> 
                        <h2>Email</h2>
                        <p>john.doe@sjsu.edu</p>
                        <h2>School</h2>
                        <p>Student</p>
                        <p>San Jose State University</p>
                        
                        <form onSubmit={this.handleSubmit}>
                            <h2>Password Reset</h2>
                            <label>
                                Enter in current password:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                            <label>
                                Enter in new password:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>

                        <div className="ProfileFavListButton"> 
                        <form action="/FavList">
                            <input type="submit" value="Favorites List" />
                        </form>
                        </div>
                        </div>
    				
    			</div>
    		</BrowserRouter>
        );
    }
}

export default Profilepage
