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

  async componentDidMount() {
    try {
      this.metadata = Object.keys(this.state.orders).map(items => {
        console.log('items', items);
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {}
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
});
