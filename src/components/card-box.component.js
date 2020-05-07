// @flow
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = {
  children: *,
  image: number,
};

export const CardBox = ({ children, source }: Props) => (
  <View style={styles.whiteCard}>
    <Image source={{ uri: source }} style={styles.img} />
    <View style={styles.view}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  whiteCard: {
    backgroundColor: Colors.white,
    borderRadius: 1,
    marginBottom: 28,
    marginTop: 28,
  },
  img: {
    resizeMode: 'contain',
  },
  view: {
    flex: 1,
    marginLeft: 32,
    alignSelf: 'center',
  },
});
