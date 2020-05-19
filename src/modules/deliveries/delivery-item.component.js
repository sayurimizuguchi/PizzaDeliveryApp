import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, ToggleableStrike, HighlightPanel, PillToggle, Icon } from '../../design-system/components'
import { s, colors } from '../../design-system/styles'

export const DeliveryItem = ({
  delivery = {}, //<-- this should take better props
  onStart = () => { },
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleOnStart = () => onStart(delivery)
  const toggleSelected = () => { setIsSelected(!isSelected); };

  console.log('delivery item', { delivery });

  return (
    <HighlightPanel highlighted={isSelected} style={[s.mt_s, s.flx_row]}>
      <View style={[s.flx_i]}>
        {
          isSelected &&
          <TouchableOpacity onPress={toggleSelected} style={[s.absolute, s.left_0, { marginTop: 8, zIndex: 10 }]}>
            <Icon name="close" width={25} height={25} color={colors.black} />
          </TouchableOpacity>
        }
        <ToggleableStrike title={delivery?.metadata?.addressDelivery ?? 'Missing Address'}>
          <Text style={[s.gray_m, isSelected && s.black]}>{delivery?.metadata?.hour ?? 'Change to "created"'}</Text>
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