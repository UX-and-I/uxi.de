import React from 'react'

import { Hero, SectionCover, Introduction } from '../components/Bricks'
const NotFoundPage = () => (
  <SectionCover>
    <Hero>
      404 – Not found.<br />
      <br />
    </Hero>
    <Introduction>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Introduction>
  </SectionCover>
)

export default NotFoundPage
