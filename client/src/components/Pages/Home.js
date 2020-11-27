import React, { Component, useEffect,useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect, useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbaruser from "../Layout/NavbarUser";
import {BrowserRouter} from 'react-router-dom';
import { getResourcesByCount, fetchResourcesByFilter, getCategories} from '../../actions/resourceAction';
import  '../../css/styles.css'
import ResourceCard from '../Layout/ResourceCard'
import {Container,Row} from 'reactstrap';
import Search from '../Features/Search';
import Star from "../Features/Star"
import {Menu, Checkbox} from "antd";
import {DownCircleOutlined, DownSquareOutlined, StarOutlined} from '@ant-design/icons'
import { SEARCH_QUERY } from '../../actions/types'

const {SubMenu, ItemGroup} = Menu;

const Home = () => {

  const [resources, setResources] = useState([])

  const[loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [categoryIds, setCategoryIds] = useState([])
  const [star, setStar] = useState('')

  let dispatch = useDispatch()
  let {search} = useSelector((state) => ({ ...state}));
  const {text} = search;

  useEffect(()=>{
    loadAllResources()

    getCategories().then((res) =>
    setCategories(res.data)
  )

}, [])

//1. load resources by default on page load
const loadAllResources =() => {
  getResourcesByCount(4).then((r)=>{
    setResources(r.data)
    setLoading(false)
  })
}
//2. load resources on user search input
useEffect(() => {
  const delayed = setTimeout(() =>{
    fetchResources({query:text})

  },300)
  console.log(text)
  return () => clearTimeout(delayed)


},[text])

const fetchResources = (arg) => {
  fetchResourcesByFilter(arg).then(res => {
    setResources(res.data)
  })
}


const resourcesList = [
  "SJSU Bowling",
  "SASE",
  "Writing Center",
  "Food Pantry",
  "KLEVR Lab",
  "Spartan Racing"
];


 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 React.useEffect(() => {
    const results = resourcesList.filter(resc =>
      resc.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

const showCategories = () => categories.map((c) =>(
  <div key={c._id}>
  <Checkbox onChange={handleCheck} className="pb-2 pl-4 pr-4"  style={{
    paddingTop: "20px"

  }} value={c._id} name="category" checked={categoryIds.includes(c._id)}>

  {c.name}
  <br />
  </Checkbox>
  <br />
  </div>
))
const handleStarClick = (num) => {
  console.log(num)
}
const showStars = () => (
  <div className="pr-4 pl-4 pb-2">

  <Star starClick={handleStarClick} numberOfStars={5} />
  </div>

)
const handleCheck = e => {
  dispatch({
    type: SEARCH_QUERY,
    payload: {text: ""}
  })
  //console.log(e.target.value)
  let inTheState = [...categoryIds];
  let justChecked = e.target.value;
  let foundInTheState = inTheState.indexOf(justChecked)
  if(foundInTheState === -1) {
    inTheState.push(justChecked)
  }else{
    inTheState.splice(foundInTheState, 1)

  }
  setCategoryIds(inTheState)
  fetchResources({category: inTheState})
}
return(
  <div>
  <div>
  <Navbaruser />
  </div>

<div>
<div className="float" style={{
  paddingTop: "10px" }}>

  </div>


  <div className="container-fluid" style={{
    paddingTop: "20px"

  }} >
  <Row>
  <div className="col-md-3 pt-2">
  <h4>Search/Filter menu</h4>
  <hr />
  <Menu defaultOpenKeys={["1","2"]} mode="inline"  >
  <SubMenu key="1" title={
    <span className="h6" >

    Categories
    <DownSquareOutlined />
    </span>
  }>
  <div style={{maringTop: "-10px"}}>
  {showCategories()}

  </div>
  </SubMenu>

  <SubMenu key="2" title={
    <span className="h6" style={{
      paddingTop: "20px"

    }}>

    Rating
    1
    2
    3
    4
    5
    </span>
  }>
  <div style={{maringTop: "-10px" }}>
  {showStars()}

  </div>
  </SubMenu>

  </Menu>

  </div>

  <div className="col-md-9">
  {loading? (
    <h4 className="text-danger"> Loading...</h4>
  ) : (
    <h4 className="text-danger">Resources</h4>
  ) }
  {resources.length < 1 && <p>No resources found</p>}
  <div className="row">
  {resources.map((res)=>(
    <ResourceCard
    key={res._id}
    id={res._id}
    title={res.title}
    content={res.content}
    category={res.category}
    image={res.image.image}
    rating={res.rating}
    favorites={res.fav}



    />
  ))}
  </div>
  </div>
  </Row>
  </div>
  </div>
  <div className="col-md-9">
  <div className="App">
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
    />
    <ul>
       {searchResults.map(item => (
         <ResourceCard
         title={item}
         />
      ))}
    </ul>
  </div>
  </div>

  </div>






)
}

const mapStateToProps = (state) => {

  return {
    resource: state.resource,
  };
};
/*
const mapDispatchToProps = (dispatch) => {
return {
getPopularResources: () => dispatch(getPopularResources()),
};
};
*/

export default connect(mapStateToProps,{getResourcesByCount})(Home);
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
