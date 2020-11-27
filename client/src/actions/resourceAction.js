import axios from 'axios';
import {GET_RESOURCES,GET_RESOURCE,RESOURCES_LOADING,FETCH_ALL_POSTS_FAILURE,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_REQUEST,
    SEARCH_QUERY} from '../actions/types';
import {returnErrors} from "./errorAction"
/*
export function getPopularResources(
    title,
    content,
    category,
    rating,
    order = 'asc',
    list
){
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    const body = JSON.stringify({ title,content,category,rating });

    const request = axios.get(`/api/resources/popular?order=${order}`,body,config)
                    .then (response =>{
                        return list ? [...list,...response.data] : response.data;
                    });

                    return {

                        type: GET_RESOURCES,
                        payload: request
                    }
}


export function getResource(resourceId){
    //  /api/resources/resource?id=5e13765a4084511885f252f1

    const request = axios.get(`/api/resources/resource?id=${resourceId}`)
                 .then( response => {
                     return response.data
                 }).catch((err)=>{
                     return false
                 })

     return {
         type: GET_RESOURCE,
         payload: request
     }

 }


 export const setResourcesLoading = () => {
    return {
      type: RESOURCES_LOADING
    };
  };
  */
 export const getCategories = async ()=>


  //dispatch(setItemsLoading());
  await axios
    .get('/api/categories')




export const getCategory = (slug) =>(dispatch) => {

  dispatch(setItemsLoading());
  axios
    .get(`/api/resources/category/${slug}`)
    .then(response =>
      //const resources = response.data;
      dispatch({ type: GET_RESOURCES, payload: response.data })
    )
    .catch((err) =>
      dispatch(returnErrors(
       err.response.data,
      ))
      );

};
 export const getResourcesByCount = async (count) =>

   // dispatch(setItemsLoading());
     axios
      .get(`/api/resources/resource${count}`);



  export const getResource = (resourceId) => (dispatch) => {

    dispatch(setItemsLoading());
    axios
      .get(`/api/resources/resource?id=${resourceId}`)
      .then(response =>
        //const resources = response.data;
        dispatch({ type: GET_RESOURCE, payload: response.data })
      )
      .catch((err) =>
        dispatch(returnErrors(
         err.response.data,
        ))
        );
  }
  export const fetchResourcesByFilter = async (arg)  =>


   axios
      .post('/api/resources/search/filters',arg)



  /*
  export const getResources = (sort,order, page) => (dispatch) => {
    dispatch(setItemsLoading());
    axios
      .get(`/api/resources/`,sort,order,page)
      .then(response =>
        //const resources = response.data;
        dispatch({ type: GET_RESOURCES, payload: response.data })
      )
      .catch((err) =>
        dispatch(returnErrors(
         err.response.data,
        ))
        );

  }
  */
  export const setItemsLoading = () => {
    return {
      type: RESOURCES_LOADING
    };
  };
