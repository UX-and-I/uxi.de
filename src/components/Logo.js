import React from 'react'
import styled from 'styled-components'
import logo from '../img/icons/uxi-logo.svg'
import { media, px2rem } from '../constants'

const Img = styled.img`
  width: ${px2rem(95)};
  ${media.minTablet} {
    width: auto;
  }
`

export const Logo = () => <Img src={logo} alt="UX&I Logo" />
