const initialState = {
  data: [],
  isLoading: true
}

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FAVORITE_PENDING':
      return {
        data: action.payload,
        isLoading: true
      }
    case 'GET_FAVORITE':
      return {
        ...action.payload,
        isLoading: true
      }
    case 'GET_FAVORITE_FULFILLED':
        return {
          data: action.payload,
          isLoading: false
        }

    default:
      return state
  }
}

export default favorite