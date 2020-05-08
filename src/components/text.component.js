// @flow
import React from 'react';
import { Text } from 'react-native';

type Props = {
  style: Object,
};

export const TextDefault = ({ style, children }: Props) => (
  <Text style={Object.assign({}, textStyle, style)}>{children}</Text>
);

const textStyle = {
  fontFamily: 'sans-serif',
  color: 'black',
};
