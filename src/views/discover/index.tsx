import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import {AreaHeader} from '@/components/area-header'

export const Discover = () => {
  return (
    <div className="discover">
      <AreaHeader></AreaHeader>
      <Suspense>
        <div>{<Outlet />}</div>
      </Suspense>
    </div>
  )
}

export default Discover
