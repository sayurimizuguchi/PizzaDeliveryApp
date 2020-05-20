import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { DeliveryItem } from './delivery-item.component';
import { s } from '../../design-system/styles';
import { getDeliveries } from './data/get-deliveries';



export const DeliveriesList = ({
  onDeliveryReserve = () => { },
  onDeliveryStart = () => { },
  completedDeliveryIds = [],
  style = []
}) => {

  const [delivers, setDeliveries] = useState([])

  useEffect(() => {
    getDeliveries()
      .then((deliveries) => deliveries.map(delivery => ({
        ...delivery,
        isComplete: completedDeliveryIds.includes(delivery.id)
      })))
      .then(setDeliveries);
  }, [])

  useEffect(() => {
    setDeliveries(delivers.map(delivery => ({
      ...delivery,
      isComplete: completedDeliveryIds.includes(delivery.id)
    })))
  }, [completedDeliveryIds])

  return (
    <FlatList
      style={[s.flx_i]}
      contentContainerStyle={[...style]}
      data={delivers}
      renderItem={({ item }) => <DeliveryItem onReserve={onDeliveryReserve} onStart={onDeliveryStart} delivery={item} />}
    />
  )
}