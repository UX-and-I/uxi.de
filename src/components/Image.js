import React from 'react'
import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-image'
import { ImagePlaceholder } from './Bricks'

const ImageTag = styled.img`
  display: block;
`

export const Image = ({ src, ratio, transparent, ...props }) => (
  <ProgressiveImage src={src}>
    {(src, loading) =>
      loading ? (
        <ImagePlaceholder ratio={ratio} transparent={transparent} {...props} />
      ) : (
        <ImageTag
          style={{ opacity: loading ? 0.5 : 1 }}
          src={src}
          role="presentation"
          {...props}
        />
      )
    }
  </ProgressiveImage>
)
