import axios from 'axios';

export const addTodo = newTodo => {
  return {
    type: 'ADD_TODO',
    newTodo,
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id,
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
}

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}

export const getProductRequest = () => {
  return {
    type: 'GET_PRODUCT_REQUEST',
  }
}

export const getProductSuccess = res => {
  return {
    type: 'GET_PRODUCT_SUCCESS',
    res,
  }
}

export const getProductFailure = error => {
  return {
    type: 'GET_PRODUCT_FAILURE',
    error,
  }
}

export const getProduct = () => {
  return (dispatch, getState) => {
    dispatch(getProductRequest());
    return axios.get(`https://vue-course-api.hexschool.io/api/shawn/products/all`)
      .then(res => {
        dispatch(getProductSuccess(res));
      }).catch(error => {
        dispatch(getProductFailure(error));
      })
  }
}