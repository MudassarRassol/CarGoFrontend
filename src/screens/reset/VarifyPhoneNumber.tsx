
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../Components/Header/Header';
import InputCom from '../../Components/input/Input';
import { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import ButtonCom from '../../Components/button/Component';
import CountryPickerScreen from '../../Components/countrypicker/CountryPickerScreen';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const VarifyPhoneNumber = () => {
  const navigation = useNavigation<NavigationProp>();
  const [number, setnumber] = useState('');
const [country,setCountry] = useState('')
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={{position : 'absolute' }} >
        <Header />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.textcontainer}>
          <Text style={styles.title}>Varify  Phone Number</Text>
          <Text style={styles.title1}>
            We have send sms code to your Number
          </Text>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <CountryPickerScreen onSelectCountry={(value) => setCountry(value)} color="white" />
          <InputCom
            data={{
              placeholder: 'Phone Number',
              value: number,
              onChangeText: setnumber,
              keyboardType: 'phone-pad',
            }}
          />
        </View>

        <View style={styles.buttoncon}>
          <ButtonCom
            text="Continue"
            buttonstyle={styles.buttonstyle2}
            onPress={() => navigation.navigate('ConfirmCode')}
          />
        </View>

        <Text
          style={{ marginHorizontal: 20, textAlign: 'center', marginTop: 20 }}
          onPress={() => navigation.navigate('SignUp')}
        >
          Don't have an account? Login.
        </Text>
      </View>
    </ScrollView>
  );
};

export default VarifyPhoneNumber;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    //   paddingVertical: 40,
  },

  textcontainer: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  title1: {
    fontSize: 10,
    marginTop: 5,
    // fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  buttonstyle: {
    position: 'relative',
    margin: 0,
  },
  buttoncon: {
    flexDirection: 'column',
    gap: 12,
    marginHorizontal: 20,
    marginTop: 30,
    width: '100%',
  },
  buttonstyle2: {
    position: 'relative',
    margin: 0,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
  },
});



