import React from 'react';
import { Modal, Text, View, SafeAreaView } from 'react-native'
import { s } from './../../design-system/styles'
import { LinkIcon } from './../../design-system/components';

const noop = () => { };


export const ModalBottom = ({
  visible = false,
  onClosePress = () => { },
  children,
}) => {
  return (
    <Modal
      onShow={noop}
      onDismiss={noop}
      visible={visible}
      animationType={'fade'}
      transparent={true}
      key={'1'}
      onRequestClose={noop}
    >
      <View style={[s.flx_i, s.jcfe, { backgroundColor: 'rgba(0, 0, 0, 0.9)' }]}>
        <View style={[s.bg_white, s.br3]}>
          <SafeAreaView>
            <LinkIcon style={[s.absolute, s.right_0, s.mr_m, s.mt_s, { zIndex: 10 }]} onPress={onClosePress} iconName="left-arrow">
              <Text style={[s.f_copy]}>Cancel</Text>
            </LinkIcon>
            {children}
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  )
} 