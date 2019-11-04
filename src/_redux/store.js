import { createStore, combineReducers, applyMiddleware } from 'redux'
import { logger, thunk, promise } from './middlewares'

import manga from '../_reducers/manga'
import chapter from '../_reducers/chapter'
import detail from '../_reducers/detail'
import user from '../_reducers/user'
import favorite from '../_reducers/favorite'

const reducers = combineReducers({
  manga,
  chapter,
  detail,
  user,
  favorite,
})

const store = createStore(
  reducers, 
  applyMiddleware(promise, logger)
)

export default store