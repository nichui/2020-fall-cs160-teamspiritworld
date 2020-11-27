import React, { Component, useEffect,useState } from "react";
import PropTypes from "prop-types";
import { connect, useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbaruser from "../Layout/NavbarUser";
import {BrowserRouter} from 'react-router-dom';
import { getResourcesByCount, fetchResourcesByFilter, getCategories} from '../../actions/resourceAction';
import  '../../css/styles.css'
import FavCard from '../Layout/FavCard'
import {Container,Row} from 'reactstrap';
import Search from '../Features/Search';
import Star from "../Features/Star"
import {Menu, Checkbox} from "antd";
import {DownCircleOutlined, DownSquareOutlined, StarOutlined} from '@ant-design/icons'
import { SEARCH_QUERY } from '../../actions/types'

const {SubMenu, ItemGroup} = Menu;

const FavList = () => {

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




/*
useEffect(()=>{
getResourcesByCount(4);
},[getResourcesByCount]);
*/


//const {resources} = resource





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
  <Navbaruser />
  <div className="col-md-9">
  {loading? (
    <h4 className="text-danger"> Loading...</h4>
  ) : (
    <h4 className="text-danger">Favorites List</h4>
  ) }
  {resources.length < 1 && <p>No resources found</p>}
  <div className="row">
  {resources.map((res)=>(
    <FavCard
    key={res._id}
    id={res._id}
    title={res.title}
    content={res.content}
    category={res.category.slug}
    image={res.image.image}
    />
  ))}
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

export default connect(mapStateToProps,{getResourcesByCount})(FavList);
