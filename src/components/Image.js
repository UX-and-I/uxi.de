import React from 'react'
import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-image'
import { ImagePlaceholder } from './Bricks'

const ImageTag = styled.img`
  display: block;
`

export const Image = ({ src, preview, ratio, transparent, ...props }) => (
  <ProgressiveImage src={src}>
    {(src, loading) =>
      loading ? (
        <ImagePlaceholder
          style={{
            backgroundImage: preview ? `url(${preview})` : undefined,
          }}
          ratio={ratio}
          transparent={transparent}
          {...props}
        />
      ) : (
        <ImageTag src={src} role="presentation" {...props} />
      )
    }
  </ProgressiveImage>
)
