const initialState = {
  data: [],
  isLoading: true
}

const detail = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_CHAPTER_PENDING':
      return {
        data: action.payload,
        isLoading: true
      }
    case 'GET_DETAIL_CHAPTER':
      return {
        ...action.payload,
        isLoading: true
      }
    case 'GET_DETAIL_CHAPTER_FULFILLED':
        return {
          data: action.payload,
          isLoading: false
        }
    case 'RESET_DETAIL_CHAPTER':
      return {
        data: [],
        isLoading: true
      }

    default:
      return state
  }
}

export default detail