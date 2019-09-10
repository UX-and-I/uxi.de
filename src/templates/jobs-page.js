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
                  <a href="mailto:bewerbung@uxi.de">Schreib uns</a> oder ruf
                  einfach mal an. Sende uns deine Bewerbung, gerne mit
                  Arbeitsproben und Gehaltsvorstellung.
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
                          Im Idealfall hast du Erfahrung in qualitativem
                          Research zum Beispiel in Form von Leitfaden-Interviews
                          oder Feldforschung
                        </DotListItem>
                        <DotListItem>
                          Optimalerweise hast du Erfahrung mit der Planung,
                          Durchführung und Auswertung von Usability Tests
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
                      href="mailto:bewerbung@uxi.de?subject=(Senior)%20UX-Designer%2FIn"
                    >
                      Bewirb dich jetzt
                    </ButtonLink>
                  </TextUtil>
                </JobOffer>

                <JobOffer title="Senior UI-Designer (m/w)">
                  <Measure>
                    <P>
                      Wenn Du als erfahrener Designer leidenschaftlich gern
                      digitale Produkte gestaltest, Human-Centered-Design für
                      dich keine Floskel ist und Du am Liebsten komplexe
                      Probleme löst, dann bist Du bei uns richtig. Wenn deine
                      Entwürfe und Prototypen nicht nur dein Team inspirieren,
                      sondern vorallem den (Test-)Nutzer begeistern, dann suchen
                      wir dich. Bitte Weiterlesen.
                    </P>
                  </Measure>
                  <Row>
                    <Fifty>
                      <ListHeadline>Du bringst mit:</ListHeadline>
                      <DotList>
                        <DotListItem>
                          Du hast min. 5 Jahre Berufserfahrung als Designer für
                          Digitalagenturen oder Unternehmen sammeln können.
                        </DotListItem>
                        <DotListItem>
                          Du hast ein gutes Gespür für exzellente Gestaltung und
                          optimalerweise Erfahrungen in digitaler
                          Produktentwicklung in agilen Teams.
                        </DotListItem>
                        <DotListItem>
                          Du bist lernbegeistert: Auch wenn deine Designs schon
                          grandios aussehen ist dir jedes Nutzer-Feedback
                          willkommen und du kannst mit Kritik und Anregungen
                          professionell umgehen.
                        </DotListItem>
                        <DotListItem>
                          Du bist kommunikationsstark und hast ein solides
                          Methoden- und Theoriefundament: Du verargumentierst
                          deine Design-Entscheidungen sicher vor dem Team und
                          deinen Auftraggebern und teilst dein gelerntes Wissen
                          und deine Erfahrungen gerne mit Kollegen.
                        </DotListItem>
                        <DotListItem>
                          Du hast eine gesunde Selbsteinschätzung und
                          reflektierst auch dein persönliches
                          Entwicklungspotential.
                        </DotListItem>
                        <DotListItem>
                          Du arbeitest selbstorganisiert, strukturiert und
                          eigenverantwortlich und gehst respektvoll mit deiner
                          Zeit und den Ressourcen deiner Kollegen um.
                        </DotListItem>
                        <DotListItem>
                          Du hast ein Herz für Systeme und kannst auch mit
                          objekt-orientiertem Design umgehen.
                        </DotListItem>
                        <DotListItem>
                          Deine Entwürfe sind per se barrierefrei und gelungene
                          Ergonomie ist für dich selbstverständlich.
                        </DotListItem>
                        <DotListItem>
                          Du beherrschst Deutsch und Englisch fließend.
                        </DotListItem>
                      </DotList>
                    </Fifty>
                    <Fifty>
                      <ListHeadline>
                        Deine Aufgaben als Designer bei UX&I:
                      </ListHeadline>
                      <DotList>
                        <DotListItem>
                          Design-Ownership für User Interfaces. Du leitest die
                          Gestaltung in deinem Projekt und definierst
                          Design-Sprachen im Sinne des Kunden und der Nutzer des
                          jeweiligen Produktes.
                        </DotListItem>
                        <DotListItem>
                          Kollaboration mit interdisziplinären Produkt-Teams. In
                          enger Zusammenarbeit vor Ort beim Kunden oder bei uns
                          im Büro findest Du mit Developern, UX-Designern,
                          Product Ownern, Stakeholdern und Nutzern gemeinsam die
                          optimale Lösung für das jeweilige Problem.
                        </DotListItem>
                        <DotListItem>
                          Design-Lösungen durch Prototypen validieren. Du
                          erkennst, wann deine Designs pixel-perfect sein müssen
                          oder wann ein Lo-Fi Mockup besser angebracht ist.
                        </DotListItem>
                        <DotListItem>
                          Empathisch sein. Unsere Teams experimentieren,
                          recherchieren und wollen erst den Nutzer und seinen
                          Kontext verstehen, bevor “der Pinsel geschwungen”
                          wird.
                        </DotListItem>
                        <DotListItem>
                          Selbstorganisation. Du übernimmst die Verantwortung
                          für deine Arbeit und kommst autonom und strukturiert
                          zu hochwertig gestalteten Ergebnissen.
                        </DotListItem>
                      </DotList>
                    </Fifty>
                    <Fifty>
                      <ListHeadline>UX&I bietet Dir:</ListHeadline>
                      <DotList>
                        <DotListItem>
                          Abwechslungsreiche, nachhaltige und herausfordernde
                          Projekte, deren Interfaces von vielen Menschen benutzt
                          werden.
                        </DotListItem>
                        <DotListItem>
                          Pairings und regelmäßige Formate zum Austausch mit
                          deinen Design-Kollegen.
                        </DotListItem>
                        <DotListItem>
                          Arbeiten nach agilen Methoden, keine Pitches.
                        </DotListItem>
                        <DotListItem>
                          Zeit und Budget für Fortbildung. Lies ein gutes Buch,
                          fahr auf eine Konferenz oder nutze die Zeit, um an
                          eigenen Projekten oder an der Firma zu arbeiten.
                        </DotListItem>
                        <DotListItem>
                          Familiäres und lebensfreundliches Arbeitsklima. Bei
                          uns gibt’s keine Überstunden. Manchmal arbeitet es
                          sich besser von Zuhause aus und manchmal muss der
                          Nachwuchs auch mal mit ins Büro.
                        </DotListItem>
                        <DotListItem>
                          Eigenverantwortung und Vertrauen. Gegenseitiger
                          Respekt wird bei uns wirklich sehr groß geschrieben.
                          Verantwortung übernimmt jeder für sich, seine Arbeit
                          und sein Team. Denn Du weißt selbst am besten, ob dein
                          Urlaub zum Projektplan passt und wo und wie du am
                          effektivsten arbeiten kannst.
                        </DotListItem>
                      </DotList>
                    </Fifty>
                  </Row>

                  <TextUtil align="center">
                    <ButtonLink
                      dark
                      href="mailto:bewerbung@uxi.de?subject=(Senior)%20UI-Designer%2FIn"
                    >
                      Bewirb dich jetzt
                    </ButtonLink>
                  </TextUtil>
                </JobOffer>

                <JobOffer title="Frontend-Developer (m/w)">
                  <Measure>
                    <P>
                      Als Frontend-Entwickler gibst du unseren Visionen ein
                      Fundament: Durch dich werden die Konzepte und Designs
                      deiner Kollegen lebendig und du fühlst dich verantwortlich
                      dafür, dem User Interface den letzten Schliff zu
                      verpassen. Du bist ein sozialer Teamplayer, hast ein gutes
                      Gespür für Interaktionsdesign, bist stets über die
                      neuesten Web-Technologien informiert und kannst auch gut
                      zwischen Design und (Backend-)Technik vermitteln. Pattern
                      Libraries und State-of-the-Art Frameworks sind dein
                      zweites Zuhause und du ruhst erst, wenn die Ergebnisse
                      deinen hohen Ansprüchen genügen. Mit deinen Konzepten und
                      deinen schlanken Prozessen holst du nicht nur unsere
                      Stakeholder, sondern auch beteiligte
                      Full-Stack-Entwicklungsteams und natürlich unsere Nutzer
                      ab.
                    </P>
                    <P>
                      Von ersten Prototypen über knackige Webapps bis zur
                      liebevollen Pflege von Design-Systemen und Pattern
                      Libraries erwarten dich abwechslungsreiche und
                      anspruchsvolle Entwicklungsaufgaben.
                    </P>
                  </Measure>
                  <Row>
                    <Fifty>
                      <ListHeadline>Deine Skills</ListHeadline>
                      <DotList>
                        <DotListItem>
                          Du bringst ein tiefes Verständnis für Webstandards mit
                          und beherrschst HTML, CSS und Javascript im Schlaf.
                        </DotListItem>
                        <DotListItem>
                          Du hast Erfahrung im Entwerfen von CSS-Architekturen
                          für nachhaltige und pflegbare Styles.
                        </DotListItem>
                        <DotListItem>
                          Du verwendest eine zeitgemäße Toolchain für deine
                          Frontend-Entwicklung und Build-Prozesse.
                        </DotListItem>
                        <DotListItem>
                          Semantik, Web-Accessibility und -Performance sind dir
                          wichtig.
                        </DotListItem>
                        <DotListItem>
                          Du möchtest dich weiterbilden – und hast Lust, uns
                          Dinge beizubringen :)
                        </DotListItem>
                        <DotListItem>
                          Du brennst für Frontend-Apps und nicht so sehr für
                          CSS? Kein Problem – du wirst dich trotzdem bei uns
                          wohlfühlen.
                        </DotListItem>
                      </DotList>
                    </Fifty>
                    <Fifty>
                      <ListHeadline>Deine Aufgaben</ListHeadline>
                      <DotList>
                        <DotListItem>
                          Du arbeitest auf <strong>Augenhöhe</strong> mit deinen
                          Kollegen in einem agilen Team.
                        </DotListItem>
                        <DotListItem>
                          Du stehst im ständigen Austausch und arbeitest Hand in
                          Hand mit Backend-Entwicklern, Visual Designern und
                          UX-Konzeptern.
                        </DotListItem>
                        <DotListItem>
                          Du nutzt die Tools, die dir am besten taugen (aktuell
                          nutzen wir unter anderem React.js, jest,
                          styled-components, fractal, storybook, git, scss,
                          node.js, gatsby.js).
                        </DotListItem>
                        <DotListItem>
                          Du hältst dich mit der 20%-Zeit{' '}
                          <strong>auf dem Laufenden</strong> und bleibst am Zahn
                          der Zeit.
                        </DotListItem>
                        <DotListItem>
                          Wir entwickeln unsere gemeinsamen Workflows weiter.
                        </DotListItem>
                        <DotListItem>
                          Mit deinem Gespür für gute Gestaltung trägst du zur
                          hohen Qualität bei.
                        </DotListItem>
                      </DotList>
                    </Fifty>
                  </Row>

                  <TextUtil align="center">
                    <ButtonLink
                      dark
                      href="mailto:bewerbung@uxi.de?subject=(Senior)%20Frontend%20Developer%2FIn"
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
