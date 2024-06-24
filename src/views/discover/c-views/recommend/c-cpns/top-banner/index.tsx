import { shallowEqualApp, useAppSelector } from '@/store'
import React, { ElementRef, memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}

export const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  function handleBeforeChange() {}

  function handleAfterChange(currentIndex: number) {
    setCurrentIndex(currentIndex)
  }

  function handleBeforeBanner() {
    bannerRef.current?.prev()
  }

  function handleNextBanner() {
    bannerRef.current?.next()
  }

  let bgImageUrl = null
  if (currentIndex >= 0 && banners.length > 0) {
    bgImageUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }
  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            autoplaySpeed={3500}
            effect="fade"
            ref={bannerRef}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {banners.map((item: any) => {
              return (
                <div className="item" key={item.imageUrl}>
                  <img src={item.imageUrl} className="imagePic" alt="" />
                </div>
              )
            })}
          </Carousel>
          <div className="dots-control">
            <div className="dots">
              {banners.map((item, index) => {
                return <div className={`dot ${currentIndex == index ? 'active' : ''}`} key={item.imageUrl}>
                </div>
              })}
            </div>
          </div>

        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <div className="left btn" onClick={handleBeforeBanner}></div>
          <div className="right btn" onClick={handleNextBanner}></div>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
