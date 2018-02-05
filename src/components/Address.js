import styled from 'styled-components'
import { lineHeight, px2rem } from '../constants'

export const Address = styled.address`
  font-style: normal;
  font-size: ${px2rem(16)};
  line-height: ${lineHeight(24, 16)};

  & strong {
    font-weight: 600;
    font-size: ${px2rem(18)};
    line-height: ${lineHeight(24, 18)};
  }
`
