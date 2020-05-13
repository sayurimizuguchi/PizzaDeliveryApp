import React from 'react';
import { View } from 'react-native';
import { Text } from './text.component';
import { Icon } from './icon.component';
import { s } from './../styles';

export const ToggleableStrike = ({
  striked = false,
  children,
}) =>
  <View style={[s.flx_row, s.aic]}>
    <Icon name="check" />
    <Text style={[s.f_copy_bold]}>{children}</Text>
  </View>