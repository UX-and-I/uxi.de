import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html lang="de" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link
            rel="icon"
            href="favicon-16.png"
            sizes="16x16"
            type="image/png"
          />
          <link
            rel="icon"
            href="favicon-32.png"
            sizes="32x32"
            type="image/png"
          />
          <link
            rel="icon"
            href="favicon-48.png"
            sizes="48x48"
            type="image/png"
          />
          <link
            rel="icon"
            href="favicon-62.png"
            sizes="62x62"
            type="image/png"
          />
          <link
            rel="icon"
            href="favicon-192.png"
            sizes="192x192"
            type="image/png"
          />
          <link rel="icon" href="favicon.ico" type="image/vnd.microsoft.icon" />
          {css}
          <meta
            name="google-site-verification"
            content="MeGACw1YfQNPEXAiTZcJGbbZWV_1itf20NQ23H_-3Pc"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
