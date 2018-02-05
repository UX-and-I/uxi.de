import React from 'react'
import styled from 'styled-components'
import { media, px2rem } from '../constants'

export const CheckList = styled.ul`
  margin: 0;
`

export const CheckListItem = styled.li`
  position: relative;
  padding: ${px2rem(5)} ${px2rem(32)} 0;

  font-size: ${px2rem(20)};
  list-style: none;

  ${media.minTablet} {
    font-size: ${px2rem(16)};
  }

  &:before {
    content: '';
    position: absolute;
    top: ${px2rem(12)};
    left: 0;

    width: ${px2rem(16)};
    height: ${px2rem(16)};

    background: no-repeat transparent 50% 50%
      url(${require('../img/icons/check.svg')});

    ${media.minTablet} {
      top: ${px2rem(10)};
    }
  }
`
