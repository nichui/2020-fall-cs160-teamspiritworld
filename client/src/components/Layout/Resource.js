import React from "react";
import { Card, CardHeader, CardBody, CardText, Button } from "reactstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
const Resource = ({
  title,
  content,
  category,
  rating,resource}) => {
      return(
  
    <div className="mb-4">
      <Card>
        <CardHeader>
          {title}
        </CardHeader>
        <CardBody>
          
          <CardText>{content}</CardText>
          <CardText>
            {category}
          </CardText>
          <CardText>{rating}</CardText>
          
         
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
export default Resource;