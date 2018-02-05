import React from 'react'
import styled from 'styled-components'
import { ListHeadline, Pdiv, TeaserHeadline } from './Bricks'
import { Image } from './Image'
import { px2rem } from '../constants'

const Wrapper = styled.div`
  margin: ${px2rem(16)} 0;
`

const Illu = styled(Image)`
  margin-bottom: ${px2rem(16)};
  max-width: ${px2rem(100)};
`

export const Subject = ({ children, title, largeTitle, src }) => {
  const TitleTag = largeTitle ? TeaserHeadline : ListHeadline

  return (
    <Wrapper>
      {!!src && <Illu ratio={1} src={src} />}
      <TitleTag>{title}</TitleTag>
      <Pdiv>{children}</Pdiv>
    </Wrapper>
  )
}
