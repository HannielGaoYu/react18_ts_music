import {hyRequest} from '@/service/index'

export function fetchBannerData(){
  return hyRequest.get({
    url: "/banner"
  })
}
