export const getUser = (payload) => ({
  type: 'GET_USER',
  payload
})

export const updateUser = (payload) => ({
  type: 'UPDATE_USER',
  payload
})

export const logout = () => ({
  type: 'LOGOUT'
})