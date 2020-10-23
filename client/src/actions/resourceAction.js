import axios from 'axios';
import {GET_RESOURCES,GET_RESOURCE,RESOURCES_LOADING,FETCH_ALL_POSTS_FAILURE,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_REQUEST} from '../actions/types';
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
 export const getPopularResources = () => (dispatch) => {
    /*
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    //Request body
    
    const body = JSON.stringify({
      title, content,category,rating
    });
    */
    dispatch({ type: FETCH_ALL_POSTS_REQUEST });
    axios
      .get("/api/resources/popular")
      .then((response) => {
        //const resources = response.data;
        dispatch({ type: FETCH_ALL_POSTS_SUCCESS, payload: response.data });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_ALL_POSTS_FAILURE,
          payload: "Something went wrong while fetching all the resources",
        });
      });
  };
  export const setItemsLoading = () => {
    return {
      type: RESOURCES_LOADING
    };
  };
  
  