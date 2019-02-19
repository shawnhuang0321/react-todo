const loading = (state = false, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_REQUEST':
      console.log(action.type)
      return true;
    case 'GET_PRODUCT_SUCCESS':
      console.log(action.type)
      console.log(action.res)
      return false;
    case 'GET_PRODUCT_FAILURE':
      console.log(action.type)
      console.log(action.error)
      return false;
    default:
      return state;
  }
}

export default loading;