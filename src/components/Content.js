import React from 'react'
import styled from 'styled-components'

import { colors } from '../constants'

const Content = ({ content, children, className, insertHTML }) => {
  const actualContent = content || children

  if (insertHTML) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: actualContent }}
      />
    )
  }

  return <div className={className}>{actualContent}</div>
}

export default styled(Content)`
  a {
    color: ${colors.text};
    box-shadow: inset 0px -6px 0 0 ${colors.cyan};
  }
`

export const HTMLContent = props => <Content {...props} insertHTML />
