import React from 'react';
import { View, Text as RnText } from 'react-native';

export const Text = ({ children, ...props }) => <RnText {...props}>{children}</RnText>;