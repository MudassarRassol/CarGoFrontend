import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import React from 'react';
import { IBottomSheetProps } from './Model.propes';
const Model = ({ visible, setVisible, children }: IBottomSheetProps) => {
  return (
    <Modal
      presentationStyle="overFullScreen"
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Pressable onPress={() => setVisible(false)} style={styles.dim} />
      <View style={styles.modalOverlay}>{children}</View>
    </Modal>
  );
};

export default Model;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dim: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
});
