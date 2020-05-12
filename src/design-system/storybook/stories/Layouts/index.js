import React from 'react';
import { View } from 'react-native';
import style from './style';
import { s } from './../../../styles';

export const CenterView = ({ children }) => {
  return <View style={style.main}>{children}</View>;
}

export const PaddingView = ({children}) =>
  <View style={[s.p_l]}>{children}</View>