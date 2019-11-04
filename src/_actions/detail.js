import { createAction } from 'redux-promise-middleware-actions'
import config from '../configs/config'
import Axios from 'axios'

export const getDetail = createAction('GET_DETAIL_CHAPTER', async (id, cId) => {
  try {
    const res = await Axios.get(config.host.concat(`weebtoon/${id}/chapter/${cId}`))
    return res.data
  } catch(err) {
    console.log(err)
  }
})

export const resetDetailChapter = () => ({
  type: "RESET_DETAIL_CHAPTER"
})