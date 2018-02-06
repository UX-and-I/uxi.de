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
              <HistoricalEvent date="11/2017" title="Jetzt auch UX in München">
                Mona ist mit an Bord und UX&I München ist jetzt fünfköpfig.
              </HistoricalEvent>
              <HistoricalEvent
                date="10/2017"
                title="Betriebsausflug nach Mallorca"
              >
                Ausgewogenes Verhältnis aus Arbeit und Leisure? Check! Oder
                besser gesagt Arbeit, Segeln und Feiern.
              </HistoricalEvent>
              <HistoricalEvent date="09/2017" title="Dritter Standort Berlin">
                Statt „geh doch nach Berlin“ holen wir uns Berlin! In der
                Factory probiert Tom (UX) gemeinsam mit der codecentric neue
                Geschäftsmodelle aus und experimentiert mit innovativen
                Arbeitsmodellen.
              </HistoricalEvent>

              <HistoricalEvent date="08/2017" title="Zweiter Standort München">
                Nach langjähriger und verdammt guter Partnerschaft konnten wir
                die lieben Münchener Kollegen der vormals form & code GmbH als
                vollwertige UX&I Kollegen gewinnen und sind auf einen Schlag
                vier Kollegen mehr. Willkommen Bernd, Ju, Pinsha und Walther –
                allesamt Frontend-Füchse.
              </HistoricalEvent>

              <HistoricalEvent
                date="02 – 05/2017"
                title="Yay! Mehr neue Kollegen!"
              >
                Thomas (UX), Jessica (UX) und Jacek (Design) ergänzen unser
                Team.
              </HistoricalEvent>

              <HistoricalEvent date="01/2017" title="Wir werden UX&I">
                Zum 01.01.2017 wurde aus der DESIGN INSTANZ GbR die UX&I GmbH.
                Neben einem neuen Namen steigt auch die codecentric AG als
                Gesellschafter mit ein. Und wir haben unseren ersten eigenen
                Frontend-Dev: Christian!
              </HistoricalEvent>

              <HistoricalEvent
                date="01/2016"
                title="Erster Betriebsausflug nach Amsterdam"
              >
                ...zu den AWWWards mit der gesamten Crew – mittlerweile sind
                auch Niels (Design), Matthias (Design), Ralph (UX Freelance) und
                Eric (UX) dabei. Ob das eine gute Idee war? 🤪
              </HistoricalEvent>

              <HistoricalEvent date="08/15" title="Das dritte Büro">
                Jetzt wird im Loft gearbeitet und im Hof geschaukelt. Von wegen
                08/15!
              </HistoricalEvent>

              <HistoricalEvent date="07/2015" title="Erste UXerin an Bord">
                Wir haben jetzt auch mal jemanden, die sich (angeblich) damit
                auskennt.
              </HistoricalEvent>

              <HistoricalEvent date="08/2014" title="Das zweite Büro">
                Gewerkelt wird in einer kleinen Bürogemeinschaft auf der
                Wasserstraße. Wir sind jetzt zu dritt: Patrick, Tobi und Alex.
                Noch sind wir „nur“ Designer …
              </HistoricalEvent>

              <HistoricalEvent date="06/2014" title="Das erste Büro">
                Die ersten zwei Monate haben wir in Tobias’ Wohnzimmer
                gearbeitet.
              </HistoricalEvent>

              <HistoricalEvent date="06/2014" title="Gründung">
                Die Firma wird am 01. Juni 2014 gegründet und heißt offiziell
                Design Instanz - Tobias Wenzel & Patrick Oselka GbR.
              </HistoricalEvent>
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
      }
    }
  }
`
