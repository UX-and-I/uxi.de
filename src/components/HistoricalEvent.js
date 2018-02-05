import React from 'react'
import styled from 'styled-components'
import { ListHeadline, P, TeaserSubline } from './Bricks'
import { colors, px2rem } from '../constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${px2rem(20)} 0;
`

const Date = styled(TeaserSubline.withComponent('div'))`
  flex: 0 0 ${px2rem(144)};
  padding-right: ${px2rem(24)};
  text-align: right;
  margin: 0;
`
const Title = styled(ListHeadline)`
  margin: 0;
  padding: ${px2rem(3)} 0 ${px2rem(5)};
`
const Content = styled.div`
  color: ${colors.gray};
  max-width: 28em;
`
const Description = styled(P)`
  margin: 0;
`

export const HistoricalEvent = ({ children, date, title }) => (
  <Wrapper>
    <Date>{date}</Date>
    <Content>
      <Title>{title}</Title>
      <Description>{children}</Description>
    </Content>
  </Wrapper>
)
