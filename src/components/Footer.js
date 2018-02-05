import React from 'react'
import styled from 'styled-components'
import RouterLinkOriginal from 'gatsby-link'

import { RouterLink, TextDot } from './Bricks'
import { px2rem, colors, lineHeight, familySerif, z, media } from '../constants'
import { Logo } from './Logo'
import { Fifty, Row, Quarter, SeventyFive, Third, Grid } from './Grid'
import { SocialIcons } from './SocialIcons'
import { Address } from './Address'

const Wrapper = styled.footer`
  padding: ${px2rem(48)} 0 ${px2rem(56)};

  ${media.minTablet} {
    padding: ${px2rem(48)} ${px2rem(16)} ${px2rem(56)};
  }
  z-index: ${z.footer};
}
`
const MailTo = styled.div`
  font-family: ${familySerif};
  font-size: ${px2rem(22)};
  line-height: ${lineHeight(27, 22)};
  color: ${colors.gray};
  > a {
    position: relative;
    color: inherit;

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: ${px2rem(-2)};
      left: 0;
      width: 100%;
      height: ${px2rem(2)};
      background-color: ${colors.gray2};
      border-radius: ${px2rem(1)};
    }

    &:hover:after {
      background-color: ${colors.gray};
    }
  }
`

const FirstRow = Row.extend`
  ${media.maxTablet} {
    display: flex;
    flex-wrap: wrap;
  }
`

const LogoQuarter = Quarter.extend`
  ${media.maxTablet} {
    flex: 0 0 100%;
  }
`

const MailFifty = Fifty.extend`
  ${media.maxTablet} {
    flex: 0 0 50%;
  }
`

const SocialQuarter = Quarter.extend`
  ${media.maxTablet} {
    flex: 0 0 50%;
  }
`

const MobileSpacing = styled.div`
  ${media.maxTablet} {
    margin: ${px2rem(24)} 0;
  }
`

const ContentSpacing = styled.div`
  margin: 0 0 ${px2rem(48)};

  ${media.minTablet} {
    margin: ${px2rem(56)} 0;
  }
`

const SmallPrint = styled.div`
  font-size: ${px2rem(12)};
  line-height: ${lineHeight(19, 12)};
  color: ${colors.gray};
}
`

const ImpressumLink = styled(RouterLinkOriginal)`
  color: inherit;
`

export default function Footer() {
  return (
    <Wrapper>
      <Grid size="full">
        <FirstRow full center>
          <LogoQuarter>
            <Logo />
          </LogoQuarter>
          <MailFifty>
            <MobileSpacing>
              <MailTo>
                Mail an uns: <a href="mailto:info@uxi.de">info@uxi.de</a>
              </MailTo>
            </MobileSpacing>
          </MailFifty>
          <SocialQuarter>
            <MobileSpacing>
              <SocialIcons />
            </MobileSpacing>
          </SocialQuarter>
        </FirstRow>
        <ContentSpacing>
          <FirstRow full>
            <LogoQuarter pushRight>
              <MobileSpacing>
                <Address>
                  <strong>Düsseldorf (HQ)</strong>
                  <br />
                  Kopernikusstr. 28<br />
                  40223 Düsseldorf<br />
                  +49 (0)211 781 785-0
                </Address>
              </MobileSpacing>
            </LogoQuarter>

            <SocialQuarter>
              <Address>
                <strong>München</strong>
                <br />
                Hans-Preissinger-Str. 8<br />
                81379 München<br />
                +49 (0)89 215 407 2-0
              </Address>
            </SocialQuarter>
            <SocialQuarter>
              <Address>
                <strong>Berlin</strong>
                <br />
                Kemperplatz 1 / Building A<br />
                10785 Berlin<br />
                +49 (0)30 1208230-0
              </Address>
            </SocialQuarter>
          </FirstRow>
        </ContentSpacing>
      </Grid>

      <SmallPrint>
        <Grid size="full">
          <Row full>
            <Quarter>© UX&I GmbH 2018</Quarter>
            <SeventyFive>
              <TextDot>
                Handelsregister Amtsgericht Düsseldorf HRB 79536
              </TextDot>
              <TextDot>Umsatzsteuer-ID: DE309774683</TextDot>
              <TextDot>Steuernummer: 106/5728/1407</TextDot>
              <TextDot>
                <ImpressumLink to="/impressum-und-datenschutz">
                  Impressum und Datenschutz
                </ImpressumLink>
              </TextDot>
            </SeventyFive>
          </Row>
        </Grid>
      </SmallPrint>
    </Wrapper>
  )
}
