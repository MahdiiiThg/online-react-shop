import * as types from './Types'

// axios
import axios from 'axios'

// api
import { api } from '../api/api'

export const fetchProducts = (brand,product_type,product_category) => async dispatch => {
  try {
    dispatch({type: types.SET_LOADING})
    const res = await axios({
      method: 'get',
      url: api.baseUrl,
      params: {
        brand: brand,
        product_type: product_type,
        product_category: product_category
      }
    })
    dispatch({
      type: types.FETCH_PRODUCT,
      payload: res
    })
    dispatch({type: types.REMOVE_LOADING})
  } catch(e) {
    dispatch({
      type: types.ERROR,
      payload: console.log('ERROR',e)
    })
  }
}

export const fetchSingleProducts = (id) => async dispatch => {
  try {
    dispatch({type: types.SET_LOADING})
    const res = await axios({
      method: 'get',
      url: api.singleProduct+`${id}.json`,
    })
    dispatch({
      type: types.FETCH_PRODUCT,
      payload: res
    })
    dispatch({type: types.REMOVE_LOADING})
  } catch(e) {
    dispatch({
      type: types.ERROR,
      payload: console.log('ERROR',e)
    })
  }
}

export const getProductId = (id) => async dispatch => {
  dispatch({
    type: types.FETCH_SINGLE_PRODUCT_ID,
    payload: id
  })
}

export const setLoading = () => async dispatch => {
  dispatch({
    type: types.SET_LOADING,
    payload: true
  })
}

export const removeLoading = () => async dispatch => {
  dispatch({
    type: types.REMOVE_LOADING,
    payload: false
  })
}

export const activeSIngleProduct = () => async dispatch => {
  dispatch({
    type: types.SHOW_PRODUCT_CARD,
    payload: true
  })
}

export const deActiveSIngleProduct = () => async dispatch => {
  dispatch({
    type: types.HIDE_PRODUCT_CARD,
    payload: false
  })
}