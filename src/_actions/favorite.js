import { createAction } from 'redux-promise-middleware-actions'
import config from '../configs/config'
import Axios from 'axios'
import store from '../_redux/store'

export const getFavorite = createAction('GET_FAVORITE', async () => {
  const id = store.getState().user.data.id
  try {
    const res = await Axios.get(config.host.concat(`/weebtoon/${id}/favorites`))
    return res.data
  } catch(err) {
    console.log(err)
  }
})