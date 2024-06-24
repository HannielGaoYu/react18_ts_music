import { styled } from 'styled-components'

export const BannerWrapper = styled.div`
  background-color: #f3c258;
  margin-top: -5px;
  .banner {
    position: relative;
    display: flex;
    height: 270px;
  }
`

export const BannerLeft = styled.div`
  position: relative;
  width: 730px;
  .item {
    height: 270px;
    .imagePic {
      width: 100%;
      height: 100%;
    }
  }
  .dots {
    position: absolute;
    bottom: 20px;
    margin-left: -100px;
    left: 50%;
    display: flex;
    .dot {
      width: 8px;
      height: 8px;
      background-color: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      margin: 0 6px;
    }
    .dot.active {
      background-color: rgba(255, 16, 89, 0.6);
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: '_blank'
})`
  width: 252px;
  height: 270px;
  background-image: url(${require('../../../../../../assets/img/download.png')});
  background-repeat: no-repeat;

`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  display: block;
  transform: translateY(-50%);
  height: 63px;
  cursor: pointer;
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
