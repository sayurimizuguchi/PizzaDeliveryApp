import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from './icon.component';
import { s, colors } from './../styles';


export const LinkIcon = ({
  children,
  iconName = motorcycle,
  props,
}) =>
  <TouchableOpacity {...props} style={[s.flx_row, s.jcc, s.aic]}>
    <Icon name={iconName} color={colors.black} style={[s.mr_xxs]} />
    {children}
  </TouchableOpacity>