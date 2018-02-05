import React from 'react'
import styled from 'styled-components'
import { colors, media, px2rem } from '../constants'

export const OrderedList = styled.ol`
  margin: 0 0 ${px2rem(32)};
  counter-reset: ordered-bullets;
`

export const OrderedListItem = styled.li`
  position: relative;
  padding: ${px2rem(5)} ${px2rem(56)} 0;
  margin: 0 0 ${px2rem(28)};

  font-size: ${px2rem(20)};
  list-style: none;

  ${media.minTablet} {
    font-size: ${px2rem(16)};
  }

  &:before {
    counter-increment: ordered-bullets;
    content: counter(ordered-bullets);

    position: absolute;
    top: ${px2rem(12)};
    left: 0;

    font-size: ${px2rem(16)};
    text-align: center;
    line-height: 2.36;

    color: ${colors.text};

    width: ${px2rem(40)};
    height: ${px2rem(40)};

    border: 1px solid #e5e5e5;
    border-radius: 50%;

    ${media.minTablet} {
      top: ${px2rem(10)};
    }
  }
`
