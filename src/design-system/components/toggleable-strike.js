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
    <Icon name="check" />
    <View style={{ paddingTop: 10 }}>
      <Text style={[s.f_copy_bold]}>{title}</Text>
      {children}
    </View>
  </View>