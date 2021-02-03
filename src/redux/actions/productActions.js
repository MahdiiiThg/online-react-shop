import * as types from './Types'

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