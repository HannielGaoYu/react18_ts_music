import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWapper } from './style'
import headerTitles from '../../assets/data/header-title.json'

interface IProps {
  children?: ReactNode
}

export const Header: FC<IProps> = () => {
  function showTitles(item: any): any {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.path}
          className={({ isActive }) => {
            return isActive ? 'Active' : ''
          }}
        >
          {item.title}
          <i className="icon spirte_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.href} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWapper>
      <div className="content warp">
        <HeaderLeft>
          <a href="/" className="logo spirte_01">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item: any) => {
              return (
                <div className="item" key={item.title}>
                  {showTitles(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <input
            type="text"
            className="search"
            placeholder="音乐/视频/电台/用户"
          ></input>
          <i className="search-icon spirte_01"></i>
          <a
            className="center"
            href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter"
          >
            创作者中心
          </a>
          <a
            className="login"
            href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter"
          >
            登录
          </a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWapper>
  )
}

export default memo(Header)
