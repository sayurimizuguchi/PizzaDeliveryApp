import React from 'react';
import { View } from 'react-native';
import { s } from '../styles';

const highlightStyles = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.3,
  shadowRadius: 1,
  ...s.bg_orange_l,
}

export const HighlightPanel = ({
  highlighted = false,
  children,
  style = []
}) =>
  <View style={[s.bg_white, s.br3, s.p_s, highlighted && highlightStyles, ...style]}>
    {children}
  </View>