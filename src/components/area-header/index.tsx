import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

export const AreaHeader: FC<IProps> = () => {
  function showAreaHeaderTitles(item: any): ReactNode {
    return (
      <NavLink
        to={item.link}
        className={({ isActive }) => {
          return isActive ? 'active' : ''
        }}
      >
        {item.title}
      </NavLink>
    )
  }
  return (
    <AreaHeaderWrapper>
      <div className="area-list wrap-v1">
        <div className="list">
          {discoverMenu.map((item: any) => {
            return <div className="item">{showAreaHeaderTitles(item)}</div>
          })}
        </div>
      </div>
    </AreaHeaderWrapper>
  )
}

export default memo(AreaHeader)
