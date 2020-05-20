import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, ToggleableStrike, HighlightPanel, PillToggle, Icon } from '../../design-system/components'
import { s, colors } from '../../design-system/styles'

export const DeliveryItem = ({
  delivery = {}, //<-- this should take better props
  onReserve = () => { },
  onStart = () => { },
}) => {
  const isReserved = !!delivery?.transfer_group;
  const [isSelected, setIsSelected] = useState(isReserved);
  const handleOnStart = () => onStart(delivery)

  const handleOnReserve = () => {
    setIsSelected(true);
    onReserve(delivery);
  }

  return (
    <HighlightPanel highlighted={isSelected && !delivery.isComplete} style={[s.mt_s, s.flx_row]}>
      <View style={[s.flx_i]}>
        {
          (isSelected && !delivery.isComplete) &&
          <TouchableOpacity style={[s.absolute, s.left_0, { marginTop: 8, zIndex: 10 }]}>
            <Icon name="close" width={25} height={25} color={colors.black} />
          </TouchableOpacity>
        }
        <ToggleableStrike striked={delivery.isComplete} title={delivery?.metadata?.addressDelivery ?? 'Missing Address'}>
          <Text style={[s.gray_m, isSelected && s.black]}>{delivery?.metadata?.hour ?? 'Change to "created"'}</Text>
          <Text style={[s.gray_m, isSelected && s.black]}>{delivery?.metadata?.name ?? 'Missing Name'}</Text>
        </ToggleableStrike>
      </View>
      <View>
        {
          (delivery.isComplete)
            ? null
            : (!isSelected)
              ? <PillToggle onPress={handleOnReserve} on={isSelected}>Accept</PillToggle>
              : <PillToggle onPress={handleOnStart} on={isSelected}>Start</PillToggle>
        }
      </View>
    </HighlightPanel>
  );
}