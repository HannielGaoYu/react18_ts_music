import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchRecommendDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'
interface IProps {
  children?: ReactNode
}

export const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  }, [])
  return (
    <div className="recommend">
      <TopBanner />
    </div>
  )
}

export default memo(Recommend)
