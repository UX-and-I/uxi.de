import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
import { HrThin, Section, TeaserHeadline, SubTitle } from '../components/Bricks'
import { Grid, Quarter, Row } from '../components/Grid'
import { px2rem } from '../constants'

const SubSubTitle = styled(SubTitle)`
  margin: ${px2rem(20)} 0 ${px2rem(20)};
  font-size: ${px2rem(18)};
  line-height: 1.6;
`

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
    hyphens: auto;
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
      <HrThin />
      <Section>
        <Grid size="full">
          <TeaserHeadline>Datenschutzerklärung</TeaserHeadline>
          <Two>
            <SubTitle>1. Datenschutz auf einen Blick</SubTitle>
            <SubSubTitle>Allgemeine Hinweise</SubSubTitle>{' '}
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <SubSubTitle>Datenerfassung auf unserer Website</SubSubTitle>{' '}
            <p>
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
            </p>{' '}
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>{' '}
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong>
            </p>{' '}
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>{' '}
            <p>
              Andere Daten werden automatisch beim Besuch der Website durch
              unsere IT-Systeme erfasst. Das sind vor allem technische Daten
              (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
              Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
              sobald Sie unsere Website betreten.
            </p>{' '}
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong>
            </p>{' '}
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>{' '}
            <p>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
            </p>{' '}
            <p>
              Sie haben jederzeit das Recht unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung, Sperrung oder Löschung dieser Daten zu
              verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
              können Sie sich jederzeit unter der im Impressum angegebenen
              Adresse an uns wenden. Des Weiteren steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <SubSubTitle>
              Analyse-Tools und Tools von Drittanbietern
            </SubSubTitle>{' '}
            <p>
              Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit Cookies und mit
              sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens
              erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu
              Ihnen zurückverfolgt werden. Sie können dieser Analyse
              widersprechen oder sie durch die Nichtbenutzung bestimmter Tools
              verhindern. Detaillierte Informationen dazu finden Sie in der
              folgenden Datenschutzerklärung.
            </p>{' '}
            <p>
              Sie können dieser Analyse widersprechen. Über die
              Widerspruchsmöglichkeiten werden wir Sie in dieser
              Datenschutzerklärung informieren.
            </p>
            <SubTitle>2. Allgemeine Hinweise und Pflichtinformationen</SubTitle>
            <SubSubTitle>Datenschutz</SubSubTitle>{' '}
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>{' '}
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>{' '}
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>
            <SubSubTitle>Hinweis zur verantwortlichen Stelle</SubSubTitle>{' '}
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>{' '}
            <p>
              UX&I GmbH<br />
              Kopernikusstr.28<br />
              40223 Düsseldorf<br />
              Deutschland
            </p>
            <p>
              Telefon: +49 (0) 211 781 785-10<br />
              E-Mail: info@uxi.de
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z.B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>
            <SubSubTitle>
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </SubSubTitle>{' '}
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
              Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>
            <SubSubTitle>
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </SubSubTitle>{' '}
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist
              der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser
              Unternehmen seinen Sitz hat. Eine Liste der
              Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem
              Link entnommen werden:{' '}
              <a
                href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                target="_blank"
              >
                https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
              </a>.
            </p>
            <SubSubTitle>Recht auf Datenübertragbarkeit</SubSubTitle>{' '}
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>
            <SubSubTitle>SSL- bzw. TLS-Verschlüsselung</SubSubTitle>{' '}
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              “http://” auf “https://” wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>{' '}
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
            <SubSubTitle>Auskunft, Sperrung, Löschung</SubSubTitle>{' '}
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema personenbezogene Daten können
              Sie sich jederzeit unter der im Impressum angegebenen Adresse an
              uns wenden.
            </p>
            <SubSubTitle>Widerspruch gegen Werbe-Mails</SubSubTitle>{' '}
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung und Informationsmaterialien wird hiermit widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
            <SubTitle>3. Datenschutzbeauftragter</SubTitle>
            <SubSubTitle>
              Gesetzlich vorgeschriebener Datenschutzbeauftragter
            </SubSubTitle>{' '}
            <p>
              Wir haben für unser Unternehmen einen Datenschutzbeauftragten
              bestellt.
            </p>
            <p>
              sicdata Unternehmensberatung <br />
              Tobias Erdmann<br />
              Schlachthofstraße 23a<br />
              42651 Solingen<br />
            </p>
            <p>
              Telefon: 0212659850<br />
              E-Mail: erdmann@sicdata.de
            </p>
            <SubTitle>4. Datenerfassung auf unserer Website</SubTitle>
            <SubSubTitle>Cookies</SubSubTitle>{' '}
            <p>
              Die Internetseiten verwenden teilweise so genannte Cookies.
              Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
              keine Viren. Cookies dienen dazu, unser Angebot
              nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
              sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und
              die Ihr Browser speichert.
            </p>{' '}
            <p>
              Die meisten der von uns verwendeten Cookies sind so genannte
              “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch
              gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert
              bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren
              Browser beim nächsten Besuch wiederzuerkennen.
            </p>{' '}
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browser aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>{' '}
            <p>
              Cookies, die zur Durchführung des elektronischen
              Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von
              Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich
              sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse
              an der Speicherung von Cookies zur technisch fehlerfreien und
              optimierten Bereitstellung seiner Dienste. Soweit andere Cookies
              (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert
              werden, werden diese in dieser Datenschutzerklärung gesondert
              behandelt.
            </p>
            <SubSubTitle>Server-Log-Dateien</SubSubTitle>{' '}
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>{' '}
            <ul>
              {' '}
              <li>Browsertyp und Browserversion</li>{' '}
              <li>verwendetes Betriebssystem</li> <li>Referrer URL</li>{' '}
              <li>Hostname des zugreifenden Rechners</li>{' '}
              <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li>{' '}
            </ul>{' '}
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>{' '}
            <p>
              Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f
              DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags
              oder vorvertraglicher Maßnahmen gestattet.
            </p>
            <SubTitle>5. Analyse Tools und Werbung</SubTitle>
            <SubSubTitle>Google Analytics</SubSubTitle>{' '}
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google
              Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA.
            </p>{' '}
            <p>
              Google Analytics verwendet so genannte "Cookies". Das sind
              Textdateien, die auf Ihrem Computer gespeichert werden und die
              eine Analyse der Benutzung der Website durch Sie ermöglichen. Die
              durch den Cookie erzeugten Informationen über Ihre Benutzung
              dieser Website werden in der Regel an einen Server von Google in
              den USA übertragen und dort gespeichert.
            </p>{' '}
            <p>
              Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der Analyse des Nutzerverhaltens, um
              sowohl sein Webangebot als auch seine Werbung zu optimieren.
            </p>{' '}
            <p>
              <strong>Browser Plugin</strong>
            </p>{' '}
            <p>
              Sie können die Speicherung der Cookies durch eine entsprechende
              Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website vollumfänglich werden nutzen
              können. Sie können darüber hinaus die Erfassung der durch den
              Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten
              (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser
              Daten durch Google verhindern, indem Sie das unter dem folgenden
              Link verfügbare Browser-Plugin herunterladen und installieren:{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"
              >
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>.
            </p>{' '}
            <p>
              <strong>Widerspruch gegen Datenerfassung</strong>
            </p>{' '}
            <p>
              Sie können die Erfassung Ihrer Daten durch Google Analytics
              verhindern, indem Sie auf folgenden Link klicken. Es wird ein
              Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei
              zukünftigen Besuchen dieser Website verhindert:{' '}
              <a href="javascript:gaOptout();">Google Analytics deaktivieren</a>.
            </p>{' '}
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
              finden Sie in der Datenschutzerklärung von Google:{' '}
              <a
                href="https://support.google.com/analytics/answer/6004245?hl=de"
                target="_blank"
              >
                https://support.google.com/analytics/answer/6004245?hl=de
              </a>.
            </p>
            <p>
              Quelle <a href="https://www.erecht24.de">www.erecht24.de</a>
            </p>
          </Two>
        </Grid>
      </Section>
      <HrThin />
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
