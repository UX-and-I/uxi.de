import React from 'react'
import styled, { css } from 'styled-components'
import { colors, px2rem } from '../constants'

const Band = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: ${props => (props.noAnim ? px2rem(8) : px2rem(24))};
  overflow: hidden;
`
const brickAnimation = css`
  transform: translateY(${px2rem(16)});
  transition: 500ms 100ms cubic-bezier(1, 0, 0, 1);
  transition-property: flex-basis, height, transform;

  &:hover {
    flex-basis: 50%;
    height: 200%;
    transform: translateY(0);
  }
`

const Brick = styled.div`
  flex: 1 1 12.5%;
  height: ${px2rem(8)};

  ${props => (props.noAnim ? undefined : brickAnimation)};
`
const Red = styled(Brick)`
  background-color: ${colors.red};
`
const Pink = styled(Brick)`
  background-color: ${colors.pink};
`
const DarkGreen = styled(Brick)`
  background-color: ${colors.darkgreen};
`
const Green = styled(Brick)`
  background-color: ${colors.green};
`
const Orange = styled(Brick)`
  background-color: ${colors.orange};
`
const Yellow = styled(Brick)`
  background-color: ${colors.yellow};
`
const Blue = styled(Brick)`
  background-color: ${colors.blue};
`
const Cyan = styled(Brick)`
  background-color: ${colors.cyan};
`

export const ColorBand = ({ noAnim }) => (
  <Band noAnim={noAnim}>
    <Cyan noAnim={noAnim} />
    <Blue noAnim={noAnim} />
    <Pink noAnim={noAnim} />
    <Red noAnim={noAnim} />
    <Yellow noAnim={noAnim} />
    <Orange noAnim={noAnim} />
    <Green noAnim={noAnim} />
    <DarkGreen noAnim={noAnim} />
  </Band>
)
