export const familySerif = '"Source Serif Pro", serif'
export const familySansSerif = '"Source Sans Pro", sans-serif'
export const px2rem = (value, context = 16) => `${value / 16}rem`
export const px2em = (value, context = 16) => `${value / 16}em`
export const lineHeight = (value, context = 16) => `${value / context}`

/* Todo: switch to design tokens, for use in JS and SCSS */
export const colors = {
  red: '#ea1b68',
  pink: '#ee6492',
  darkgreen: '#5fbd26',
  green: '#a7d941',
  orange: '#f38231',
  yellow: '#fdc144',
  blue: '#1a9bfc',
  darkBlue: '#079BED',
  cyan: '#4cc8f3',
  purple: '#090B8D',
  lightPurple: '#DADBEE',
  white: '#fff',
  nearlyWhite: '#FAFAFA',

  gray: '#373941',
  gray2: '#C2C3CA',
  gray3: '#E5E5E5',

  hero: '#020621',
  imageHero: '#fff',
  text: '#020621',
  title: 'rgba(2, 6, 33, 0.75)',
  hr: 'rgba(173, 173, 173, 0.34)',
}

export const z = {
  confetti: 0,
  main: 1,
  footer: 1,
  header: 2,
}

export const media = {
  minTablet: `@media (min-width: ${px2rem(768)})`,
  maxTablet: `@media (max-width: ${px2rem(767)})`,
}
