import React from 'react';
import { View } from 'react-native';
import { ButtonIcon, Text } from '../../design-system/components';
import { s } from '../../design-system/styles';

export const MainTabs = () =>
  <View style={[s.flx_row, s.bt, s.b__gray_m, s.jcsa, s.pv_m, s.ph_l, s.b]}>
    <ButtonIcon iconName="motorcycle">
      <Text style={[s.white]}>Deliveries</Text>
    </ButtonIcon>
    <ButtonIcon iconName="bill">
      <Text style={[s.white]}>Earnings</Text>
    </ButtonIcon>
  </View>