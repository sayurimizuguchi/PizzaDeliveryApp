import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { paymentListResponse } from './src/general.constants';
import { CardBox } from './src/components/card-box.component';
import { TextDefault } from './src/components/text.component';

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
                  console.log('name', metadata.delivery.image);
                  return (
                    <CardBox source={metadata.delivery.image} key={index}>
                      <TextDefault>
                        {metadata.delivery.addressDelivery}
                      </TextDefault>
                      <TextDefault style={styles.hourText}>
                        {metadata.delivery.hour}
                      </TextDefault>
                      <TextDefault>{metadata.delivery.name}</TextDefault>
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
  hourText: {
    color: 'gray',
    fontFamily: 'sans-serif-medium',
    fontSize: 10,
  },
});
