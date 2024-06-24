import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

export const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default hyRequest
