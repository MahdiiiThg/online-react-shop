import { combineReducers } from "redux";
import {productReducer} from './producrtReducer'

export default combineReducers({ 
    productReducer: productReducer
});
