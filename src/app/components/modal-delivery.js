import React, { useImperativeHandle, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { s } from './../../design-system/styles';
import { ModalBottom } from './modal-bottom';
import { ButtonPrimary } from './../../design-system/components';
import { completeDelivery } from './../../modules/deliveries';

export function ModalDelivery({
  onCompleteDelivery = () => { }
}, ref) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deliveryItem, setDeliveryItem] = useState({});


  const closeModal = () => {
    setIsModalVisible(false);
  }

  const openModal = (params) => {
    setIsModalVisible(true);
    setDeliveryItem(params.deliveryItem)
  }

  useImperativeHandle(ref, () => ({ toggleModal: openModal }));

  handleDelivered = () => {
    completeDelivery({ deliveryId: deliveryItem.id })
      .then(() => {
        closeModal();
        onCompleteDelivery(deliveryItem)
      })
  }

  return (
    <ModalBottom
      visible={isModalVisible}
      onClosePress={closeModal}
    >
      <>
        <View style={[{ height: 250, overflow: 'hidden' }]}>
          <Text>Pizza Image</Text>
          <Image width={100} height={100} style={[{ width: 400, height: 400, left: -150, top: -160 }]} source={require('./../assets/big-pizza.png')} />
        </View>
        <View style={[s.pb_xxxl, s.ph_l, s.aic]}>
          <Text style={[s.f_heading_3]}>{deliveryItem?.metadata?.addressDelivery ?? 'Missing Address'}</Text>
          <Text style={[s.f_copy]}>{deliveryItem?.metadata?.hour ?? 'Missing time'}</Text>
          <Text style={[s.f_copy]}>{deliveryItem?.metadata?.name ?? 'Missing Name'}</Text>
        </View>
        <ButtonPrimary onPress={handleDelivered} style={[s.asc]}>
          <Text style={[s.f_copy_bold, s.white]}>Delivered</Text>
        </ButtonPrimary>
      </>
    </ModalBottom>
  )
}
ModalDelivery = React.forwardRef(ModalDelivery); 