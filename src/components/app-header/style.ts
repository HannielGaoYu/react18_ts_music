import { styled } from 'styled-components'

export const HeaderWapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-style: 14px;
  .content {
    display: flex;
    justify-content: space-between;
  }
  .content > .nav > a {
    color: #fff;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .title-list {
    display: flex;
    color: #fff;
    line-height: 70px;
    font-size: 15px;
    .item {
      position: relative;
      a {
        padding: 0 18px;
        display: block;
        color: #fff;
      }

      &:hover,
      a.Active {
        background-color: #000;
      }
      .Active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  position: relative;
  color: #ccc;
  line-height: 70px;

  .search {
    font-size: 12px;
    margin-right: 8px;
    padding: 9px 10px;
    border-radius: 18px;
    border: 1px solid #555;
    text-indent: 20px;
  }

  .search-icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translate(50%, -50%);
    background-position: -10px -108px;
    width: 13px;
    height: 14px;
  }

  .center {
    color: #eee;
    font-size: 13px;
    border: 1px solid #555;
    padding: 8px 11px;
    margin-right: 15px;
    border-radius: 15px;
    cursor: pointer;
  }
  .center:hover {
    border: 1px solid #fff;
  }
  .login {
    color: #919191;
    font-size: 13px;
    margin-right: 26px;
    cursor: pointer;
  }
  .login:hover {
    text-decoration: underline;
  }
`
