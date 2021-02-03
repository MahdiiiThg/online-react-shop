import * as Types from '../actions/Types'

const initialState = {
    items: {},
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case Types.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case Types.NEW_POSTS: 
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}


