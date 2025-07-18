import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../Components/Header/Header';
import InputCom from '../../Components/input/Input';
import { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import ButtonCom from '../../Components/button/Component';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const Reset = () => {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');

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
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.title1}>
            Enter the email address associated with your account and
          </Text>
          <Text style={styles.title1}>
            we'll send you a link to reset your password.
          </Text>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <InputCom
            data={{
              placeholder: 'Email',
              value: email,
              onChangeText: setEmail,
              keyboardType: 'email-address',
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

export default Reset;

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
});
