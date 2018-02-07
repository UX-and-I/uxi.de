import React from 'react'
import styled from 'styled-components'
import { colors, px2rem } from '../constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Link = styled.a`
  position: relative;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  width: ${px2rem(40)};
  height: ${px2rem(40)};
  margin-left: ${px2rem(16)};

  border-radius: ${px2rem(3)};
  transition: 200ms box-shadow;

  &:hover circle {
    stroke-dashoffset: 0;
  }
`

const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  width: ${px2rem(40)};
  height: ${px2rem(40)};
`
const Circle = styled.circle`
  fill: none;
  stroke: ${colors.gray2};
  stroke-width: ${px2rem(2)};
  stroke-dashoffset: 124px;
  stroke-dasharray: 124px;
  transition: 350ms stroke-dashoffset cubic-bezier(1, 0, 0, 1);
`

const Image = styled.img`
  display: block;
`

const HoverCircle = () => (
  <Svg>
    <Circle cx="20" cy="20" r="19" transform="rotate(90, 20, 20)" />
  </Svg>
)

export const SocialIcons = () => (
  <Wrapper>
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/ux.and.i/"
      title="UX&I auf Instagram"
    >
      <Image src={require('../img/icons/instagram.svg')} alt="Instagram Icon" />
      <HoverCircle />
    </Link>
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/ux_and_i"
      title="UX&I auf Twitter"
    >
      <Image src={require('../img/icons/twitter.svg')} alt="Twitter Icon" />
      <HoverCircle />
    </Link>
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.xing.com/companies/ux%26igmbh"
      title="UX&I auf Xing"
    >
      <Image src={require('../img/icons/xing.svg')} alt="Xing Icon" />
      <HoverCircle />
    </Link>
  </Wrapper>
)
