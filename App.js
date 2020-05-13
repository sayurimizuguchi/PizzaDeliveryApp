import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { getPaymentList } from './src/api/request';
import { CardBox } from './src/components/card-box.component';
import { TextDefault } from './src/components/text.component';
import { GET_PAYMENT_LIST } from './src/general.constants';
import { transformRespone } from './src/api/request.utils';


class App extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      orders: {},
    };
    this.metadata = {};
    this.defaultImage =
      'https://cdn.icon-icons.com/icons2/1465/PNG/512/543pizza1_100912.png';
  }

  async componentWillMount() {
    console.log(' BEFORE this.state.orders', this.state.orders)
    try {
      await fetch(GET_PAYMENT_LIST, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => transformRespone(response))
        .then(responseJSON => {
          this.setState({ orders: responseJSON })
        });

    } catch (err) {
      console.log(err);
    }
    console.log(' AFTER this.state.orders', this.state.orders)
  }

  async completePayment() {
    try {
      await fetch(CONFIRM_PAYMENT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: {
          id: this.state.orders.data,
        }
      })
        .then(response => transformRespone(response))
        .then(responseJSON => {
          this.setState({ orders: responseJSON })
        });

    } catch (err) {
      console.log(err);
    }
    console.log(' AFTER this.state.orders', this.state.orders)
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
              {/* {this.state.orders.paymentIntents.data.map(
                ({ metadata }, index) => {
                  console.log('name', metadata);
                  return (
                    <CardBox source={this.defaultImage} key={index}>
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
              )} */}
            </View>
            <View style={styles.body} />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}


// export default from './src/design-system/storybook';
export default App;




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
