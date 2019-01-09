import typography from './utils/typography'
let rhythm = typography.rhythm
export const breakpointNumeric = {
  small: 411,
  medium: 768,
  large: 1024,
  xlarge: 1280
}
export const breakpoint = {
  mediumUp: `@media (min-width: ${breakpointNumeric.small + 1}px)`,
  largeUp: `@media (min-width: ${breakpointNumeric.medium + 1}px)`,
  xlargeUp: `@media (min-width: ${breakpointNumeric.large + 1}px)`,

  smallOnly: `@media (max-width: ${breakpointNumeric.small}px)`,
  mediumDown: `@media (max-width: ${breakpointNumeric.medium}px)`,
  largeDown: `@media (max-width: ${breakpointNumeric.large}px)`
}

export const container = {
  small: rhythm(12),
  medium: rhythm(38),
  large: rhythm(48)
}

export const color = {
  blue: '#348dd9',
  blueDark: '#374e61',
  lightBlue: '#ebf4fb',
  green: '#0ede6f',

  orange: '#E59269',
  coral: '#E33367',
  teal: '#57A5B4',

  twitter: '#1DA1F2',

  gray90: '#1A1A1A',
  gray80: '#333',
  gray70: '#4D4D4D',
  gray60: '#666',
  gray50: '#7F7F7F',
  gray40: '#999',
  gray35: '#a6a6a6',
  gray30: '#B3B3B3',
  gray25: '#bfbfbf',
  gray20: '#CCC',
  gray15: '#D9D9D9',
  gray10: '#E5E5E5',
  gray05: '#F2F2F2'
}

export const navbar = {
  widthLarge: 300,
  widthSmall: 240
}

export default {
  breakpoint,
  color,
  container,
  navbar
}
