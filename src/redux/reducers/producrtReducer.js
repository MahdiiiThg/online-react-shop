import * as Types from '../actions/Types'

const initialState = {
  productList: [],
  productSingle: [],
  productId: '',
  showProduct: false
}

export const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case Types.FETCH_PRODUCT:
      return {
        ...state,
        productList: action.payload
      }
    case Types.FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        productSingle: action.payload
      }
    case Types.FETCH_SINGLE_PRODUCT_ID:
      return {
        ...state,
        productId: action.payload
      }
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