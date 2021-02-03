import * as Types from '../actions/Types'

const initialState = {
  showProduct: false
}

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case Types.SHOW_PRODUCT_CARD:
      return {
        ...state,
        showProduct: true
      }
    case Types.HIDE_PRODUCT_CARD:
      return {
        ...state,
        showProduct: false
      }
    default:
      return state
  }
}