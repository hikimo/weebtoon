import { createAction } from 'redux-promise-middleware-actions'
import config from '../configs/config'
import Axios from 'axios'

export const getChapter = createAction('GET_CHAPTER', async (id) => {
  try {
    const res = await Axios.get(config.host.concat(`weebtoon/${id}/chapters`))
    return res.data
  } catch(err) {
    console.log(err)
  }
})

export const resetChapter = () => ({
  type: "RESET_CHAPTER"
})