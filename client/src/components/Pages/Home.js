import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbaruser from "../Layout/NavbarUser";
import {BrowserRouter} from 'react-router-dom';
import { getPopularResources} from '../../actions/resourceAction';
import {RowGenerator, GenerateRowsWithBlocks} from '../../utils/helpers'
import  '../../css/styles.css'
import Resource from '../Layout/Resource'
import {Alert, Spinner} from 'reactstrap';
 

const Home = ({getPopularResources, resource, loading, error

}) => {

  useEffect(()=>{
    getPopularResources();
  },[getPopularResources]);

const noPostsMessage = "There are no posts to be fetched";
//const resarr = Array.from(resource)
//console.log(resarr[1])
const {resources} = resource
const renderPosts =

  resources.length === 0 ? (
    <Alert color = "primary">{noPostsMessage}</Alert>
  ):(
  resources.resources.map((resource)=>{
      return (
      <Resource  key={resource._id}
        title={resource.title}
       content={resource.content}
       rating={resource.rating}
       />
    )
      })
  )

  return(
    <div>
      {loading ? (
        <Spinner color="primary" />
      ): error ? (
        <Alert color="danger">{error}</Alert>
      ):(
        <div>{renderPosts}</div>
      
      )}
    </div>
  )
      }

const mapStateToProps = (state) => {
  
  return {
    loading: state.loading,
    resource: state.resource,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularResources: () => dispatch(getPopularResources()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
/*
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      resources: []
    }
  }
  
  */
  /*
  static propTypes={
    logout: PropTypes.func.isRequired
  }
  */
 /*
  componentDidMount(){
    this.props.dispatch(getResources(6,0,'desc'));
  }
  */
  /*
  showResources = (resource) =>{

    if(resource.collection){
        const rowArray = RowGenerator(resource.collection, 2);
        //console.log(rowArray)
        const generatedResources = GenerateRowsWithBlocks(rowArray,'six')
        return generatedResources;
      }
    return false;
  }
  */
 /*
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  */
/*
  componentDidMount = () => {
    this.props.getPopularResources();
}
*/
/*
  componentDidMount(){

    this.setState({
      resources: this.props.resources.resource
    })
}
*/

/*
loadmore = () => {
    let resourceList = this.props.resources.collection;
    //let count = resourceList.length;
    this.props.dispatch(getPopularResources('desc',resourceList))
}


showResources = (resources) => {
    if(resources){
        const rowsArray = RowGenerator(resources, 2);
        const generatedResources = GenerateRowsWithBlocks(rowsArray,'six')
        return generatedResources;
    }
    return false;
}
*/
/*
  render() {
     //console.log(this.props.resources)
    //const {resources} = this.props.resources;
    const {items} = this.props.resources;
    console.log(this.props.resources)
    return (
     
    <div>
      
      
      <Navbaruser />
      <div style={{ height: "75vh" }} >
        Wecome to the homepage!
       

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              href="#"
              
            >
              Logout
            </button>
              
             {/*this.showResources(this.props.resources)}*/
     /*
     <div>
     <Resource 
          
          title={this.props.resources.title}
          content={this.props.resources.content}
          category={this.props.resources.category}
          rating={this.props.resources.rating}
        />

     </div>
       
        </div>
        </div>
     
    );
  }
}
*/
/*
Home.propTypes = {
  //getResources: PropTypes.func.isRequired,
  //resource: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired

};
const mapStateToProps = state => ({
 // resources: state.resources, //same as the one in rootReducer
  auth: state.auth,
  resources: state.resources,
  loading: state. loading,
  error: state.error
});
const mapDispatchToProps = dispatch =>{
  return {
    getPopularResources: () => dispatch(getPopularResources())
  }
}
export default connect(
  mapStateToProps,
  { logoutUser, getPopularResources }
)(Home);
*/