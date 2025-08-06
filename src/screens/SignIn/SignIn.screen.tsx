import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../Components/Header/Header';
import InputCom from '../../Components/input/Input';
import { useState } from 'react';
import ButtonCom from '../../Components/button/Component';
import CheckBox from '@react-native-community/checkbox';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../theme/color';
import API from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../utils/redux/authSlice';

type NavigationProp = StackNavigationProp<RootStackParamList,"Home">;


const SignIn = () => {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [loading,setloading] = useState(false)
const dispatch = useDispatch();
    const login=async()=>{
    setloading(true)
    try {
      const res = await API.post('/api/auth/login',{
        email,password
      })
      if(res.status === 201){
        await AsyncStorage.setItem('userlogin', 'true');
        await AsyncStorage.setItem('token', res.data.token);
        dispatch(loginSuccess())
        navigation.navigate('Home')
        setloading(false)
      }
    } catch (error) {
      setloading(false)
     console.log('❌ Axios Error:', error);
    }

  }

  return (
    <ScrollView showsVerticalScrollIndicator = {false} >
      <Header />
      <View style={styles.textcontainer}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.title}>Ready to hit the road</Text>
      </View>
      <View style={{ marginHorizontal: 20 , marginTop : 30}}>
        <InputCom
          data={{
            placeholder: 'Email / Phone Number',
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
      </View>
      <View style = {{ flexDirection : 'row' , justifyContent : 'space-between' , marginHorizontal: 20 , marginVertical : 10 }} >
      <View style={{flexDirection : 'row' , alignItems : 'center' , gap : 1}} >
         <CheckBox
          value={isSelected}
          onValueChange={setSelection}
            tintColors={{ true: '#0c0e0fff', false: '#aaa' }}
        />
          <Text style={{letterSpacing : 1 , fontSize : 10}} >
            Remember Me!
          </Text>
        </View>
        <Text style={{letterSpacing : 1 , fontSize : 12}  } onPress={()=> navigation.navigate('Reset')} >Forget Password?</Text>
      </View>
      <View  style={styles.buttoncon} >
      <ButtonCom  text={loading ? 'loading...' : 'login'} buttonstyle={styles.buttonstyle} onPress={()=>login()} />
      <ButtonCom  text='Sign up' buttonstyle={styles.buttonstyle2} textstyle={styles.txt} onPress={()=> navigation.navigate('SignUp')} />
      </View>
      <View style={styles.or} >
        <View style={styles.line} />
        <Text style={{ marginHorizontal: 20, textAlign : 'center' , letterSpacing : 1 , fontSize : 15 , fontWeight : 'bold' }} >
          Or
        </Text>
        <View style={styles.line} />
      </View>
      <View style={{ marginHorizontal: 20 , margin : 'auto' , width : '100%' }}>
        <ButtonCom  text='Sign in with Google' buttonstyle={styles.buttonstyle3} textstyle={styles.txt} onPress={()=> navigation.navigate('Onboarding')}  icon={<Icon2 name="google" size={20} />}  />
        <ButtonCom  text='Sign in with Apple' buttonstyle={styles.buttonstyle3} textstyle={styles.txt} icon={<Icon2 name="apple" size={20} />} />
      </View>
      <Text style={{ marginHorizontal: 20, textAlign : 'center' , marginTop : 20 }} onPress={()=> navigation.navigate('SignUp')} >
        Don't have an account? Sign Up.
      </Text>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  textcontainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  buttonstyle : {
    position : 'relative',
    margin : 0
  },
  buttoncon : {
    flexDirection : 'column'  , gap : 20 , marginHorizontal: 20 ,marginTop : 30 , width : "100%" 
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
