import React, { useState } from 'react'
import { View } from 'react-native'
import { Text, ToggleableStrike, HighlightPanel, PillToggle } from '../../design-system/components'
import { s } from '../../design-system/styles'

export const DeliveryItem = ({
  delivery = {}, //<-- this should take better props
  onStart = () => { },
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleOnStart = () => onStart(delivery.id)
  const toggleSelected = () => { setIsSelected(!isSelected); };

  return (
    <HighlightPanel highlighted={isSelected} style={[s.mt_s, s.flx_row]}>
      <View style={[s.flx_i]}>
        <ToggleableStrike title={delivery.metadata.addressDelivery}>
          <Text style={[s.gray_m, isSelected && s.black]}>{delivery.metadata.hour}</Text>
          <Text style={[s.gray_m, isSelected && s.black]}>Jordan Green</Text>
        </ToggleableStrike>
      </View>
      <View>
        {
          (!isSelected)
            ? <PillToggle onPress={toggleSelected} on={isSelected}>Accept</PillToggle>
            : <PillToggle onPress={handleOnStart} on={isSelected}>Start</PillToggle>
        }
      </View>
    </HighlightPanel>
  );
}