import { Button, SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native';
import React from 'react';
import Header from '../../Components/Header/Header';
import InputCom from '../../Components/input/Input';
import { useState } from 'react';
import ButtonCom from '../../Components/button/Component';
import { RootStackParamList } from '../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../theme/color';
type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;
const SignUp = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname,setfullname] = useState('');
  const [country,setcountry] = useState('');
  return (
    <ScrollView 
    showsVerticalScrollIndicator = {false}
    >
      <Header />
      <View style={styles.textcontainer}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={{ marginHorizontal: 20 , marginTop : 20}}>
        <InputCom
          data={{
            placeholder: 'Full Name',
            value: fullname,
            onChangeText: setfullname,
            keyboardType: 'email-address',
          }}
        />
        <InputCom
          data={{
            placeholder: 'Email',
            value: email,
            onChangeText: setEmail,
            keyboardType: 'email-address',
          }}
        />
        <InputCom
          data={{
            placeholder: 'password',
            value: password,
            onChangeText: setPassword,
            keyboardType: 'default', 
            secureTextEntry: true, 
          }} 
        />
                <InputCom
          data={{
            placeholder: 'Country',
            value: country,
            onChangeText: setcountry,
            keyboardType: 'default',
          }}
        />
      </View>
      <View  style={styles.buttoncon} >
      <ButtonCom  text='Sign up' buttonstyle={styles.buttonstyle2} textstyle={styles.txt}  />
      <ButtonCom  text='Login' buttonstyle={styles.buttonstyle} onPress={()=> navigation.navigate('SignIn')}  />
      </View>
      <View style={styles.or} >
        <View style={styles.line} />
        <Text style={{ marginHorizontal: 20, textAlign : 'center' , letterSpacing : 1 , fontSize : 15 , fontWeight : 'bold' }} >
          Or
        </Text>
        <View style={styles.line} />
      </View>
      <View style={{ marginHorizontal: 20 , margin : 'auto' , width : '100%' }}>
        <ButtonCom  text='Sign Up with Google' buttonstyle={styles.buttonstyle3} textstyle={styles.txt} onPress={()=> navigation.navigate('ScreenOne')} 
           icon={<Icon name="google" size={20} />}
          />
        <ButtonCom  text='Sign Up with Apple' buttonstyle={styles.buttonstyle3} textstyle={styles.txt} icon={<Icon2 name="apple" size={20} />} />
      </View>
      <Text style={{ marginHorizontal: 20, textAlign : 'center' , marginTop : 20 , marginBottom : 10 }} onPress={()=> navigation.navigate('SignIn')} >
        Don't have an account? Sign In.
      </Text>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textcontainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
    textAlign : 'center'
  },
  buttonstyle : {
    position : 'relative',
    margin : 0
  },
  buttoncon : {
    flexDirection : 'column'  , gap : 18 , marginHorizontal: 20 ,marginTop : 30 , width : "100%" 
  },
  buttonstyle2:{
    position : 'relative',
    margin : 0,
    backgroundColor : 'white',
    borderWidth : 1,
    borderColor : 'black'
  },
  txt:{
    color : 'black',
    fontWeight : 'bold'
  },
  buttonstyle3:{
    position : 'relative',
    margin : 0,
    backgroundColor : 'white',
    borderWidth : 1,
    borderColor : 'black',
    marginTop : 20
  },
    or:{
     marginVertical: 20 ,
     flexDirection : 'row',
     alignItems : 'center',
     justifyContent : 'center'
    }
    ,
    line : {
      borderWidth : 1,
      borderColor : colors.black,
      width : '35%' 
    }
});
