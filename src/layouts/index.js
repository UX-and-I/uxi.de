import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Confetti from '../components/Confetti'
import '../styles/index.scss'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { ColorBand } from '../components/ColorBand'

const AppRoot = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

const TemplateWrapper = props => (
  <AppRoot>
    <Header
      free={
        props.location.pathname === '/' ||
        props.location.pathname === '/relaunch/'
      }
    />
    <Main>{props.children()}</Main>
    <Confetti indent={props.location.key} />
    <Footer />
    <ColorBand />
  </AppRoot>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
