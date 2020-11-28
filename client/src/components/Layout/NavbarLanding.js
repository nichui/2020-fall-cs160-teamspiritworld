import React, {useState} from 'react'
import {Menu} from 'antd'
import Logo from './Logo.svg';
import '../../css/styles.css';
import firebase from 'firebase'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'


import { SettingOutlined,LogoutOutlined, QuestionOutlined, UserOutlined, UserAddOutlined, PlusSquareOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'

const { SubMenu, Item } = Menu;



const NavbarLanding = () => {
	const [current, setCurrent] = useState('Home')
	let dispatch = useDispatch()
	let {user} = useSelector((state) => ({...state}))
  let history = useHistory()

	const handleClick=(e) =>{
		//console.log(e.key)

		setCurrent(e.key)

	
	}
	{/*
		const logout=()=>{
    firebase.auth().signOut()
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
    history.push('/login')
  }
  
	*/}

	

  const logout=()=>{
    firebase.auth().signOut()
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
    history.push('/login')
  }
  
  
    return (
		
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
		  	<a className="navbar-brand " >
				<img src={Logo} height="55" class="d-inline-block float-left"
     			alt="spartan logo" /> <span className="Logo"><Link to="/" className="Logo">SpiritWorld </Link></span>			
			</a>
			
		
		{!user && (
        <Item key="register" icon={<UserAddOutlined />} className='float-right'>
         <Link to="/register">Register </Link>
        </Item>)}
		{!user && (
		<Item key="login" icon={<UserOutlined />} className="float-right">
         <Link to="/login">Login</Link>
        </Item>
		)}
		

		{!user && (
        <Item key="faq" icon={<QuestionOutlined />} className="float-right" >
         <Link to="/faq">FAQ </Link>
        </Item>
		)}
		
		
		{user && (
        <SubMenu icon={<SettingOutlined />} title={user.email && user.email.split('@')[0]} className="float-right">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>

		</SubMenu>
		)}
		{user && (
		<Item key="register" icon={<PlusSquareOutlined />} className='float-right'>
         <Link to="/favlist">Favorite List </Link>
        </Item>
		)}
		

		
       
      </Menu>
	  
    );
  }


export default NavbarLanding;


/*need
import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/styles.css';
import Logo from './Logo.svg';
import AboutUsLinks from './AboutUsLink';
import FAQLinks from './FAQLink';
import LoginLinks from './LoginLink';
import ProfileLinks from './ProfileLink';
import FavListLinks from './FavListLink';
import ContactUsLinks from './ContactUsLink';

const Navbar = () => {

	return (
		<nav className="mb-1 navbar navbar-expand-lg navbar-light white
		 lighten-1 justify-content-between">

			<a className="navbar-brand" >
				<img src={Logo} height="55" class="d-inline-block align-left"
     			alt="spartan logo" /> <span className="Logo"><Link to="/" className="Logo">SpiritWorld </Link></span>			
			</a>
			
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
   				aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
   			 		<span class="navbar-toggler-icon"></span>
  				</button>
  				
  					<div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    					 <form class="form-inline my-2 my-lg-0">
    						<ul class="navbar-nav mr-auto">
      						
      							
      							<li class="nav-item">
      								<FAQLinks />
        				
     							</li>
      							<li class="nav-item">
      				
        							<LoginLinks />

     							</li>

								
     						
    					</ul>
    					</form>

   					</div>
			
  					

		</nav>


	)
	
}

export default Navbar
need*/

