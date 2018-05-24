import React from 'react'
import Helmet from 'react-helmet'
import { ImageHero, Section, TeaserHeadlineSlim } from '../components/Bricks'
import {
  BgHeroImageSection,
  BgHeroImageSectionContent,
} from '../components/BgImageSection'
import {
  Grid,
  Column,
  Auto,
  Quarter,
  Row,
  SeventyFive,
} from '../components/Grid'
import { CaseFact } from '../components/CaseFact'

export const CaseStudyTemplate = ({
  title,
  description,
  pageLabel,
  transition,
}) => {
  return (
    <div style={transition && transition.style}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <BgHeroImageSection src={require('../img/metro.jpg')}>
        <Grid fullHeight size="full">
          <Column>
            <Auto>
              <ImageHero>
                A Customer Self-Service
                <br />
                for 27 countries.
              </ImageHero>
            </Auto>
          </Column>
        </Grid>
      </BgHeroImageSection>
      <Section>
        <Grid size="full">
          <Row>
            <SeventyFive>
              <TeaserHeadlineSlim>
                Zusammen mit der &nbsp;
                <a href="https://www.metroag.de/" target="_blank">
                  METRO AG
                </a>
                &nbsp; haben wir eine Sortimentierungsplattform entwickelt, die
                für den Einkauf durchgängige, effektive und erweiterbare
                Arbeitsabläufe ermöglicht.
              </TeaserHeadlineSlim>
            </SeventyFive>
            <Quarter>
              <CaseFact title="Kunde" description="METRO AG" />
              <CaseFact title="Industrie" description="Food" />
              <CaseFact
                title="Plattform"
                description="iOS, Android, Responsive Web"
              />
            </Quarter>
          </Row>
        </Grid>
      </Section>
    </div>
  )
}

export default ({ data, transition }) => {
  const { markdownRemark: post } = data
  return (
    <CaseStudyTemplate
      transition={transition}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      pageLabel={post.frontmatter.pageLabel}
    />
  )
}

export const CaseStudyQuery = graphql`
  query CaseStudy($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
    }
  }
`
