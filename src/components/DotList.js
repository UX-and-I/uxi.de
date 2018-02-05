import styled from 'styled-components'
import { colors, lineHeight, px2em, px2rem } from '../constants'

export const DotList = styled.ul`
  margin: ${px2rem(32)} 0;
  paddng: 0;
  list-style: none;
`
export const DotListItem = styled.li`
  position: relative;
  padding: 0 0 0 ${px2rem(16)};
  margin: 0;
  color: ${colors.gray};
  line-height: ${lineHeight(24, 16)};

  &:before {
    content: '';
    background-color: ${colors.purple};
    width: ${px2rem(4)};
    height: ${px2rem(4)};
    display: block;
    position: absolute;
    left: 0;
    top: 0;

    border-radius: 50%;
    margin: ${px2em(11)} 0 0;
  }
`
