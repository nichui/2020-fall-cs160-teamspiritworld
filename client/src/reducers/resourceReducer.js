
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
    
} from '../actions/types';

const initialState = {
    resources: [],
    loading: false,
  };
  
export default function(state=initialState,action){
    switch(action.type){
       
        case GET_RESOURCE:
            return {...state, single: action.payload }
       
        case GET_RESOURCES:
            return {...state, resources: action.payload, loading: false };

        case RESOURCES_LOADING:
            return {
                ...state,
                loading: true
            }
        
        default:
            return state;
    }
}