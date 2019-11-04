import { createAction } from 'redux-promise-middleware-actions'
import config from '../configs/config'
import Axios from 'axios'

export const getManga = createAction('GET_MANGA', async () => {
  const res = await Axios.get(config.host.concat('weebtoons'))
  return res.data
})