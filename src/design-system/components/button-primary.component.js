import React from 'react';
import { TouchableOpacity } from 'react-native';
import { s } from './../styles';


export const ButtonPrimary = ({
  children,
  props,
  style = [],
  onPress = () => { }
}) =>
  <TouchableOpacity onPress={onPress} style={[s.br4, s.bg_orange_m, s.p_s, ...style]}>{children}</TouchableOpacity>