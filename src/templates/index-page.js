import React from 'react'
// import Script from 'react-load-script'
import Helmet from 'react-helmet'
import {
  Section,
  SectionCover,
  Hero,
  HeroSub,
  Title,
  ButtonRouterLink,
  HrThin,
} from '../components/Bricks'
import { Fifty, Grid, Row } from '../components/Grid'
import { ListSection } from '../components/ListSection'
import { Image } from '../components/Image'

const CLIENT_LIST = [
  'Allianz',
  'Arvato',
  'AUTOonline',
  'AXA',
  'BASF',
  'Bosch',
  'codecentric',
  'Conrad',
  'Daimler',
  'DB Schenker',
  'ERGO',
  'Google Launchpad',
  'Hansetrans',
  'HELLA',
  'Instana',
  'item Industrietechnik',
  'METRO',
  'mibelle Group',
  'Miltenyi Biotec',
  'OBI',
  'Peek & Cloppenburg',
  'Porsche',
  'PricewaterhouseCoopers',
  'sipgate',
  'Sparkassen DirektVersicherung',
  'Telekom',
  'Windmöller & Hölscher',
  'Zurich Versicherung',
]

const TitleH3 = Title.withComponent('h3')
const TitleH4 = Title.withComponent('h4')

class IndexPageTemplate extends React.Component {
  /*
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
      window.netlifyIdentity.init()
    }
  }
  */

  render() {
    const { title, description, transition } = this.props

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        {/*<Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />*/}
        <SectionCover>
          <Hero>Digitale Produktschmiede</Hero>
          <HeroSub>
            Wir entwerfen überzeugende <strong>Produktstrategien</strong>,
            validieren <strong>Produktideen</strong> und gestalten{' '}
            <strong>leicht verständliche User Interfaces</strong> für komplexe
            Anwendungsbereiche.<br />Innovativ, agil und mit viel Liebe zum
            Detail.
          </HeroSub>
        </SectionCover>
        <HrThin />
        <Section>
          <Grid>
            <Row>
              <Fifty>
                <Image
                  ratio={3 / 4}
                  preview={require('../img/illustrations/uxi_illustration_waswirbieten@2x.60.png')}
                  src={require('../img/illustrations/uxi_illustration-waswirbieten@2x.png')}
                />
              </Fifty>
              <Fifty>
                <TitleH3>Was wir bieten</TitleH3>
                <p>
                  Wir ergänzen Entwicklungs- und Produktteams mit kreativer
                  Expertise und etablieren nutzerzentrierte Produktionsprozesse
                  – von der{' '}
                  <strong>
                    Ideenfindung und -verprobung bis zum wachsenden Designsystem
                  </strong>.
                </p>
                <ButtonRouterLink to="/leistungen">
                  Unsere Leistungen
                </ButtonRouterLink>
              </Fifty>
            </Row>
          </Grid>
        </Section>
        <HrThin />
        <Section>
          <Grid>
            <Row>
              <Fifty>
                <Image
                  ratio={386 / 684}
                  preview={require('../img/unserteam@2x.60.jpg')}
                  src={require('../img/unserteam@2x.jpg')}
                />
              </Fifty>
              <Fifty>
                <TitleH4>Unser Team</TitleH4>
                <p>
                  Passionierte Querdenker aus Beratung und Konzeption, kreative{' '}
                  Designer und versierte Frontend-Entwickler schaffen
                  konsistente Nutzererlebnisse aus einem Guss. Ganzheitlich,
                  wirtschaftlich effizient und mit einem guten Gespür für
                  technische Machbarkeit.
                </p>
                <ButtonRouterLink to="/ueber-uns">Über uns</ButtonRouterLink>
              </Fifty>
            </Row>
          </Grid>
        </Section>

        <ListSection title={'Unsere Kunden'} clients={CLIENT_LIST} />
      </div>
    )
  }
}

export default class IndexPage extends React.Component {
  render() {
    const {
      transition,
      data: { markdownRemark: { frontmatter: { title, description } } },
    } = this.props

    return (
      <IndexPageTemplate
        title={title}
        description={description}
        transition={transition}
      />
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery($path: String!) {
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
