import {
    
   SEARCH_QUERY
} from '../actions/types';

const initialState = {
    search: " "
    
  };
  
export default function(state=initialState,action){
    switch(action.type){
       
        case SEARCH_QUERY:
            return { ...state, ...action.payload}
           
        default:
            return state;
    }
}