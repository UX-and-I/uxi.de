import React from 'react'
import Helmet from 'react-helmet'
import {
  SectionCover,
  Section,
  Hero,
  TeaserHeadline,
  TeaserSubline,
  TextUtil,
  Spacing,
  HeroSub,
  P,
  DryLink,
  HrThin,
} from '../components/Bricks'
import { Fifty, Grid, Row, Third } from '../components/Grid'
import {
  BgImageSection,
  BgImageSectionContent,
} from '../components/BgImageSection'
import { Subject } from '../components/Subject'
import { Image } from '../components/Image'
import { DotList, DotListItem } from '../components/DotList'

export const ServicesPageTemplate = ({
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
      <SectionCover noPadBottom>
        <Hero>
          Wir machen aus innovativen Ideen smarte und hochwertige digitale
          Produkte.
        </Hero>
      </SectionCover>
      <Section>
        <Grid size="full">
          <Row center>
            <Fifty>
              <Image
                preview={require('../img/illustrations/leistungen_head_illustration@2x.60.png')}
                src={require('../img/illustrations/leistungen_head_illustration@2x.png')}
                transparent
                ratio={3 / 4}
              />
            </Fifty>
            <Fifty>
              <TextUtil align="left">
                <TeaserHeadline>
                  Unternehmen holen sich aus verschiedensten Gründen unsere
                  Hilfe ins Haus:
                </TeaserHeadline>
                <TeaserSubline>
                  Es gibt grobe Ideen für ein neues Produkt, aber es ist unklar,
                  wie man es risikoarm und nutzerfreundlich auf die Straße
                  bringt.<br />Oder neue Features und Produkte lassen sich nur
                  schwer in die bestehende Systemlandschaft integrieren – von
                  Usabilityproblemen ganz zu Schweigen.
                </TeaserSubline>
              </TextUtil>
            </Fifty>
          </Row>
        </Grid>
      </Section>
      <HrThin />
      <Section>
        <Grid size="full">
          <Row center>
            <Fifty>
              <TeaserHeadline>Wie wir helfen</TeaserHeadline>
              <TeaserSubline>
                Schon bei der Erarbeitung von Strategie und Produktvision
                begleiten wir unsere Auftraggeber. Nächster Schritt ist dann die
                Entwicklung aussagekräftiger Prototypen. Im Anschluss etablieren
                wir gemeinsam mit Stakeholdern und Development-Teams
                reibungslose, agile und nutzerzentrierte Designprozesse.
              </TeaserSubline>
            </Fifty>
            <Fifty>
              <Image
                ratio={822 / 1096}
                src={require('../img/wiewirhelfen@2x.jpg')}
              />
            </Fifty>
          </Row>
        </Grid>
      </Section>

      <BgImageSection src={require('../img/office-muc.jpg')}>
        <BgImageSectionContent>
          Wir sind erst dann zufrieden, wenn unsere Auftraggeber und ihre Teams
          erfolgreich <strong>Design Thinking</strong> und{' '}
          <strong>Design Driven Development</strong> etabliert haben und{' '}
          <strong>wir gemeinsam smarte Produkte entwickeln.</strong>
        </BgImageSectionContent>
      </BgImageSection>

      <Section>
        <Grid size="full">
          {/*<Row>
            <SeventyFive pushLeft pushRight>
              <ImagePlaceholder ratio={12 / 16} />
            </SeventyFive>
          </Row>*/}
          <Spacing top>
            <Row>
              <Third>
                <Subject title="1. Idee, Strategie & Vision" largeTitle>
                  <p>
                    Für die Ideen- und Strategieentwicklung nutzen wir Design
                    Thinking Workshops – und wenn es besonders schnell gehen
                    muss: Design Sprints. Der Effekt: Ideen und Hypothesen
                    werden schnell mit Hilfe von Prototypen und potentiellen
                    Nutzern überprüft.
                  </p>
                </Subject>
              </Third>
              <Third>
                <Subject title="2. Produktion und Umsetzung" largeTitle>
                  <p>
                    Mit Tools wie Journey- oder User-Story-Mapping planen unsere
                    UX-Konzepter kollaborativ die nächsten Schritte und
                    visualisieren mit Scribbles und Wireframes die entstandenen
                    Ideen. Anschließend entwerfen unsere Interface-Designer
                    stimmige Designkonzepte, Styleguides und High-Fidelity
                    Prototypen. Sind alle zufrieden, werden die Designs von
                    unseren Frontend-Entwicklern in einzelnen, getesteten
                    Bausteinen bereit gestellt – immer in Abstimmung mit den
                    Entwicklungsteams.
                  </p>
                </Subject>
              </Third>
              <Third>
                <Subject title="3. Iteration & Optimierung" largeTitle>
                  <p>
                    Im Laufe der Entwicklung eines Produkts ergeben sich meist
                    Änderungen und manchmal sogar komplette Richtungswechsel.
                    Ständige Überprüfung und wiederkehrende Reflektion sind
                    daher essentiell. Annahmen werden deshalb regelmäßig auf
                    Erfolg und Innovationspotential überprüft und die Anwendung
                    wird stets an die neuesten Erkenntnisse angepasst.
                    <br />
                    <br />
                    <strong>Deshalb ❤️ wir agiles Arbeiten.</strong>
                  </p>
                </Subject>
              </Third>
            </Row>
          </Spacing>
        </Grid>
      </Section>

      <Section gray>
        <Grid size="full">
          <TeaserHeadline>
            Unsere Leistungen auf einen Blick:<br />
          </TeaserHeadline>
          <Row>
            <Third>
              <Subject title="Idee, Strategie & Vision">
                <DotList>
                  <DotListItem>
                    Moderation von Ideenfindungs- und Design Thinking-Workshops
                  </DotListItem>
                  <DotListItem>
                    Planung und Durchführung Design Sprints
                  </DotListItem>
                  <DotListItem>
                    Entwicklung von Produktstrategie und -vision
                  </DotListItem>
                  <DotListItem>
                    Aufbau erster Prototypen und Validierung
                  </DotListItem>
                  <DotListItem>
                    Qualitativer und quantitativer User Research
                  </DotListItem>
                </DotList>
              </Subject>
            </Third>
            <Third>
              <Subject title="Produktion und Umsetzung">
                <DotList>
                  <DotListItem>
                    Ergänzung bestehender Development-Teams durch eingespielte
                    Expertenmannschaft – auf Wunsch auch vor Ort
                  </DotListItem>
                  <DotListItem>
                    Entwicklung von Nutzungs-, Interface- und Designkonzepten
                  </DotListItem>
                  <DotListItem>
                    Aufbau von Pattern Libraries und Design-Systemen
                  </DotListItem>
                  <DotListItem>Professionelle Kreativdirektion</DotListItem>
                  <DotListItem>
                    Visuelle und interaktive Qualitätssicherung
                  </DotListItem>
                </DotList>
              </Subject>
            </Third>
            <Third>
              <Subject title="Iteration & Optimierung">
                <DotList>
                  <DotListItem>Experten-Audits und Nutzertests</DotListItem>
                  <DotListItem>Problemframing und Neusausrichtung</DotListItem>
                  <DotListItem>
                    Unterstützung bei der Integration von Design Thinking in
                    bestehende Strukturen
                  </DotListItem>
                  <DotListItem>
                    Temporäre Vermittlung von Product Ownern
                  </DotListItem>
                </DotList>
              </Subject>
            </Third>
          </Row>
        </Grid>
      </Section>

      <SectionCover>
        <Hero>
          <DryLink href="tel:00492117817850">Einfach anrufen.</DryLink>
        </Hero>
        <HeroSub>+49 (0) 211 781 785-0</HeroSub>
        <P>
          Wir helfen gerne bei der Ideenfindung und beraten bei verzwickten
          UX-Problemen.<br />
          Schreiben geht auch – wir rufen gerne zurück.
        </P>
      </SectionCover>
      <HrThin />
    </div>
  )
}

export default ({ data, transition }) => {
  const { markdownRemark } = data
  return (
    <ServicesPageTemplate
      transition={transition}
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.description}
      pageLabel={data.markdownRemark.frontmatter.pageLabel}
    />
  )
}

export const ServicesPageQuery = graphql`
  query ServicesPage($path: String!) {
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
