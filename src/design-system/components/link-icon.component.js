import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from './icon.component';
import { s, colors } from './../styles';


export const LinkIcon = ({
  children,
  iconName = 'left-arrow',
  props,
  onPress = () => { },
  style = [],
}) =>
  <TouchableOpacity onPress={onPress} {...props} style={[s.flx_row, s.aic, ...style]}>
    <Icon name={iconName} color={colors.black} style={[s.mr_xxs]} />
    {children}
  </TouchableOpacity>