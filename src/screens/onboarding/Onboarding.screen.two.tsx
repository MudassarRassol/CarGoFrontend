import { Image, ImageBackground, Pressable, Text, View } from 'react-native';
import React from 'react';
import { createstyles } from './onboarding.styles';
import assests from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const OnboardingScreenTwo = () => {
  const navigation = useNavigation<NavigationProp>();
  const style = createstyles();
  return (
    <ImageBackground
      style={style.container}
      source={assests.darkcar}
      resizeMode="cover"
    >
      <ImageBackground
        style={{ height: '100%' }}
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
          <Text style={[style.title]}>Lets Start</Text>
          <Text style={[style.title]}>New Experience</Text>
          <Text style={[style.title]}>With CAR GO</Text>
        </View>
        <View style={{ position : 'absolute', bottom : 20 , marginHorizontal : 20 , width : '100%'  }} >
          {[
            'Discover your next adventure with Qent. we’re here to',
            'provide you with a seamless car rental experience.',
            'Let’s get started on your journey.',
          ].map((line, index) => (
            <Text
              key={index}
              style={{ color: 'white', fontSize: 13, marginBottom: 1 , }}
            >
              {line}
            </Text>
          ))} 
            <Pressable style={style.button} onPress={()=>navigation.navigate('SignIn')} >
            <Text style={{color : 'white'}} >
                Lets Go
            </Text>
          </Pressable>
        </View>

      </ImageBackground>
    </ImageBackground>
  );
};

export default OnboardingScreenTwo;
