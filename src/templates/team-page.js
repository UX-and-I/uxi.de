import React from 'react'
import Helmet from 'react-helmet'
import {
  SectionCover,
  Section,
  Hero,
  HeroSub,
  TeaserHeadline,
  HrThin,
} from '../components/Bricks'
import {
  HistoricalEvent,
  HistoricalEventTitle,
} from '../components/HistoricalEvent'

import { ImageGrid } from '../components/ImageGrid'
import {
  FuemfZwoelftl,
  Grid,
  Row,
  SiebmZwoelftl,
  Third,
} from '../components/Grid'
import { Subject } from '../components/Subject'
import { Image } from '../components/Image'

export const TeamPageTemplate = ({
  title,
  description,
  history,
  pageLabel,
  transition,
}) => {
  return (
    <div style={transition && transition.style}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <SectionCover>
        <Hero>
          Anders arbeiten. Richtig machen. Und wer nicht fragt, bleibt dumm.
        </Hero>
        <HeroSub>
          Wir bei UX&I sind alle technikaffine Profis. Soweit der Klappentext.
           Vor allem sind wir aber menschlich, streiten uns, vertragen uns
          wieder und nehmen uns selbst nicht allzu ernst. Dafür aber Bier. Und
          zwar sehr ernst.
        </HeroSub>
      </SectionCover>
      <ImageGrid>
        <Image
          transparent
          ratio={270 / 480}
          src={require('../img/ueber-uxi-1.jpg')}
        />
        <Image
          transparent
          ratio={270 / 480}
          src={require('../img/ueber-uxi-2.jpg')}
        />
        <Image
          transparent
          ratio={270 / 480}
          src={require('../img/ueber-uxi-3.jpg')}
        />
        <Image
          transparent
          ratio={270 / 480}
          src={require('../img/ueber-uxi-4.jpg')}
        />
        <Image
          transparent
          ratio={270 / 480}
          src={require('../img/ueber-uxi-5.jpg')}
        />
        <Image
          transparent
          ratio={270 / 480}
          src={require('../img/ueber-uxi-6.jpg')}
        />
      </ImageGrid>
      <Section gray>
        <Grid size="full">
          <Row>
            <Third>
              <Subject
                title="Nutzer verstehen ist das A und das O"
                src={require('../img/illustrations/uxi_illustration_nutzerverstehen@2x.png')}
              >
                <p>
                  Wir können nur dann richtig gute Lösungen gestalten, wenn wir
                  experimentieren, recherchieren und uns in den Nutzer und
                  seinen Kontext hineinversetzen.
                </p>
              </Subject>
            </Third>
            <Third>
              <Subject
                title="Kollaboration ist König (oder Königin)"
                src={require('../img/illustrations/uxi_illustration_kollaboration@2x.jpg')}
              >
                <p>
                  Hinter uns steht ein kluges und herzliches Team, das
                  Hilfsbereitschaft und gemeinsames Lernen groß schreibt. Titel
                  und Hierarchien sind uns dagegen nicht wichtig: Wer mehr weiß,
                  gibt sein Wissen weiter.
                </p>
              </Subject>
            </Third>
            <Third>
              <Subject
                title="Einfach machen"
                src={require('../img/illustrations/uxi_illustration_einfachmachen@2x.png')}
              >
                <p>
                  Jeder im Team hat das Mandat an Prozessen zu rütteln und mit
                  Methoden zu experimentieren. Wie soll man sie denn sonst
                  lernen? Außerdem: Fehler machen macht schlau. Und wenn man aus
                  seinen Fehlern lernt, profitieren alle davon. Also trau dich!
                </p>
              </Subject>
            </Third>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid size="full">
          <Row>
            <FuemfZwoelftl>
              <TeaserHeadline>
                Die kurze Geschichte von fast allem
              </TeaserHeadline>
            </FuemfZwoelftl>
            <SiebmZwoelftl>
              {history.map(({ date, title, text }, index) => (
                <HistoricalEvent key={index} date={date} title={title}>
                  {text}
                </HistoricalEvent>
              ))}
            </SiebmZwoelftl>
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
    <TeamPageTemplate
      transition={transition}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      history={post.frontmatter.history}
      pageLabel={post.frontmatter.pageLabel}
    />
  )
}

export const TeamPageQuery = graphql`
  query TeamPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        history {
          date
          title
          text
        }
      }
    }
  }
`
