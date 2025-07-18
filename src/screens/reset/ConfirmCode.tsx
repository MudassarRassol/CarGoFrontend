import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { useState, useRef } from 'react';
import {  StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import ButtonCom from '../../Components/button/Component';
import { colors } from '../../theme/color';
import Topheaderapp from '../../Components/topheaderapp/Topheaderapp';
import Header from '../../Components/Header/Header';
type NavigationProp = StackNavigationProp<RootStackParamList>;

const ConfirmCode = () => {
  const navigation = useNavigation<NavigationProp>();
  const [one, setone] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');

  const twoRef = useRef<TextInput>(null);
  const threeRef = useRef<TextInput>(null);
  const fourRef = useRef<TextInput>(null);

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
          <Text style={styles.title}>Enter 4 Digit Password</Text>
          <Text style={styles.title1}>
            Pls Check Your Email and Enter the 4 digit code
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 12,
            alignItems: 'center',
          }}
        >
          <TextInput
            value={one}
            onChangeText={val => {
              setone(val);
              if (val) twoRef.current?.focus();
            }}
            maxLength={1}
            keyboardType="numeric"
            style={styles.input}
          />

          <TextInput
            ref={twoRef}
            value={two}
            onChangeText={val => {
              setTwo(val);
              if (val) threeRef.current?.focus();
            }}
            maxLength={1}
            keyboardType="numeric"
            style={styles.input}
          />

          <TextInput
            ref={threeRef}
            value={three}
            onChangeText={val => {
              setThree(val);
              if (val) fourRef.current?.focus();
            }}
            maxLength={1}
            keyboardType="numeric"
            style={styles.input}
          />

          <TextInput
            ref={fourRef}
            value={four}
            onChangeText={setFour}
            maxLength={1}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>

        <View style={styles.buttoncon}>
          <ButtonCom
            text="Continue"
            buttonstyle={styles.buttonstyle2}
            onPress={() => navigation.navigate('ConfirmCodeSms')}
          />
        </View>

        <Text
          style={{ marginHorizontal: 20, textAlign: 'center', marginTop: 20 }}
          onPress={() => navigation.navigate('SignIn')}
        >
          Return to sign in
        </Text>
      </View>
    </ScrollView>
  );
};

export default ConfirmCode;

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
    letterSpacing: 3,
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
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    width: 50,
    height: 50,
    textAlign: 'center',
    // borderRadius : 100
  },
});
