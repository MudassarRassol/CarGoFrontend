import { Button, SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native';
import React, { use } from 'react';
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
import API from '../api';
import { useDispatch } from 'react-redux';
import CountryPickerScreen from '../../Components/countrypicker/CountryPickerScreen';
type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp','ConfirmCode'>;
const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName,setfullname] = useState('');
  const [country,setcountry] = useState('');
  const [phone,setphone] = useState('');
  const [loading,setloading] = useState(false)
  const createaccount=async()=>{
    setloading(true)
    try {
      const res = await API.post('/api/auth/signup',{
        email,password,fullName,phone,country
      })
      if(res.status === 201){
        navigation.navigate('ConfirmCode')
        setloading(false)
        navigation.navigate('SignIn')
      }
    } catch (error) {
      setloading(false)
     console.log('❌ Axios Error:', JSON.stringify(error, null, 2));
    }

  }

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
            value: fullName,
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
            placeholder: 'phone',
            value: phone,
            onChangeText: setphone,
            keyboardType: 'phone-pad', 
            // secureTextEntry: true, 
          }} 
        />
        <CountryPickerScreen onSelectCountry={(value) => setcountry(value)} />
      </View>
      <View  style={styles.buttoncon} >
      <ButtonCom  text={loading ? 'Loading...' : 'Sign Up'} buttonstyle={styles.buttonstyle2} textstyle={styles.txt} onPress={()=>createaccount()}  />
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
        <ButtonCom  text='Sign Up with Google' buttonstyle={styles.buttonstyle3} textstyle={styles.txt} 
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
