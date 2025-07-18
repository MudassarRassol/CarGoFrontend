import { Image, ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { createstyles } from './onboarding.styles';
import assests from '../../assets';
import ButtonCom from '../../Components/button/Component';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'ScreenOne'>;

const Onboarding = () => {
  const navigation = useNavigation<NavigationProp>();
  const style = createstyles();
  return (
    <ImageBackground
      style={style.container}
      source={assests.carBg}
      resizeMode='cover'
    >
      <ImageBackground
        style={{ height: '100%'}}
        source={assests.overlay}
        resizeMode="cover"
        
      >
        <View style={style.logocontainer}>
          <Image
            style={style.carlogo}
            source={assests.logo}
            resizeMode="contain"
          />
        </View>
        <View style={style.textcontainer}>
          <Text style={style.title}>Welcome to</Text>
          <Text style={style.title}>CAR GO</Text>
        </View>
        <ButtonCom 
        text='GET STARTED'
        onPress={() => navigation.navigate('ScreenTwo')}
        />
      </ImageBackground>
    </ImageBackground>
  );
};

export default Onboarding;
