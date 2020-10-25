import React from 'react';
import {NavLink} from 'react-router-dom'
import '../../css/styles.css';

const FavListLinks = () => {

	return(
		<a className="nav-link" href="/FavList">
          <button type="button" className="btn btn-info btn-primary  btn-sm my-0 ">Favorite List</button>
          

        </a>



	)
}

export default FavListLinks