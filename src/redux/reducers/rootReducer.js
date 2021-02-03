import { combineReducers } from "redux";
import postsReducer from './posts'
import {productReducer} from './producrtReducer'

export default combineReducers({ 
    posts: postsReducer,
    productReducer: productReducer
});
