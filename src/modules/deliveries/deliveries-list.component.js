import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { DeliveryItem } from './delivery-item.component';
import { s } from '../../design-system/styles';
import { getDeliveries } from './data/get-deliveries';
import { reserveDelivery } from './data/reserve-delivery';



export const DeliveriesList = ({
  driverId,
  style = []
}) => {

  const [delivers, setDeliveries] = useState([])

  useEffect(() => {
    getDeliveries().then(setDeliveries);
  }, [])

  const handleReserve = (deliveryId) => {
    reserveDelivery({ deliveryId, driverId });
  }

  return (
    <FlatList
      contentContainerStyle={[s.flx_i, ...style]}
      data={delivers}
      renderItem={({ item }) => {
        return (<DeliveryItem onPress={handleReserve} delivery={item} />)
      }}
    />
  )
}