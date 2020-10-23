
/*
const initialState = {

    resources:[
    ]
    
};
export default function(state = initialState, action) {

    switch(action.type){
        case GET_RESOURCES:
            return {
                ...state, collection: action.payload
            }
        default:
            return state;

    }

}
*/
import {
    
    GET_RESOURCES,
    GET_RESOURCE,
    RESOURCES_LOADING,
    FETCH_ALL_POSTS_REQUEST,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_FAILURE,
} from '../actions/types';

const initialState = {
    resources: [],
    //resource: null,
    loading: false,
    error:'',
  };
  
export default function(state=initialState,action){
    switch(action.type){
       
        case GET_RESOURCE:
            return {...state, single: action.payload }
       
        case GET_RESOURCES:
            return {...state, resources: action.payload, loading: false }
        case FETCH_ALL_POSTS_REQUEST:
         return {
        ...state,
        loading: true
      };
      case FETCH_ALL_POSTS_SUCCESS:
        return {
            ...state,
            loading: false,
            resources: action.payload,
          };
          case FETCH_ALL_POSTS_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
        default:
            return state;
    }
}