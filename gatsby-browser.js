import WebFont from 'webfontloader';

const webfontConfig = WebFont.Config = {
  google: {
    families: [
      "Source+Sans+Pro:400,600,700",
      "Source+Serif+Pro:400,400i,600,600i"
    ]
  }
};


exports.onClientEntry = () => {
  /* Load webfonts */
  WebFont.load(webfontConfig);
}