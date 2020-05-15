import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, ToggleableStrike } from '../../design-system/components'
import { s } from '../../design-system/styles'

export const DeliveryItem = ({
  delivery = {}, //<-- this should take better props
  onPress = () => { },
}) => {
  const handlePress = () => onPress(delivery.id)
  return (
    <TouchableOpacity onPress={handlePress} style={[s.pv_s]}>
      <ToggleableStrike title={delivery.metadata.addressDelivery}>
        <Text style={[s.gray_m]}>{delivery.metadata.hour}</Text>
        <Text style={[s.gray_m]}>Jordan Green</Text>
      </ToggleableStrike>
    </TouchableOpacity>
  );
}