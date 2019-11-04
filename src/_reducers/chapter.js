const initialState = {
  data: [],
  isLoading: true
}

const chapter = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHAPTER_PENDING':
      return {
        data: action.payload,
        isLoading: true
      }
    case 'GET_CHAPTER':
      return {
        ...action.payload,
        isLoading: true
      }
    case 'GET_CHAPTER_FULFILLED':
        return {
          data: action.payload,
          isLoading: false
        }
    case 'RESET_CHAPTER':
      return {
        data: [],
        isLoading: true
      }

    default:
      return state
  }
}

export default chapter