import React from 'react'
import styled from 'styled-components'
import { Row } from './Grid'
import { familySansSerif, px2rem, media, colors } from '../constants'

export const Wrapper = styled.div`
  display: inline-block;
  margin-bottom: ${px2rem(20)};
  min-width: 120px;
  padding-right: ${px2rem(20)};
  color: ${colors.text};

  ${media.minTablet} {
    display: block;
  }
`

export const Title = styled.div`
  font-family: ${familySansSerif};
  font-size: ${px2rem(14)};
  font-weight: 600;
`

export const Description = styled.div`
  font-family: ${familySansSerif};
  font-size: ${px2rem(16)};
  font-weight: 400;
`

export const CaseFact = ({ title, description }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
)
