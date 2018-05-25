import React from 'react'
import styled from 'styled-components'
import { Link, TeaserSubline } from './Bricks'
import { Row, Fifty } from './Grid'
import { Image } from './Image'

export const LinkItemWithImage = ({
  src,
  width,
  ratio,
  caption,
  href,
  ...props
}) => (
  <Link href={href}>
    <Image src={src} width={width} ratio={ratio} />
    <Row>
      <Fifty>
        <TeaserSubline>{caption}</TeaserSubline>
      </Fifty>
    </Row>
  </Link>
)
