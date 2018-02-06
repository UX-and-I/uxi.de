import React from 'react'
import Helmet from 'react-helmet'
import {
  SectionCover,
  SectionFooter,
  Section,
  Hero,
  ButtonLink,
  HeroSub,
  Spacing,
  TeaserHeadline,
  TeaserSubline,
  P,
  ListHeadline,
  TextUtil,
  Measure,
  HrThin,
} from '../components/Bricks'

import JobOffer, { JobOfferList, JobOfferLabel } from '../components/JobOffer'
import { Image } from '../components/Image'
import {
  Fifty,
  Grid,
  Quarter,
  Row,
  SeventyFive,
  Third,
  TwoThirds,
} from '../components/Grid'
import { Subject } from '../components/Subject'
import { DotList, DotListItem } from '../components/DotList'
import { CheckList, CheckListItem } from '../components/CheckList'
import { OrderedList, OrderedListItem } from '../components/OrderedList'

export const JobsPageTemplate = ({
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
        <Hero>Gestalte mit uns digitale Lösungen für knifflige Probleme.</Hero>
        <HeroSub>
          Du bist ein Freigeist mit Talent, Expertise und Empathie? Und Du
          liebst den Blick über den Tellerrand?{' '}
          <strong>Dann suchen wir Dich! Weiterlesen.</strong>
        </HeroSub>

        <SectionFooter>
          <ButtonLink dark href="#offene-positionen">
            Offene Stellen
          </ButtonLink>
        </SectionFooter>

        <Grid size="full">
          <Row>
            <SeventyFive pushRight pushLeft>
              <Spacing top full>
                <Image
                  width={1200}
                  transparent
                  preview={require('../img/illustrations/jobs_hero_illustration@2x.60.png')}
                  src={require('../img/illustrations/jobs_hero_illustration@2x.png')}
                  ratio={0.5}
                />
              </Spacing>
            </SeventyFive>
          </Row>
        </Grid>
      </SectionCover>
      <HrThin />
      <Section>
        <Grid size="full">
          <Row center>
            <Fifty>
              <Image
                ratio={1096 / 822}
                src={require('../img/weristeigentlichwir@2x.jpg')}
              />
            </Fifty>
            <Fifty>
              <TeaserHeadline>Wer ist eigentlich „wir”?</TeaserHeadline>
              <TeaserSubline>
                Also: Wir sind ein selbstorganisiertes Team aus{' '}
                <strong>UX-Konzeptern</strong>, <strong>UI-Designern</strong>{' '}
                und <strong>Frontend-Entwicklern</strong>. Wir unterstützen
                Entwicklungsteams dabei, ihre digitalen Produkte smarter,
                nutzbarer und auch schöner zu machen.
              </TeaserSubline>
              <P>
                <strong>
                  Jeder bei uns im Team sieht sich als „Agent des Nutzers”
                </strong>: Gemeinsam streben wir nicht nur danach, angenehme und
                intuitive Nutzererfahrungen zu realisieren, sondern helfen auch
                dabei, User Research, Design- und Interface-Produktion
                professionell und reibungslos in agile Entwicklungsprozesse zu
                integrieren.
              </P>
            </Fifty>
          </Row>
        </Grid>
      </Section>

      <Section gray>
        <Grid size="full">
          <Row>
            <Third>
              <Subject
                title="4+1! 4+1?"
                src={require('../img/illustrations/uxi_illustration-4plus1@2x.png')}
              >
                <P>
                  <strong>
                    Wir nutzen 20% unserer Arbeitszeit für Fortbildung.
                  </strong>{' '}
                  Lies ein gutes Buch, fahr auf eine Konferenz oder nutze die
                  Zeit, um an eigenen Projekten zu arbeiten. Wenn es dich
                  fachlich voranbringt, bringt es uns alle voran.
                </P>
              </Subject>
            </Third>
            <Third>
              <Subject
                title="Eigenverantwortung und Vertrauen"
                src={require('../img/illustrations/uxi_illustration_eigenverantwortung@2x.png')}
              >
                <P>
                  <strong>
                    Wir vertrauen uns gegenseitig und erwarten von jedem
                    Eigenverantwortung.
                  </strong>{' '}
                  Denn: Du weißt selbst am besten, ob dein Urlaub zum
                  Projektplan passt und wo und wie du am effektivsten arbeiten
                  kannst.
                </P>
              </Subject>
            </Third>
            <Third>
              <Subject
                title="Familien- und lebensfreundlich"
                src={require('../img/illustrations/uxi_illustration-worklife@2x.png')}
              >
                <P>
                  <strong>Bei uns gibt’s keine Überstunden.</strong> Und wir
                  wissen auch, dass das Leben nicht immer nach Plan läuft.
                  Manchmal arbeitet es sich besser von Zuhause aus und manchmal
                  muss der Nachwuchs auch mal mit ins Büro. Und es funktioniert
                  trotzdem. Oder gerade deswegen.
                </P>
              </Subject>
            </Third>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid size="full">
          <Row>
            <Third>
              <TeaserHeadline>
                Außerdem vielleicht interessant für dich:
              </TeaserHeadline>
            </Third>
            <Third>
              <CheckList>
                <CheckListItem>
                  Wir haben Büros in Düsseldorf, München und Berlin
                </CheckListItem>

                <CheckListItem>
                  Auswahl zwischen Firmenwagen oder ÖPNV-Ticket
                </CheckListItem>

                <CheckListItem>Firmenhandy und Laptop nach Wahl</CheckListItem>
                <CheckListItem>Regelmäßig gemeinsames Frühstück</CheckListItem>
              </CheckList>
            </Third>
            <Third>
              <CheckList>
                <CheckListItem>Frisches Obst und Naschereien</CheckListItem>
                <CheckListItem>
                  Offene Küche und gemeinsame Kochsessions
                </CheckListItem>

                <CheckListItem>
                  Freie Getränke – auch Bier. Mit und ohne Alkohol
                </CheckListItem>

                <CheckListItem>
                  Teamausflüge nach Amsterdam, Mallorca, Berlin...
                </CheckListItem>
              </CheckList>
            </Third>
          </Row>
        </Grid>
      </Section>
      <HrThin />
      <Section>
        <Grid size="full">
          <Row>
            <Fifty>
              <Image
                ratio={1200 / 1600}
                src={require('../img/illustrations/uxi_illustration_bewerbung@2x.jpg')}
              />
            </Fifty>
            <Fifty className="cms-typo">
              <TeaserHeadline>Und so kannst du dich bewerben:</TeaserHeadline>
              <OrderedList>
                <OrderedListItem>
                  <a href="mailto:info@uxi.de">Schreib uns</a> oder ruf einfach
                  mal an. Sende uns deine Bewerbung, gerne mit Arbeitsproben und
                  Gehaltsvorstellung.
                </OrderedListItem>

                <OrderedListItem>
                  Anschließend treffen wir uns zum Kennenlernen in unserem Büro
                  oder bei schönem Wetter im Hof auf der Schaukel (leider nur in
                  Düsseldorf, dafür aber mit Anschubsen)
                </OrderedListItem>

                <OrderedListItem>
                  Wenn es Klick macht, dann arbeiten wir an einem Schnuppertag
                  zusammen, um uns noch besser kennenzulernen.
                </OrderedListItem>

                <OrderedListItem>
                  Fast geschafft – jetzt noch Verhandlungen um Geld und
                  Vertragsdetails.
                </OrderedListItem>
              </OrderedList>
              <P>
                <strong>
                  Wir freuen uns schon auf deinen ersten Tag im UX&I Land!
                </strong>
              </P>
            </Fifty>
          </Row>
        </Grid>
      </Section>
      <HrThin />
      <Section id={'offene-positionen'}>
        <Grid size="full">
          <Row>
            <Quarter>
              <JobOfferLabel>offene Positionen</JobOfferLabel>
            </Quarter>
            <TwoThirds>
              <JobOfferList>
                <JobOffer title="Senior UX-Konzepter (m/w)">
                  <Measure>
                    <P>
                      Als UX-Konzepter begleitest du Kunden und agile
                      Development-Teams unterschiedlicher Größen während des
                      gesamten Human-Centered-Design Prozesses. Du hilfst und
                      unterstützt von der Ideenentwicklung bis zur letzten
                      Iteration und wirst richtig ungemütlich, wenn Stakeholder
                      oder Entwicklungsteams den Nutzer aus den Augen verlieren.
                      Du weißt genau, welche Methode und welches Artefakt zum
                      gegebenen Zeitpunkt das richtige ist. Du bist Wing(Wo-)man
                      des Product Owners und konzentrierst dich auf die
                      erfahrbare und ästhetische Qualität des Produkts.
                    </P>
                  </Measure>
                  <Row>
                    <Fifty>
                      <ListHeadline>Deine Skills</ListHeadline>
                      <DotList>
                        <DotListItem>
                          Du hast mindestens fünf Jahre Berufserfahrung im
                          Bereich UX-Konzeption als UX-Writer,
                          Informationsarchitekt oder Product Owner
                        </DotListItem>
                        <DotListItem>
                          Du überführst leidenschaftlich gerne komplexe
                          Zusammenhänge in einfache und nutzerzentrierte
                          UX-Konzepte
                        </DotListItem>
                        <DotListItem>
                          Lean UX kennst du nicht nur aus deinem Twitter Feed
                        </DotListItem>
                        <DotListItem>
                          Wireframing und Prototyping geht dir leicht von der
                          Hand
                        </DotListItem>
                        <DotListItem>
                          Du hast erste Erfahrungen in der Anwendung von
                          Methoden und Prinzipien des Design Thinkings und /
                          oder der agilen Softwareentwicklung
                        </DotListItem>
                        <DotListItem>
                          Optimalerweise kannst du Design Sprints und Design
                          Studios anleiten und durchführen
                        </DotListItem>
                        <DotListItem>
                          Du hast ein gutes Auge für Ästhetik und Liebe zum
                          Detail in der visuellen Gestaltung
                        </DotListItem>
                        <DotListItem>
                          Du bist souverän und intuitiv in der Lage, Design,
                          Innovation und Usability in Einklang zu bringen und
                          dies auch zu vermitteln
                        </DotListItem>
                        <DotListItem>
                          Du kommunizierst überzeugend und inspirierst dein
                          Umfeld
                        </DotListItem>
                        <DotListItem>
                          Software-Entwicklungsprozesse sind für dich kein
                          Neuland
                        </DotListItem>
                        <DotListItem>
                          Deutsch und Englisch beherrschst Du fließend
                        </DotListItem>
                      </DotList>
                    </Fifty>
                    <Fifty>
                      <ListHeadline>Deine Aufgaben</ListHeadline>
                      <DotList>
                        <DotListItem>
                          Vorbereitung und Durchführung von Workshops
                        </DotListItem>
                        <DotListItem>
                          User Research, Story Refinement und
                          Anforderungsanalyse
                        </DotListItem>
                        <DotListItem>
                          Entwicklung von UX-Strategien, Interface-Konzepten und
                          Informationsarchitekturen
                        </DotListItem>
                        <DotListItem>
                          Planung und Durchführung von Nutzungs- und
                          Usability-Tests
                        </DotListItem>
                        <DotListItem>
                          Unterstützung von Product Owner und Scrum Master
                        </DotListItem>
                        <DotListItem>
                          Hand in Hand mit Designern und Entwicklern arbeiten
                        </DotListItem>
                        <DotListItem>
                          Lean UX und Human-Centered-Design Prozesse predigen
                        </DotListItem>
                      </DotList>
                    </Fifty>
                  </Row>

                  <TextUtil align="center">
                    <ButtonLink
                      dark
                      href="mailto:info@uxi.de?subject=(Senior)%20UX-Designer%2FIn"
                    >
                      Bewirb dich jetzt
                    </ButtonLink>
                  </TextUtil>
                </JobOffer>

                <JobOffer title="Senior UI-Designer (m/w)">
                  <Measure>
                    <P>
                      Als UI-Designer gibst du digitalen Produkten ein Gesicht
                      und machst sie dadurch erst erleb- und bedienbar. Deine
                      Interfaces sind nicht nur modern gestaltet, sondern
                      erfüllen auch die Bedürfnisse der Zielgruppe und machen
                      alle Funktionen des Produktes optimal zugänglich. Es
                      gelingt dir, die visuelle Sprache unserer Kunden auf ein
                      digitales Produkt zu übertragen oder eine eigene Identität
                      dafür zu entwerfen. Bei der Umsetzung deiner
                      Interface-Visionen begleitest Du Kunden und agile
                      Development-Teams unterschiedlicher Größen. Ein
                      glücklicher Anwender ist dir dabei wichtiger als der
                      nächste Designpreis und Pattern Libraries sind kein
                      Neuland für dich.
                    </P>
                  </Measure>
                  <Row>
                    <Fifty>
                      <ListHeadline>Deine Skills</ListHeadline>
                      <DotList>
                        <DotListItem>
                          Mindestens fünf Jahre Berufserfahrung im Bereich User
                          Interface oder Visual Design
                        </DotListItem>
                        <DotListItem>
                          Sehr gute Kenntnisse in Sketch o.ä. Tools
                        </DotListItem>
                        <DotListItem>
                          Sehr gutes Auge für Ästhetik und Liebe zum Detail
                        </DotListItem>
                        <DotListItem>
                          Grundverständnis von guter UX und Interesse an
                          Konzept-Diskussionen
                        </DotListItem>
                        <DotListItem>
                          Grundlegende Kenntnisse von
                          Software-Entwicklungsprozessen
                        </DotListItem>
                        <DotListItem>
                          Überzeugende Kommunikationsfähigkeiten
                        </DotListItem>
                        <DotListItem>
                          Deutsch und Englisch beherrschst Du fließend
                        </DotListItem>
                        <DotListItem>
                          Strukturierte, eigenverantwortliche Arbeitsweise
                        </DotListItem>
                      </DotList>
                    </Fifty>
                    <Fifty>
                      <ListHeadline>Deine Aufgaben</ListHeadline>
                      <DotList>
                        <DotListItem>
                          Kreation von modernen, sauberen und modularen
                          Interfaces
                        </DotListItem>
                        <DotListItem>
                          Erstellen und Pflegen von Design Systemen und Pattern
                          Libraries
                        </DotListItem>
                        <DotListItem>
                          Gestaltung von Icons, die man nicht unbedingt in
                          standard Icon-Sets findet
                        </DotListItem>
                        <DotListItem>
                          Hand in Hand mit Konzeptern und Entwicklern arbeiten
                        </DotListItem>
                      </DotList>
                    </Fifty>
                  </Row>

                  <TextUtil align="center">
                    <ButtonLink
                      dark
                      href="mailto:info@uxi.de?subject=(Senior)%20UI-Designer%2FIn"
                    >
                      Bewirb dich jetzt
                    </ButtonLink>
                  </TextUtil>
                </JobOffer>

                <JobOffer title="Senior Frontend-Developer (m/w)">
                  <Measure>
                    <P>
                      Unsere Front-End-Developer erarbeiten zusammen mit UX- und
                      UI-Designern ansprechende User-Interfaces für Kunden aus
                      verschiedenen Branchen wie Industrie, Medizin oder dem
                      Consumer-Bereich.
                    </P>
                  </Measure>
                  <Row>
                    <Fifty>
                      <ListHeadline>Deine Skills</ListHeadline>
                      <DotList>
                        <DotListItem>
                          Tiefes Verständnis von HTML5, CSS3, JavaScript und
                          responsive Web
                        </DotListItem>
                        <DotListItem>
                          Erfahrung im Umgang mit CSS Architekturen
                          (ITCSS/OOCSS) und Naming conventions (BEM) sowie
                          MaintainableCSS
                        </DotListItem>
                        <DotListItem>
                          Erfahrung im Umgang mit aktuellen Taskrunnern
                          (NodeJS/GulpJS) und CSS Prozessoren (SASS, PostCSS)
                        </DotListItem>
                        <DotListItem>
                          Du nutzt Versionsverwaltung (Git) und kennst die
                          agilen Entwicklungsmethoden
                        </DotListItem>
                        <DotListItem>
                          Erfahrung mit Web Accessibility
                        </DotListItem>
                        <DotListItem>
                          Erfahrungen mit Web Performance-Optimierung
                        </DotListItem>
                        <DotListItem>
                          Gute Kenntnisse im Bereich TDD (insbesondere UI-Tests)
                        </DotListItem>
                        <DotListItem>
                          Kenntnisse zur Integration von RESTful APIs und Web
                          Services
                        </DotListItem>
                        <DotListItem>
                          Optimalerweise Erfahrung mit automatisierten
                          Testwerkzeugen (Browserstack, Saucelabs, etc.)
                        </DotListItem>
                        <DotListItem>
                          Optimalerweise Erfahrung im Bereich Continuous
                          Integration
                        </DotListItem>
                        <DotListItem>
                          Teamfähigkeit, Motivation, neue Impulse und Ideen
                        </DotListItem>
                        <DotListItem>
                          Überzeugende Kommunikationsfähigkeiten
                        </DotListItem>
                        <DotListItem>
                          Deutsch und Englisch beherrschst Du fließend
                        </DotListItem>
                        <DotListItem>
                          Strukturierte, eigenverantwortliche Arbeitsweise
                        </DotListItem>
                        <DotListItem>
                          Lust, dich weiterzubilden – Lust, uns Dinge
                          beizubringen :)
                        </DotListItem>
                      </DotList>
                    </Fifty>
                    <Fifty>
                      <ListHeadline>Deine Aufgaben</ListHeadline>
                      <DotList>
                        <DotListItem>
                          Verantwortung von Neuentwicklungen aber auch
                          Weiterentwicklungen, Optimierungen und Testing
                          bestehender Anwendungen.
                        </DotListItem>
                        <DotListItem>
                          Umsetzung der von uns entwickelten Spezifikationen
                          mittels Web-Standard-Technologien
                        </DotListItem>
                        <DotListItem>
                          Implementierung von Test-Mechanismen und Aufbereitung
                          der Ergebnisse
                        </DotListItem>
                        <DotListItem>Dokumentation von Ergebnissen</DotListItem>
                        <DotListItem>
                          Hand in Hand mit Designern und Konzeptern arbeiten{' '}
                        </DotListItem>
                      </DotList>
                    </Fifty>
                  </Row>

                  <TextUtil align="center">
                    <ButtonLink
                      dark
                      href="mailto:info@uxi.de?subject=(Senior)%20Frontend%20Developer%2FIn"
                    >
                      Bewirb dich jetzt
                    </ButtonLink>
                  </TextUtil>
                </JobOffer>
              </JobOfferList>
            </TwoThirds>
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
    <JobsPageTemplate
      transition={transition}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      pageLabel={post.frontmatter.pageLabel}
    />
  )
}

export const JobsPageQuery = graphql`
  query JobsPage($path: String!) {
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
