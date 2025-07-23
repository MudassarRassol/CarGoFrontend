import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Model from '../countrypicker/Model';
import Line from '../line/Line';

type Props = {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
};

const CardPicker = ({ isVisible, setIsVisible }: Props) => {

  const [paymentmethod, setpaymentmethod] = useState('Cash Payment');

  return (
    <Model visible={isVisible} setVisible={() => setIsVisible(!isVisible)}>
      <View style={styles.container}>
        <Text style={{ marginVertical : 7 , textAlign : 'center' , letterSpacing :1 }} >Cash Payment</Text>
        <Line/>
        <Text  style={{ marginVertical : 7 , textAlign : 'center' ,letterSpacing :1 }}  >Card Payment</Text>

        {/* <ButtonCom title={card} onPress={() => setIsVisible(true)} /> */}
      </View>
    </Model>
  );
};

export default CardPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    gap: 10,
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30
  },
});
