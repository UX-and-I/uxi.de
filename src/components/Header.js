import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { px2rem, lineHeight, colors, z } from '../constants'
import { Logo } from './Logo'

const HeaderWrapper = styled.header`
  display: block;
  height: ${px2rem(90)};
  box-shadow: 0 ${props => (props.free ? 0 : '1px')} 0 ${colors.hr};
  will-change: box-shadow;
  transition: 200ms box-shadow, 200ms background-color;
  z-index: ${z.header};
`

const HeaderNav = styled.nav`
  position: relative;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: ${px2rem(1200 + 2 * 16)};
  height: 100%;
  padding: 0 ${px2rem(16)};
  margin: 0 auto;
`

const HeaderNavLink = styled(Link)`
  position: relative;

  display: inline-flex;
  align-items: center;
  height: 100%;
  margin: 0 ${px2rem(8)};

  color: ${colors.text};

  font-size: ${px2rem(16)};
  line-height: ${lineHeight(24, 16)};

  user-select: none;
  -webkit-user-drag: none;

  &:hover,
  &[aria-current='true'] {
    font-weight: 600;
    letter-spacing: ${px2rem(-0.22)};
  }
`

const ActiveUnderline = styled.span`
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: ${px2rem(-4)};
    right: 0;
    width: 0%;
    height: 2px;
    border-radius: ${px2rem(2)};
    background: ${colors.gray2};
    transition: 250ms width 0s cubic-bezier(1, 0, 0, 1);

    ${HeaderNavLink}:focus &,
    [aria-current='true'] & {
      left: 0;
      width: 100%;
    }
  }
`

const HeaderBrandLink = styled(HeaderNavLink)`
  margin-right: auto;
  user-select: none;

  img {
    transition: 150ms transform;

    user-select: none;
    -webkit-user-drag: none;
  }

  &:active img {
    transform: scale(0.95);
  }
`

export default class Header extends React.Component {
  render() {
    const { free } = this.props

    return (
      <HeaderWrapper free={free}>
        <HeaderNav>
          <HeaderBrandLink to="/">
            <Logo />
          </HeaderBrandLink>
          <HeaderNavLink to="/ueber-uns" activeClassName="a">
            <ActiveUnderline>Über uns</ActiveUnderline>
          </HeaderNavLink>
          <HeaderNavLink to="/leistungen" activeClassName="a">
            <ActiveUnderline>Leistungen</ActiveUnderline>
          </HeaderNavLink>
          <HeaderNavLink to="/jobs" activeClassName="a">
            <ActiveUnderline>Jobs</ActiveUnderline>
          </HeaderNavLink>
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}
