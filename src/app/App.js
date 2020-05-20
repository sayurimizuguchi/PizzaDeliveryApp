import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Header } from './components/header.component';
import { MainTabs } from './components/main-tabs.component';
import { DeliveriesList } from '../modules/deliveries/deliveries-list.component';
import { s } from '../design-system/styles';
import { getDriver } from '../modules/driver';
import { reserveDelivery } from '../modules/deliveries/data/reserve-delivery';
import { ModalDelivery } from './components/modal-delivery';
import { Navigation } from './navigation/navigation';


const App = () => {

  const [completedDeliveryIds, setCompletedDeliveryIds] = useState([]);

  const handleOnDeliveryReserve = (deliveryItem) => {
    reserveDelivery({ deliveryId: deliveryItem.id, driverId: getDriver().id })
  }

  const handleOnDeliveryStart = (deliveryItem) => {
    Navigation.toggleModal('DeliveryModal', { deliveryItem });
  }

  const handleCompleteDelivery = (deliveryItem) => {
    setCompletedDeliveryIds([
      ...completedDeliveryIds,
      deliveryItem.id,
    ])
  }

  return (
    <SafeAreaView style={[s.ba, s.flx_i]}>
      <StatusBar barStyle="dark-content" />
      <ModalDelivery onCompleteDelivery={handleCompleteDelivery} ref={Navigation.addModal('DeliveryModal')} />
      <Header />
      <DeliveriesList
        completedDeliveryIds={completedDeliveryIds}
        onDeliveryStart={handleOnDeliveryStart}
        onDeliveryReserve={handleOnDeliveryReserve}
        style={[s.p_m]}
      />
      <MainTabs />
    </SafeAreaView>
  );
}


// export default from './../design-system/storybook';
export default App;
