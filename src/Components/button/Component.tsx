import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createstyles } from './button.styles';
import { IButtonProps } from './button.props';

const ButtonCom = ({ text, buttonstyle, textstyle, onPress, icon }: IButtonProps) => {
  const style = createstyles();
  return (
    <Pressable style={[style.container, buttonstyle]} onPress={onPress}>
      <View style={style.innerContainer}>
        {icon && <View style={style.iconWrapper}>{icon}</View>}
        <Text style={[style.text, textstyle]}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonCom;
