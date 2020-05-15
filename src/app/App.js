import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { getPaymentList } from '../api/request';
import { CardBox } from '../components/card-box.component';
import { TextDefault } from '../components/text.component';
import { GET_PAYMENT_LIST } from '../general.constants';
import { transformRespone } from '../api/request.utils';
import { Header } from './components/header.component';
import { MainTabs } from './components/main-tabs.component';
import { DeliveriesList } from '../modules/deliveries/deliveries-list.component';
import { s } from '../design-system/styles';
import { getDriver } from '../modules/driver';


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

  // async componentWillMount() {
  //   console.log(' BEFORE this.state.orders', this.state.orders)
  //   try {
  //     await fetch(GET_PAYMENT_LIST, {
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then(response => transformRespone(response))
  //       .then(responseJSON => {
  //         this.setState({ orders: responseJSON })
  //       });

  //   } catch (err) {
  //     console.log(err);
  //   }
  //   console.log(' AFTER this.state.orders', this.state.orders)
  // }

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
      <SafeAreaView style={[s.ba, s.flx_i]}>
        <StatusBar barStyle="dark-content" />
        <Header />
        <DeliveriesList driverId={getDriver().id} style={[s.p_m]} />
        <MainTabs />
      </SafeAreaView>
    );
  }
}


export default from './../design-system/storybook';
// export default App;




// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   box: {
//     flex: 1,
//     padding: 50,
//   },
//   hourText: {
//     color: 'gray',
//     fontFamily: 'sans-serif-medium',
//     fontSize: 10,
//   },
// });


/**
 *
 *
 *
 * <ScrollView
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
              )}
            </View >
  <View style={styles.body} />
          </ScrollView >
 */