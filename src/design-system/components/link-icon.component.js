import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from './icon.component';
import { s, colors } from './../styles';


export const LinkIcon = ({
  children,
  iconName = 'left-arrow',
  iconSize = 20,
  props,
  onPress = () => { },
  style = [],
}) =>
  <TouchableOpacity onPress={onPress} {...props} style={[s.flx_row, s.aic, ...style]}>
    <Icon name={iconName} color={colors.black} width={iconSize} height={iconSize} style={[s.mr_xxs]} />
    {children}
  </TouchableOpacity>