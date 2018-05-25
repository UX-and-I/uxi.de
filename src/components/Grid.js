import styled from 'styled-components'
import PropTypes from 'prop-types'
import { px2rem, media, colors } from '../constants'

const widths = {
  wide: 1440,
  full: 1200,
  normal: 787,
}

export const gutter = 39

export const Grid = styled.div`
  max-width: ${props => px2rem(widths[props.size])};
  height: ${props => (props.fullHeight ? '100%' : undefined)};
  padding: ${props => (props.size === 'wide' ? undefined : `0 ${px2rem(30)}`)};
  background-color: ${props => (props.gray ? colors.nearlyWhite : undefined)};

  width: 100%;
  margin: 0 auto;

  ${media.minTablet} {
    padding: ${props =>
      props.size === 'wide' ? undefined : `0 ${px2rem(32)}`};
  }
`

Grid.propsTypes = {
  size: PropTypes.oneOf(Object.keys(widths)).isRequired,
}
Grid.defaultProps = {
  size: 'normal',
}

export const PaddedGrid = styled(Grid)`
  padding-top: ${px2rem(56)};
  padding-bottom: ${px2rem(56)};

  ${media.minTablet} {
    padding-top: ${px2rem(95)};
    padding-bottom: ${px2rem(95)};
  }
`

export const UnpaddedGrid = styled(Grid)`
  padding: 0;
`

export const Row = styled.div`
  box-sizing: border-box;

  margin: 0 0 0 ${props => (props.noGutter ? 0 : px2rem(-1 * gutter / 2))};

  > div {
    padding: 0 0 0 ${props => (props.noGutter ? 0 : px2rem(gutter / 2))};
  }

  ${media.minTablet} {
    display: flex;
    flex-wrap: wrap;

    justify-content: ${props => (props.middle ? 'center' : undefined)};
    align-items: ${props => (props.center ? 'center' : undefined)};
    margin: 0 0 0 ${props => (props.noGutter ? 0 : px2rem(-1 * gutter))};

    > div {
      padding: 0 0 0 ${props => (props.noGutter ? 0 : px2rem(gutter))};
    }
  }
`
// @TODO: witch naming of center and middle for Row props

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

export const Cell = styled.div`
  margin-left: ${props => (props.pushRight ? 'auto' : undefined)};
  margin-right: ${props => (props.pushLeft ? 'auto' : undefined)};
`

export const SeventyFive = styled(Cell)`
  ${media.minTablet} {
    flex: 0 0 75%;
  }
`

export const Fifty = styled(Cell)`
  ${media.minTablet} {
    flex: 0 0 50%;
  }
`

export const Auto = styled(Cell)`
  ${media.minTablet} {
    flex: 0 0 auto;
  }
`

export const Stretchy = styled(Cell)`
  ${media.minTablet} {
    flex: 1 1 auto;
  }
`

export const Third = styled(Cell)`
  ${media.minTablet} {
    flex: 0 0 33.333333%;
  }
`

export const TwoThirds = styled(Cell)`
  ${media.minTablet} {
    flex: 0 0 66.666666%;
  }
`

export const Quarter = styled(Cell)`
  ${media.minTablet} {
    flex: 0 0 25%;
  }
`

export const FuemfZwoelftl = styled(Cell)`
  ${media.minTablet} {
    flex: 0 0 ${5 / 12 * 100}%;
  }
`

export const SiebmZwoelftl = styled(Cell)`
  ${media.minTablet} {
    flex: 0 0 ${7 / 12 * 100}%;
  }
`
