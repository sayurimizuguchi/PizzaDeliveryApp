import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from './icon.component';
import { s, colors } from './../styles';


export const ButtonIcon = ({
  children,
  iconName = motorcycle,
  props,
}) =>
  <TouchableOpacity {...props} style={[s.br4, s.bg_black, s.ph_xs, s.pv_xxxs, s.flx_row, s.jcc, s.aic]}>
    <Icon name={iconName} color={colors.white} style={[s.mr_xxs]} />
    {children}
  </TouchableOpacity>