import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { InputField } from './type';
import { colors } from '../../theme/color';

type Props = {
  data: InputField;
};

const InputCom = ({ data }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = data.secureTextEntry;

  return (
    <View style={styles.container}>
      <View  style={[styles.input]} >
             { data.Icon && data.Icon}
      <TextInput
        placeholder={data.placeholder}
        keyboardType={data.keyboardType}
        onChangeText={data.onChangeText}
        value={data.value}
        placeholderTextColor="#aaa"
        secureTextEntry={isPasswordField ? !showPassword : false}
        style={{width : '100%'}}
        
      />
      {isPasswordField && (
        <TouchableOpacity
          style={styles.showHideButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={{ color: '#020202ff', fontSize: 14 }}>
            {showPassword ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
      )}
      {
        data.default && 
        <TouchableOpacity
          style={styles.showDefualtButton}
          onPress={data.onpress}
        >
          <Text style={{ color: '#020202ff', fontSize: 10 , padding : 10 }}>
            DAFULT
          </Text>
        </TouchableOpacity>
      }
      </View>
    </View>
  );
};

export default InputCom;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical : 10,
    fontSize: 16,
    color: '#000',
    paddingRight: 60, // space for show/hide button
    backgroundColor : 'white',
    flexDirection : 'row' , 
    alignItems : 'center' , 
    gap : 9
  },
  showHideButton: {
    position: 'absolute',
    right: 15,
    top: 20,
  },
  showDefualtButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor : '#EDEDED',
    borderWidth: 1,
    borderColor : colors.border,
     borderRadius : 10
  },
});
