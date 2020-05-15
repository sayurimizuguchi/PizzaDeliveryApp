import React from 'react';
import { TouchableOpacity } from 'react-native';
import { s } from '../styles';
import { Text } from './text.component';


const styles = {
  container: {
    false: {
      ...s.bg_gray_m
    },
    true: {
      ...s.bg_black
    }
  },
  text: {
    false: {
      ...s.black
    },
    true: {
      ...s.white
    }
  }
}


export const PillToggle = ({
  on = false,
  children,
}) =>
  <TouchableOpacity style={[s.bg_gray_m, s.ph_s, s.pv_xs, s.br5, styles.container[on]]}>
    <Text style={[styles.text[on]]}>{children}</Text>
  </TouchableOpacity>