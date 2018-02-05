import styled from 'styled-components'
import { colors, lineHeight, px2rem } from '../constants'

export const BgImageSectionContent = styled.div`
  position: relative;
  z-index: 1;

  max-width: ${px2rem(710)};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${px2rem(16)};

  color: ${colors.white};
  font-size: ${px2rem(22)};
  line-height: ${lineHeight(32, 22)};
  text-align: center;
`

export const BgImageSection = styled.section`
  position: relative;

  padding: ${px2rem(80)} 0;
  background-color: ${colors.gray};

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${props => props.src}) 50% 50%;
    background-size: cover;
    opacity: 0.15;
  }
`
