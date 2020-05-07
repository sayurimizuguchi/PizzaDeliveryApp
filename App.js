import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Header, Colors } from 'react-native/Libraries/NewAppScreen';

import { paymentListResponse } from './src/general.constants';
import { CardBox } from './src/components/card-box.component';

export default class App extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      orders: paymentListResponse,
    };
    this.metadata = {};
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.box}>
              {this.state.orders.paymentIntents.data.map(
                ({ metadata }, index) => {
                  console.log('name', metadata);
                  return (
                    <CardBox source={metadata.delivery.image} key={index}>
                      <Text>{metadata.delivery.name}</Text>
                      <Text>{metadata.delivery.hour}</Text>
                      <Text>{metadata.delivery.addressDelivery}</Text>
                    </CardBox>
                  );
                },
              )}
            </View>
            <View style={styles.body} />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  box: {
    flex: 1,
    padding: 50,
  },
});
