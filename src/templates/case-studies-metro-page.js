import React from 'react'
import Helmet from 'react-helmet'
import {
  ImageHero,
  Section,
  TeaserHeadlineSlim,
  TeaserSubline,
  ColoredLink,
  SmallSpacing,
  HrThin,
} from '../components/Bricks'
import {
  BgHeroImageSection,
  BgHeroImageSectionContent,
} from '../components/BgImageSection'
import {
  Grid,
  PaddedGrid,
  UnpaddedGrid,
  Column,
  Auto,
  Quarter,
  Row,
  SeventyFive,
  Fifty,
  Third,
} from '../components/Grid'
import { Image } from '../components/Image'
import { CaseFact } from '../components/CaseFact'
import { DotList, DotListItem } from '../components/DotList'
import { Quote } from '../components/Quote'
import { px2em } from '../constants'
import { LinkItemWithImage } from '../components/LinkItemWithImage'
import { SameLevelNavigtion } from '../components/SameLevelNavigation'

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
      <BgHeroImageSection src={require('../img/metro@2x.jpg')}>
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
      <SameLevelNavigtion
        prevUrl="#"
        prevCaption="Eine mobile Companion App"
        prevColor="#8DA8CE"
        nextUrl="#"
        nextCaption="Microservice APM für ein Silicon Valley Startup"
        nextColor="#162225"
      />
      <HrThin />
      <Section>
        <Grid size="full">
          <Row>
            <SeventyFive>
              <TeaserHeadlineSlim>
                Zusammen mit der &nbsp;
                <ColoredLink
                  color="#090B8D"
                  href="https://www.metroag.de/"
                  target="_blank"
                >
                  METRO AG
                </ColoredLink>
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
      <Section noPadding>
        <Grid size="full">
          <Row>
            <Auto>
              <TeaserSubline>Ziele</TeaserSubline>
            </Auto>
          </Row>
          <Row>
            <Fifty>
              <DotList>
                <DotListItem>
                  Zusammenführung unterschiedlicher Programme zu einem
                  effektiven Tool
                </DotListItem>
                <DotListItem>
                  Ermöglichung effizienter und strukturierter Arbeitsabläufe
                </DotListItem>
              </DotList>
            </Fifty>
            <Fifty>
              <DotList>
                <DotListItem>Intuitives Arbeiten für die Anwender</DotListItem>
                <DotListItem>
                  Verwendung eines modernen und ansprechenden Oberflächenlayouts
                </DotListItem>
                <DotListItem>Einfache Erweiter- und Wartbarkeit</DotListItem>
              </DotList>
            </Fifty>
          </Row>
        </Grid>
      </Section>
      <Section>
        <UnpaddedGrid size="full">
          <Image
            width={1200}
            src={require('../img/metrovisual1@2x.jpg')}
            ratio={1200 / 675}
          />
          <SmallSpacing top bottom full>
            <Image
              width={1200}
              src={require('../img/metrovisual2@2x.jpg')}
              ratio={1200 / 675}
            />
          </SmallSpacing>
          <Image
            width={1200}
            src={require('../img/metrovisual3@2x.jpg')}
            ratio={1200 / 675}
          />
        </UnpaddedGrid>
      </Section>
      <Section noPadding>
        <Grid size="full">
          <Row center middle>
            <SeventyFive>
              <Quote name="Melania Fashonista" company="METRO AG">
                “Super einfach, super schnell, super awesome! Wir hätten nie
                gedacht, dass ein Warenwirtschaftssystem so geil sein kann!”
              </Quote>
            </SeventyFive>
          </Row>
        </Grid>
      </Section>
      <Section>
        <PaddedGrid size="full" gray>
          <Row>
            <Auto>
              <TeaserSubline>Outcomes</TeaserSubline>
            </Auto>
          </Row>
          <Row>
            <Third>
              <DotList>
                <DotListItem>
                  Zusammenführung unterschiedlicher Programme zu einem
                  effektiven Tool
                </DotListItem>
                <DotListItem>
                  Ermöglichung effizienter und strukturierter Arbeitsabläufe
                </DotListItem>
              </DotList>
            </Third>
            <Third>
              <DotList>
                <DotListItem>Intuitives Arbeiten für die Anwender</DotListItem>
                <DotListItem>
                  Verwendung eines modernen und ansprechenden Oberflächenlayouts
                </DotListItem>
                <DotListItem>Einfache Erweiter- und Wartbarkeit</DotListItem>
              </DotList>
            </Third>
            <Third>
              <DotList>
                <DotListItem>Intuitives Arbeiten für die Anwender</DotListItem>
                <DotListItem>
                  Verwendung eines modernen und ansprechenden Oberflächenlayouts
                </DotListItem>
                <DotListItem>Einfache Erweiter- und Wartbarkeit</DotListItem>
              </DotList>
            </Third>
          </Row>
        </PaddedGrid>
      </Section>
      <HrThin />
      <Section>
        <Grid size="full">
          <Row>
            <Fifty>
              <LinkItemWithImage
                src={require('../img/axa_teaser.jpg')}
                width={580}
                ratio={580 / 326}
                caption="Eine mobile Companion App"
                href="#"
              />
            </Fifty>
            <Fifty>
              <LinkItemWithImage
                src={require('../img/instana_teaser.jpg')}
                width={580}
                ratio={580 / 326}
                caption="Microservice APM für ein Silicon Valley Start-Up"
                href="#"
              />
            </Fifty>
          </Row>
        </Grid>
      </Section>
      <HrThin />
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
