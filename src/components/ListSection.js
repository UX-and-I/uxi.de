import React from 'react'
import styled from 'styled-components'
import { ListHeadline, Section, TextDot } from './Bricks'
import { colors, familySerif, lineHeight, px2rem } from '../constants'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`

const ListItem = TextDot.extend`
  display: inline;
  font-size: ${px2rem(22)};
  font-family: ${familySerif};
  line-height: ${lineHeight(30, 22)};
  padding: 0;
`.withComponent('li')

const ListWrapper = styled.div`
  text-align: center;
  color: ${colors.gray};
  max-width: ${px2rem(675)};
  width: 100%;
  padding: 0 ${px2rem(16)};
  margin: 0 auto;
`

const Header = ListHeadline.withComponent('div')

export const ListSection = ({ title, clients }) => (
  <Section gray>
    <ListWrapper>
      <Header>{title}</Header>
      <List>
        {clients.map(client => <ListItem key={client}>{client}</ListItem>)}
      </List>
    </ListWrapper>
  </Section>
)
