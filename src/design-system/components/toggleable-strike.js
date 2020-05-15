import React from 'react';
import { View } from 'react-native';
import { Text } from './text.component';
import { Icon } from './icon.component';
import { s } from './../styles';

export const ToggleableStrike = ({
  striked = false,
  children,
  title = ""
}) =>
  <View style={[s.flx_row, s.aifs]}>
    {
      (striked)
        ? <Icon name="check" />
        : <View style={{ width: 40, height: 40 }} />
    }
    <View style={[s.pl_xs, { paddingTop: 10, }]}>
      <Text style={[s.f_copy_bold]}>{title}</Text>
      {children}
    </View>
    {striked && <View style={[s.br2, s.absolute, s.bg_orange_m, { opacity: .4, height: 5, left: 40, right: -15, top: 18 }]} />}
  </View>