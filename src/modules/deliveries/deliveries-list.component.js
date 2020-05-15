import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { DeliveryItem } from './delivery-item.component';
import { s } from '../../design-system/styles';
import { getDeliveries } from './data/get-deliveries';



export const DeliveriesList = ({
  onDeliveryStart = () => { },
  style = []
}) => {

  const [delivers, setDeliveries] = useState([])

  useEffect(() => {
    getDeliveries().then(setDeliveries);
  }, [])

  const handleReserve = (deliveryId) => {
    onDeliveryStart(deliveryId)
  }

  return (
    <FlatList
      contentContainerStyle={[s.flx_i, ...style]}
      data={delivers}
      renderItem={({ item }) => <DeliveryItem onStart={handleReserve} delivery={item} />}
    />
  )
}