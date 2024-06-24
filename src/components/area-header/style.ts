import {styled} from 'styled-components'

export const AreaHeaderWrapper = styled.div`
  position: relative;
  top: -5px;
  height: 35px;
  background-color: #C20C0C;
  .area-list {
    .list {
      display: flex;
      margin-left: 180px;
      line-height: 35px;
      font-size: 13px;
      .item {
      a {
        color: #fff;
        margin: 7px 17px;
        padding: 4px 13px;
        border-radius: 16px;
      }
      a:hover, a.active {
        background-color: #9B0909;
      }
    }

    }

  }
`
