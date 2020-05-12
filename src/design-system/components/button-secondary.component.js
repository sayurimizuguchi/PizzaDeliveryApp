import React from 'react';
import { TouchableOpacity } from 'react-native';
import { s } from './../styles';


export const ButtonSecondary = ({
  children,
  props,
}) =>
  <TouchableOpacity {...props} style={[s.br4, s.bg_black, s.p_xs, s.flx_row, s.jcc, s.aic]}>{children}</TouchableOpacity>