import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Grid, Row, Third } from './Grid'
import { ColorBand } from './ColorBand'
import { colors } from '../constants'

const fadeScaleIn = keyframes`
from {
  transform: scale(1.1);
  opacity: 0;
}

to {
  transform: scale(1);
  opacity: 1;
}
`

const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`

const ImageRow = Row.extend`
  display: flex;
  flex-wrap: wrap;
`

const ImageWrapper = Third.extend`
  flex-basis: 50%;

  background-color: currentColor;
  overflow: hidden;

  will-change: opacity;
  animation: ${fadeIn} 400ms ease-out 1 both;

  & img {
    display: block;
    width: 100%;
    max-width: none;

    will-change: opacity, transform;
    animation: ${fadeScaleIn} 400ms ease-in-out 1 both;
  }
`
const initialDelayMs = 400
const switchColors = [colors.yellow, colors.pink, colors.cyan, colors.green]

export const ImageGrid = ({ children }) => (
  <Grid size="wide">
    <ImageRow noGutter>
      {React.Children.map(children, (child, index) => (
        <ImageWrapper
          style={{
            animationDelay: `${index * 80 + 200 + initialDelayMs}ms`,
            color: switchColors[(index + 1) % switchColors.length],
          }}
        >
          {React.cloneElement(child, {
            ...child.props,
            style: {
              animationDelay: `${index * 80 + 600 + initialDelayMs}ms`,
            },
          })}
        </ImageWrapper>
      ))}
    </ImageRow>
    <ColorBand noAnim />
  </Grid>
)
