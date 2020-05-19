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
import { reserveDelivery } from '../modules/deliveries/data/reserve-delivery';
import { ModalDelivery } from './components/modal-delivery';
import { Navigation } from './navigation/navigation';


const App = () => {

  const handleOnDeliveryReserve = (deliveryItem) => {
    Navigation.toggleModal('DeliveryModal', { deliveryItem });
    reserveDelivery({ deliveryId: deliveryItem.id, driverId: getDriver().id });
  }

  return (
    <SafeAreaView style={[s.ba, s.flx_i]}>
      <StatusBar barStyle="dark-content" />
      <ModalDelivery ref={Navigation.addModal('DeliveryModal')} />
      <Header />
      <DeliveriesList onDeliveryReserve={handleOnDeliveryReserve} style={[s.p_m]} />
      <MainTabs />
    </SafeAreaView>
  );
}


// export default from './../design-system/storybook';
export default App;
