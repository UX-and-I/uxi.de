import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
import { Section, TeaserHeadline } from '../components/Bricks'
import { Grid, Quarter, Row } from '../components/Grid'
import { px2rem } from '../constants'

const Two = styled.div`
  & p {
    margin-top: 0;
  }

  @media (min-width: ${px2rem(768)}) {
    column-count: 2;
    column-gap: 35px;
  }
`

const Wrapper = styled.div`
  & a {
    color: inherit;
  }
`

export const SimplePageTemplate = ({
  title,
  pageLabel,
  content,
  contentComponent,
  transition,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Wrapper style={transition && transition.style}>
      <Helmet title={title} />
      <Section>
        <Grid size="full">
          <TeaserHeadline>Impressum</TeaserHeadline>

          <Row>
            <Quarter>
              <p>
                UX&amp;I GmbH<br />Kopernikusstr.28<br />40223 Düsseldorf<br />Deutschland
              </p>
            </Quarter>
            <Quarter>
              <p>
                Telefon: +49 (0) 211 781 785-10<br />E-Mail:{' '}
                <a href="mailto:info@uxi.de">info@uxi.de</a>
              </p>
            </Quarter>
            <Quarter>
              <p>Handelsregister Amtsgericht Düsseldorf HRB&nbsp;79536</p>
            </Quarter>
            <Quarter>
              <p>
                Inhaltlich Verantwortlicher gemäß §6 MDStV: Tobias Schlei,
                Patrick Oselka
              </p>
            </Quarter>
            <Quarter>
              <p>
                Geschäftsführer:<br />Tobias Schlei, Patrick Oselka
              </p>
            </Quarter>
          </Row>
        </Grid>
      </Section>
      <Section>
        <Grid size="full">
          <TeaserHeadline>Datenschutz</TeaserHeadline>
          <Two>
            <p>
              <strong>Haftungsausschluss</strong>
              <br />
              Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
              recherchiert und implementiert. Fehler im Bearbeitungsvorgang sind
              dennoch nicht auszuschließen. Hinweise und Korrekturen senden Sie
              bitte an eine der hier aufgeführten Adressen der UX&amp;I GmbH.
              Eine Haftung für die Richtigkeit, Vollständigkeit und Aktualität
              dieser Webseiten kann trotz sorgfältiger Prüfung nicht übernommen
              werden. Die UX&amp;I GmbH übernimmt insbesondere keinerlei Haftung
              für eventuelle Schäden oder Konsequenzen, die durch die direkte
              oder indirekte Nutzung der angebotenen Inhalte entstehen. Die
              UX&amp;I GmbH ist als Inhaltsanbieter für die eigenen Inhalte, die
              es zur Nutzung bereithält, nach den allgemeinen Gesetzen
              verantwortlich. Von diesen eigenen Inhalten sind Querverweise
              („externe Links“) auf die von anderen Anbietern bereitgehaltenen
              Inhalte zu unterscheiden. Diese fremden Inhalte stammen weder von
              der UX&amp;I GmbH, noch hat die UX&amp;I GmbH die Möglichkeit, den
              Inhalt von Seiten Dritter zu beeinflussen. Die Inhalte fremder
              Seiten, auf die die UX&amp;I GmbH mittels Links hinweist, spiegeln
              nicht die Meinung der UX&amp;I GmbH wider, sondern dienen
              lediglich der Information und der Darstellung von Zusammenhängen.
              Die UX&amp;I GmbH haftet nicht für fremde Inhalte, auf die es
              lediglich im oben genannten Sinne hinweist. Die Verantwortlichkeit
              liegt alleine bei dem Anbieter der Inhalte.
            </p>
            <p>
              <strong>Urheberrecht</strong>
              <br />
              Alle auf dieser Website veröffentlichten Inhalte (Texte, Grafiken,
              Bilder, Layout usw.) unterliegen dem Urheberrecht. Jede vom
              Urheberrechtsgesetz nicht zugelassene Verwertung bedarf vorheriger
              schriftlicher Zustimmung der jeweiligen Berechtigten. Dies gilt
              insbesondere für Bearbeitung, Übersetzung, Vervielfältigung,
              Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in
              Datenbanken oder anderen elektronischen Medien und Systemen.
              Downloads und Fotokopien von Web-Seiten – nur für den
              persönlichen, privaten, nicht kommerziellen Gebrauch – dürfen
              grundsätzlich hergestellt werden. Die nicht kommerzielle Nutzung
              vonUX&amp;I-Webseiteninhalten kann von der UX&amp;I GmbH gestattet
              werden. Voraussetzung dafür ist die vorherige schriftliche Anfrage
              durch die Fax-Zusendung eines mit der Unterschrift des jeweiligen
              Vertretungsberechtigten versehenen Formulars. Bitte beachten Sie
              die Nutzungshinweise und die Informationen zur Verlinkung auf
              UX&amp;I-Webseiteninhalte. Die unerlaubte Reproduktion oder
              Weitergabe einzelner Inhalte oder kompletter Seiten wird straf-
              und zivilrechtlich verfolgt.
            </p>
            <p>
              <strong>Geltungsbereich</strong>
              <br />
              Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang
              und Zwecke der Erhebung und Verwendung personenbezogener Daten
              durch die UX&amp;I GmbH, Kopernikus Straße 28, 40223 Düsseldorf
              auf dieser Website (im folgenden “Angebot”) auf. Die rechtlichen
              Grundlagen des Datenschutzes finden sich im
              Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz (TMG).
            </p>
            <p>
              <strong>Cookies</strong>
              <br />
              Cookies sind kleine Dateien, die es ermöglichen, auf dem
              Zugriffsgerät der Nutzer (PC, Smartphone o.ä.) spezifische, auf
              das Gerät bezogene Informationen zu speichern. Sie dienen zum
              einem der Benutzerfreundlichkeit von Webseiten und damit den
              Nutzern (z.B. Speicherung von Login Daten). Zum anderen dienen
              sie, um die statistische Daten der Webseitennutzung zu erfassen
              und sie zwecks Verbesserung des Angebotes analysieren zu können.
              Die Nutzer können auf den Einsatz der Cookies Einfluss nehmen. Die
              meisten Browser verfügen eine Option mit der das Speichern von
              Cookies eingeschränkt oder komplett verhindert wird. Allerdings
              wird darauf hingewiesen, dass die Nutzung und insbesondere der
              Nutzungskomfort ohne Cookies eingeschränkt werden. Sie können
              viele Online-Anzeigen-Cookies von Unternehmen über die
              US-amerikanische Seite{' '}
              <a href="http://www.aboutads.info/choices/">
                http://www.aboutads.info/choices/
              </a>{' '}
              oder die EU-Seite{' '}
              <a href="http://www.youronlinechoices.com/uk/your-ad-choices/">
                http://www.youronlinechoices.com/uk/your-ad-choices/
              </a>{' '}
              verwalten.
            </p>
            <p>
              <strong>Google Analytics</strong>
              <br />
              Dieses Angebot benutzt Google Analytics, einen Webanalysedienst
              der Google Inc. („Google“). Google Analytics verwendet sog.
              „Cookies“, Textdateien, die auf Computer der Nutzer gespeichert
              werden und die eine Analyse der Benutzung der Website durch sie
              ermöglichen. Die durch den Cookie erzeugten Informationen über
              Benutzung dieser Website durch die Nutzer werden in der Regel an
              einen Server von Google in den USA übertragen und dort
              gespeichert.
            </p>
            <p>
              Im Falle der Aktivierung der IP-Anonymisierung auf dieser
              Webseite, wird die IP-Adresse der Nutzer von Google jedoch
              innerhalb von Mitgliedstaaten der Europäischen Union oder in
              anderen Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
              volle IP-Adresse an einen Server von Google in den USA übertragen
              und dort gekürzt. Die IP-Anonymisierung ist auf dieser Website
              aktiv. Im Auftrag des Betreibers dieser Website wird Google diese
              Informationen benutzen, um die Nutzung der Website durch die
              Nutzer auszuwerten, um Reports über die Websiteaktivitäten
              zusammenzustellen und um weitere mit der Websitenutzung und der
              Internetnutzung verbundene Dienstleistungen gegenüber dem
              Websitebetreiber zu erbringen.
            </p>
            <p>
              Die im Rahmen von Google Analytics von Ihrem Browser übermittelte
              IP-Adresse wird nicht mit anderen Daten von Google
              zusammengeführt. Die Nutzer können die Speicherung der Cookies
              durch eine entsprechende Einstellung Ihrer Browser-Software
              verhindern; Dieses Angebot weist die Nutzer jedoch darauf hin,
              dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen
              dieser Website vollumfänglich werden nutzen können. Die Nutzer
              können darüber hinaus die Erfassung der durch das Cookie erzeugten
              und auf ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
              IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
              Google verhindern, indem sie das unter dem folgenden Link
              verfügbare Browser-Plugin herunterladen und installieren:{' '}
              <a href="http://tools.google.com/dlpage/gaoptout?hl=de">
                http://tools.google.com/dlpage/gaoptout?hl=de
              </a>.
            </p>
            <p>
              Alternativ zum Browser-Add-On oder innerhalb von Browsern auf
              mobilen Geräten, klicken Sie bitte diesen Link, um die Erfassung
              durch Google Analytics innerhalb dieser Website zukünftig zu
              verhindern. Dabei wird ein Opt-Out-Cookie auf Ihrem Gerät
              abgelegt. Löschen Sie Ihre Cookies, müssen Sie diesen Link erneut
              klicken.
            </p>
          </Two>
        </Grid>
      </Section>
    </Wrapper>
  )
}

export default ({ data, transition }) => {
  const { markdownRemark: post } = data
  return (
    <SimplePageTemplate
      transition={transition}
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      pageLabel={post.frontmatter.pageLabel}
      content={post.html}
    />
  )
}

export const SimplePageQuery = graphql`
  query SimplePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
