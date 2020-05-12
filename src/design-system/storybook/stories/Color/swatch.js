import React from 'react';
import { View } from 'react-native';
import { s } from './../../../../design-system/styles';

export const Swatch = ({
  style = []
}) =>
  <View style={[s.br2, s.bg_gray_m, s.m_xs, { width: 60, height: 60}, ...style]} />