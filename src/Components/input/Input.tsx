import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { InputField } from './type';

type Props = {
  data: InputField;
};

const InputCom = ({ data }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = data.secureTextEntry;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={data.placeholder}
        keyboardType={data.keyboardType}
        onChangeText={data.onChangeText}
        value={data.value}
        placeholderTextColor="#aaa"
        secureTextEntry={isPasswordField ? !showPassword : false}
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
    padding: 12,
    fontSize: 16,
    color: '#000',
    paddingRight: 60, // space for show/hide button
  },
  showHideButton: {
    position: 'absolute',
    right: 15,
    top: 14,
  },
});
