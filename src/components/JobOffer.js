import React from 'react'
import styled from 'styled-components'
import { Collapse } from 'react-collapse'

import { px2rem, colors, lineHeight } from '../constants'
import { TeaserHeadline } from './Bricks'

const Wrapper = styled.div`
  padding: ${px2rem(24)} 0;

  & + & {
    box-shadow: inset 0 1px 0 0 ${colors.hr};
  }
`

const Title = styled(TeaserHeadline)`
  margin: 0;
`

const Offices = styled.div`
  color: ${colors.gray};
  font-size: ${px2rem(16)};
`

const allOffices = ['Düsseldorf', 'München', 'Berlin']

const RevealCross = styled.div`
  position: absolute;
  right: 0;
  top: 50%;

  width: ${px2rem(18)};
  height: ${px2rem(18)};

  transform: translateY(-50%) rotate(${props => (props.revealed ? 45 : 0)}deg);
  transition: 250ms transform;
  transition-delay: ${props => (props.revealed ? 0 : 250)}ms;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;

    background-color: ${colors.purple};
    transition: 250ms transform;
    transition-delay: ${props => (props.revealed ? 250 : 0)}ms;
  }

  &:before {
    top: 0;
    left: 8px;
    width: 2px;
    height: 18px;
    transform: rotate(${props => (props.revealed ? 45 : 0)}deg);
  }

  &:after {
    left: 0;
    top: 8px;
    width: 18px;
    height: 2px;
    transform: rotate(${props => (props.revealed ? -45 : 0)}deg);
  }
`

const RevealButton = styled.button`
  position: relative;
  display: block;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border: 0 none;
  text-align: left;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  appearance: none;

  &:focus {
    outline: none;

    & h3 {
      color: ${colors.purple};
    }
  }
`

const Content = styled.div`
  padding: ${px2rem(36)} 0;
`

export const JobOfferLabel = styled.div`
  margin-top: ${px2rem(32)};
  font-weight: 600;
  font-size: ${px2rem(18)};
  line-height: ${lineHeight(22, 18)};
`

export const JobOfferList = ({ children }) => (
  <div role="tablist" aria-live="polite">
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        ...child.props,
        key: `offer-${index}`,
        id: `offer-${index}`,
      })
    )}
  </div>
)

export default class JobOffer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      revealed: !!props.defaultRevealed,
    }
  }

  toggleRevealed = e => {
    e.preventDefault()

    this.setState(state => ({ revealed: !state.revealed }))
  }

  render() {
    const { id, title, offices = allOffices, children } = this.props
    const { revealed } = this.state

    return (
      <Wrapper>
        <RevealButton
          onClick={this.toggleRevealed}
          role="tab"
          tabIndex={'0'}
          id={`tab-${id}`}
          aria-controls={`panel-${id}`}
        >
          <Title>{title}</Title>
          <Offices>{offices.join(', ')}</Offices>
          <RevealCross revealed={revealed} />
        </RevealButton>
        <Collapse
          isOpened={revealed}
          aria-expanded={revealed}
          id={`panel-${id}`}
          aria-labelledby={`tab-${id}`}
          role="tabpanel"
        >
          <Content>{children}</Content>
        </Collapse>
      </Wrapper>
    )
  }
}
