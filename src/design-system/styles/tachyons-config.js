import { StyleSheet, Platform } from 'react-native';
import NativeTachyons, { styles as tachyonsStyles } from 'react-native-style-tachyons';


const base = 18;
const fontBase = 14;

export const scale2 = {
  xxxs: 4,
  xxs: 8,
  xs: 12,
  s: 16,
  m: 24,
  l: 32,
  xl: 48,
  xxl: 72,
  xxxl: 96,
  xxxxl: 120,
}

const directions = [
  { shortName: 'l', direction: 'Left' },
  { shortName: 'r', direction: 'Right' },
  { shortName: 't', direction: 'Top' },
  { shortName: 'b', direction: 'Bottom' },
  { shortName: 'h', direction: 'Horizontal' },
  { shortName: 'v', direction: 'Vertical' },
  { shortName: '', direction: '' },
];

const generateCssSpace = (cssPropertyDomain) => {
  const firstLetter = cssPropertyDomain.charAt(0);
  return Object.keys(scale2)
    .reduce((acc, curr) => {
      return acc = {
        ...acc,
        ...directions.reduce((acc2, dir) => {
          return acc2 = {
            ...acc2,
            [`${firstLetter}${dir.shortName}_${curr}`]: { [`${cssPropertyDomain}${dir.direction}`]: scale2[curr] }
          }
        }, {})
      }
    }, {});
}

export const colors = {
  orange_m: '#F8A467',
  yellow_m: '#F8CF67',
  black: '#323232',
  gray_m: '#C4C4C4'
};

const iosFontClasses = {
  serif: { fontFamily: 'Merriweather', fontWeight: '100', },
  serif_bold: { fontFamily: 'Merriweather', fontWeight: '700' },
  sans_serif: { fontFamily: 'Merriweather Sans', fontWeight: '100' },
  sans_serif_bold: { fontFamily: 'Merriweather Sans', fontWeight: '700' },
};
const androidFontClasses = {
  serif: { fontFamily: 'Merriweather', fontWeight: '100', },
  serif_bold: { fontFamily: 'Merriweather', fontWeight: '700' },
  sans_serif: { fontFamily: 'Merriweather Sans', fontWeight: '100' },
  sans_serif_bold: { fontFamily: 'Merriweather Sans', fontWeight: '700' },
};

const platformFonts = {
  ...Platform.select({
    ios: iosFontClasses,
    android: androidFontClasses,
  })
};

const fonts = {
  f_heading_1: [ platformFonts.serif_bold, tachyonsStyles.f1 ],
  f_heading_2: [ platformFonts.serif, tachyonsStyles.f2],
  f_heading_3: [ platformFonts.serif_bold, tachyonsStyles.f3],
  f_copy: [ platformFonts.sans_serif, tachyonsStyles.f4],
  f_copy_bold: [ platformFonts.sans_serif_bold, tachyonsStyles.f4],
  f_emphasized: [ platformFonts.serif_bold, tachyonsStyles.f4],
}

NativeTachyons.build({
  colors: { palette: colors },
  rem: fontBase,
}, StyleSheet);

export const s = {
  ...tachyonsStyles,
  ...fonts,
  ...generateCssSpace('margin'),
  ...generateCssSpace('padding'),
}