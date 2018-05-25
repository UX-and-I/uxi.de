import React from 'react'
import styled, { css } from 'styled-components'
import RouterLinkOriginal from 'gatsby-link'
import { familySerif, familySansSerif, px2rem, colors } from '../constants.js'
import { lineHeight, media, px2em } from '../constants'

export const Hero = styled.h1`
  margin-bottom: ${px2rem(20)};

  font-family: ${familySerif};
  font-size: ${px2rem(46)};
  font-weight: normal;
  line-height: 1.15;

  color: ${colors.hero};
  max-width: 15em;

  ${media.minTablet} {
    font-size: ${px2rem(52)};
  }
`

export const ImageHero = styled(Hero)`
  margin-bottom: 0;
  max-width: 15em;
  font-family: ${familySansSerif};
  color: ${colors.imageHero};
`

export const HeroSub = styled.h2`
  font-size: ${px2rem(22)};
  font-weight: normal;
  line-height: ${lineHeight(30, 22)};

  color: ${colors.hero};
  max-width: 38em;
`

export const Introduction = styled.p`
  font-size: ${px2rem(20)};
  margin-top: 0;
  font-family: ${familySerif};
  line-height: 1.35;
`

export const Title = styled.h1`
  font-size: ${px2rem(28)};
  font-weight: normal;
  font-family: ${familySerif};
  line-height: 1.3;
  margin: ${px2rem(20)} 0;

  ${media.minTablet} {
    margin-top: 0;
  }
`

export const SubTitle = styled.h2`
  font-weight: bold;
  font-size: ${px2rem(20)};
  font-family: ${familySerif};
  line-height: 1.4;
`

export const TeaserHeadline = styled.h3`
  margin: ${px2rem(20)} 0;
  font-family: ${familySerif};
  font-size: ${px2rem(30)};
  line-height: ${lineHeight(34, 30)};
  color: ${colors.text};
  font-weight: 600;

  @media (min-width: ${px2rem(786)}) {
    max-width: 80%;
  }
`

export const TeaserHeadlineSlim = styled(TeaserHeadline)`
  margin: 0 0 ${px2rem(30)} 0;
  font-weight: 400;

  @media (min-width: ${px2rem(786)}) {
    max-width: 90%;
  }
`

export const TeaserHeadlineCentered = styled(TeaserHeadline)`
  margin: ${px2rem(20)} auto;
  color: ${props => props.color};
`

export const TeaserSubline = styled.h4`
  margin: ${px2rem(20)} 0;

  line-height: ${lineHeight(30, 22)};
  color: ${colors.gray};

  font-weight: normal;
  font-size: ${px2rem(20)};

  ${media.minTablet} {
    color: ${colors.text};
    font-size: ${px2rem(22)};
  }
`

export const ListHeadline = styled.h3`
  font-size: ${px2rem(22)};
  color: ${colors.text};
  font-weight: 600;

  ${media.minTablet} {
    font-size: ${px2rem(18)};
  }
`

export const Section = styled.section`
  background: ${props => (props.gray ? colors.nearlyWhite : undefined)};
  padding: ${props => (props.noPadding ? 0 : px2rem(56))} 0;

  ${media.minTablet} {
    padding: ${props => (props.noPadding ? 0 : px2rem(95))} 0;
  }
`

export const SectionFooter = styled.div`
  margin: ${px2rem(18)};
`

export const SectionCover = styled(Section)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: ${px2rem(56)} ${px2rem(28)} ${px2rem(56)};
  padding-bottom: ${props => (props.noPadBottom ? '0' : undefined)};

  ${media.minTablet} {
    padding: ${px2rem(80)} ${px2rem(28)} ${px2rem(80)};
  }
`

export const Navbar = styled.nav`
  background-color: white;
  min-height: ${px2rem(48)};
  position: relative;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 0 2px;
`

export const CardCountNumber = styled.div`
  margin-right: ${px2rem(25)};
  width: ${px2rem(60)};
  flex: 0 0 auto;

  font-size: ${px2rem(48)};
  font-family: ${familySerif};
  line-height: 1;
  text-align: center;

  border-right: 1px solid ${colors.hr};
`

const OrderedCardRenderer = ({ count, children, ...props }) => (
  <Card {...props}>
    <CardCountNumber>{count}</CardCountNumber>
    <div>{children}</div>
  </Card>
)

export const OrderedCard = styled(OrderedCardRenderer)`
  display: flex;
  flex: 0 0 auto;

  justify-content: flex-start;
  align-items: flex-start;
`

export const Card = styled.div`
  margin: 40px 0;

  &:last-child {
    margin-bottom: 0;
  }
`

const lightButton = css`
  border-color: ${colors.lightPurple};
  background-color: ${colors.white};
  color: ${colors.purple};

  &:hover {
    border-color: ${colors.purple};
  }
`

const darkButton = css`
  border-color: ${colors.purple};
  background-color: ${colors.purple};
  color: ${colors.white};

  &:hover {
    color: ${colors.purple};
    background: ${colors.white};
  }
`

export const Button = styled.button`
  display: inline-block;
  border: 2px solid;
  padding: ${px2rem(8)} ${px2rem(28)};
  border-radius: ${px2rem(24)};

  font-weight: 600;
  font-family: ${familySansSerif};
  font-size: ${px2rem(16)};
  line-height: ${lineHeight(20, 16)};

  user-select: none;
  -webkit-user-drag: none;

  ${props => (props.dark ? darkButton : lightButton)} ${media.maxTablet} {
    font-size: ${px2rem(24)};
  }
`

export const ButtonLink = Button.withComponent('a')
export const ButtonRouterLink = Button.withComponent(RouterLinkOriginal)

export const Link = styled.a`
  position: relative;

  color: ${props => (props.white ? colors.white : 'inherit')};

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: ${px2rem(-2)};
    left: 0;
    width: 100%;
    height: ${px2rem(2)};
    background-color: ${colors.gray2};
    border-radius: ${px2rem(1)};
  }

  &:hover:after {
    background-color: ${colors.gray};
  }
`

export const DryLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;

  &:after {
    content: none;
  }
`

export const ColoredLink = styled(DryLink)`
  color: ${props => props.color};
`

export const RouterLink = Link.withComponent(RouterLinkOriginal)

export const HrThin = styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  background-color: ${colors.hr};
`

export const Hr = HrThin.extend`
  margin: ${px2rem(16)} ${px2rem(32)};
`

export const P = styled.p`
  font-size: ${px2rem(20)};

  ${media.minTablet} {
    font-size: ${px2rem(16)};
  }

  line-height: ${lineHeight(24, 16)};
  color: ${colors.gray};
`

export const Pdiv = P.withComponent('div')

export const Right = styled.div`
  margin-left: auto;
`

export const ImagePlaceholder = styled.div`
  position: relative;
  display: block;
  background-size: cover;
  background-color: ${props =>
    props.transparent ? 'transparent' : colors.gray3};
  padding-top: ${props => props.ratio * 100}%;
  height: 0;
`
export const TextDot = styled.span`
  &:not(:last-child):after {
    content: '';
    display: inline-block;
    width: ${px2em(3)};
    height: ${px2em(3)};
    margin: 0 ${px2em(10)};

    border-radius: 50%;
    background: ${colors.purple};
    vertical-align: middle;
    transform: translateY(${px2em(-2)});
  }
`
export const TextUtil = styled.div`
  text-align: ${({ align }) => (align ? align : undefined)};
`

export const Spacing = styled.div`
  margin-top: ${props => (props.top ? px2rem(54) : '0')};
  margin-bottom: ${props => (props.bottom ? px2rem(54) : '0')};
  width: ${props => (props.full ? '100%' : null)};
`

export const Measure = styled.div`
  max-width: 42em;
`
