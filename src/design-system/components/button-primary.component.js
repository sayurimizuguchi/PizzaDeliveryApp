import React from 'react';
import { TouchableOpacity } from 'react-native';
import { s } from './../styles';


export const ButtonPrimary = ({
  children,
  props,
}) =>
  <TouchableOpacity style={[s.br4, s.bg_orange_m, s.p_s]}>{children}</TouchableOpacity>