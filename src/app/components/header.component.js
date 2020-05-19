import React from 'react'
import { View } from 'react-native';
import { s } from './../../design-system/styles';
import { Icon, Text } from './../../design-system/components';

export const Header = () =>
  <View style={[s.flx_column, s.aic, s.pb_m]}>
    <Icon name="motorcycle" width={80} height={80} />
    <Text style={[s.f_heading_1]}>Deliveries</Text>
  </View>