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
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 1,
    marginBottom: 28,
    marginTop: 28,
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  view: {
    marginLeft: 32,
    alignSelf: 'center',
  },
});
