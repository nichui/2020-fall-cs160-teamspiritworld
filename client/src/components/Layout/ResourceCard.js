import React from "react";
import { Card, CardImg,  CardHeader, CardBody, CardText,Row,Col, Button } from "reactstrap";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom';

//import {Card} from "antd"
//const {Meta } = Card;

/*
const ResourceCard = ({title,content, category,image,rating,slug }) => {

  //const {} = resource;
  return(
<Card
  cover={
    <img src ={image}
    style={{height: "200px", objectFit: "cover"}}
    className="p-1" />
  } 
>
    
    <div>{title}</div>
    <div>{`${content && content.substring(0,100)}...`}</div>
    <>{category}</>
    <>{rating}</>
    


</Card>

)
}
*/

const ResourceCard = ({
  title,
  content,
  category, image,
  rating,slug}) => {
      return(
      
    <div className=" col mb-4 col-sm-4">
     
      
      <Card className="h-80">
        <CardHeader>
          {title}
        </CardHeader>
        
        <CardBody >
        <div class="view overlay">
      <img class="card-img-top" src={image}
        alt="Card image cap"/>
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
        <CardText>
            {`${content && content.substring(0,100)}...`}
          </CardText>
          <CardText>
           Category: {category}
          </CardText>
          <CardText>Rating: {rating}</CardText>
          <Link to={`/resource/${slug}`} >
          <a href="#!" class="blue-text d-flex justify-content-end">
      <h5>Read more <i class="fas fa-angle-double-right"></i></h5>
    </a>
    </Link>

         
        </CardBody>
      </Card>
    
     
    </div>
  
      )

};

/*
const mapStateToProps = (state) => {
  return {
    resource: state.resource,
  };
};
*/
/*
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    getPostDate: (id) => dispatch(getPostDate(id)),
  };
};
*/
/*
const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};
*/
//export default connect(mapStateToProps)(Resource);
export default ResourceCard;