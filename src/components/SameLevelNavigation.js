import React from 'react'
import styled from 'styled-components'
import { UnpaddedGrid, Row, SpacedRow, Fifty } from './Grid'
import { px2rem, colors } from '../constants'
import { ColoredLink } from './Bricks'

export const FlatLink = styled.div`
  width: 100%;
  line-height: ${px2rem(100)};
`

export const PreviousLink = styled(FlatLink)`
  text-align: left;
`

export const NextLink = styled(FlatLink)`
  text-align: right;
`

export const LinkBox = styled.div`
  display: inline-block;
  width: ${px2rem(92)};
  height: ${px2rem(52)};
  vertical-align: middle;
  line-height: ${px2rem(50)};
  color: ${colors.white};
`

export const PrevLinkBox = styled(LinkBox)`
  margin-right: ${px2rem(12)};
  padding-left: ${px2rem(16)};
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  text-align: left;
`

export const NextLinkBox = styled(LinkBox)`
  margin-left: ${px2rem(12)};
  padding-right: ${px2rem(16)};
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  text-align: right;
`

export const Image = styled.img`
  display: inline-block;
  width: ${px2rem(18)};
`

export const SameLevelNavigtion = ({
  prevUrl,
  prevCaption,
  prevImage,
  nextUrl,
  nextCaption,
  nextImage,
}) => (
  <UnpaddedGrid size="full">
    <Row>
      <Fifty>
        <PreviousLink>
          <ColoredLink color={colors.text} href={prevUrl}>
            <PrevLinkBox image={prevImage}>
              <Image
                src={require('../img/icons/arrow_left.svg')}
                alt="Arrow Icon"
              />
            </PrevLinkBox>
            {prevCaption}
          </ColoredLink>
        </PreviousLink>
      </Fifty>
      <Fifty>
        <NextLink>
          <ColoredLink color={colors.text} href={nextUrl}>
            {nextCaption}
            <NextLinkBox image={nextImage}>
              <Image
                src={require('../img/icons/arrow_right.svg')}
                alt="Arrow Icon"
              />
            </NextLinkBox>
          </ColoredLink>
        </NextLink>
      </Fifty>
    </Row>
  </UnpaddedGrid>
)
