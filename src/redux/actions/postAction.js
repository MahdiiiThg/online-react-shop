import * as Types from './Types'
import axios from 'axios'

export const fetchPost = () => dispatch =>  {
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(posts => dispatch({
            type: Types.FETCH_POSTS,
            payload: posts
        }));
}

export const creatPost = (post) => dispatch =>  {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => JSON.stringify(res)).then(post => dispatch({
        type: Types.NEW_POSTS,
        payload: post
    }));
}