import React from 'react'
import styled from 'styled-components'
import { TeaserHeadlineCentered } from './Bricks'
import { familySansSerif, px2rem, colors } from '../constants'

export const Wrapper = styled.div`
  text-align: center;
`

export const Name = styled.div`
  margin-bottom: ${px2rem(10)};
  font-family: ${familySansSerif};
  font-size: ${px2rem(16)};
  font-weight: 400;
  color: ${colors.text};
`

export const Company = styled.div`
  font-family: ${familySansSerif};
  font-size: ${px2rem(14)};
  font-weight: 600;
  color: ${colors.text};
`

export const Quote = ({ children, name, company }) => (
  <Wrapper>
    <TeaserHeadlineCentered color="#090B8D">{children}</TeaserHeadlineCentered>
    <Name>{name}</Name>
    <Company>{company}</Company>
  </Wrapper>
)
