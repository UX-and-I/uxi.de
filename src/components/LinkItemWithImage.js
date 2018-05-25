import React from 'react'
import styled from 'styled-components'
import { Link, TeaserSubline } from './Bricks'
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
    <TeaserSubline>{caption}</TeaserSubline>
  </Link>
)
