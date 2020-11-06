
import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Navbar from '../Layout/NavbarLanding';
import Signin from './Signin';
import styles from '../../css/styles.css'


class FAQ extends Component {
	render() {
 		return (
		
		  <div>
<h1>FAQ Section</h1>
	<div class="container">
	
		<div class="acc">
			<h3>Question 1: Who can use Spirit World?</h3>
			<div class="content">
				<div class="content-inner">
					<p>Only SJSU Students and Faculty members can use Spirit World.</p>
				</div>
			</div>
		</div>

	
		<div class="acc">
			<h3>Question 2: How is Spirit World different from the SAMMY app?</h3>
			<div class="content">
				<div class="content-inner">
					<p>Spirit World lets you personalize and rate resources.</p>
				</div>
			</div>
		</div>

		
		<div class="acc">
			<h3>Question 3: How do I personalize my set of resources?</h3>
			<div class="content">
				<div class="content-inner">
					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
					<p>
						The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
					</p>
				</div>
			</div>
		</div>

	
		<div class="acc">
			<h3>Question 4: What if I can't find the resource or place I'm looking for?</h3>
			<div class="content">
				<div class="content-inner">
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
				</div>
			</div>
		</div>
	</div>
				  </div>
    
  		); 
	} 
}


export default FAQ;


/*
$(document).ready(function(){
	$('.acc h3').click(function(){
		$(this).next('.content').slideToggle();
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().children('.content').slideUp();
		$(this).parent().siblings().removeClass('active');
	});
});
 */