const initialState = {
  data: [],
  isLoading: true
}

const manga = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MANGA_PENDING':
      return {
        data: action.payload,
        isLoading: true
      }
    case 'GET_MANGA':
      return {
        ...action.payload,
        isLoading: true
      }
    case 'GET_MANGA_FULFILLED':
        return {
          data: action.payload,
          isLoading: false
        }

    default:
      return state
  }
}

export default manga